// The playground loads its libraries from CDNs. A browser refuses a script
// whose bytes don't match its integrity hash, so every hash here is checked
// against what the CDN serves, and each file is run to see that it still
// provides what the page calls.
const test = require("node:test");
const assert = require("node:assert");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const html = fs.readFileSync(
  path.join(__dirname, "../playground/index.html"),
  "utf8"
);

// Every <script src="https://..."> tag of the page, as its attributes.
const scripts = [...html.matchAll(/<script\s+([^>]*src="https:[^>]*)>/g)].map(
  (m) => Object.fromEntries([...m[1].matchAll(/([\w-]+)="([^"]*)"/g)].map((a) => [a[1], a[2]]))
);

const find = (name) => scripts.find((s) => s.src.includes(name));

// Downloads a script the way the browser would and checks it against its hash.
async function load(script) {
  const res = await fetch(script.src, { redirect: "error" });
  assert.strictEqual(res.status, 200, script.src);
  assert.strictEqual(res.headers.get("access-control-allow-origin"), "*", script.src);

  const body = Buffer.from(await res.arrayBuffer());
  const hash = "sha384-" + crypto.createHash("sha384").update(body).digest("base64");
  assert.strictEqual(script.integrity, hash, script.src);

  return body.toString("utf8");
}

// Runs scripts in a bare global scope, like script tags sharing a window.
function run(...sources) {
  const window = {};
  window.window = window;
  window.self = window;
  window.globalThis = window;
  window.console = console;
  vm.createContext(window);
  sources.forEach((source) => vm.runInContext(source, window));

  return window;
}

test("the page loads the four libraries it always has", () => {
  assert.deepStrictEqual(
    scripts.map((s) => s.src.replace(/@?\d+\.\d+\.\d+/, "")),
    [
      "https://unpkg.com/react/umd/react.development.js",
      "https://unpkg.com/react-dom/umd/react-dom.development.js",
      "https://unpkg.com/@babel/standalone/babel.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor//min/vs/loader.min.js",
    ]
  );
});

test("every external script names an exact version and an integrity hash", () => {
  for (const script of scripts) {
    assert.match(script.src, /\d+\.\d+\.\d+/, script.src);
    assert.match(script.integrity || "", /^sha384-/, script.src);
    assert.strictEqual(script.crossorigin, "anonymous", script.src);
  }
});

test("react and react-dom match their hashes and provide what the page renders with", async () => {
  const react = await load(find("/react@"));
  const reactDom = await load(find("/react-dom@"));
  const window = run(react, reactDom);

  assert.strictEqual(typeof window.React.createElement, "function");
  assert.strictEqual(typeof window.ReactDOM.createRoot, "function");
  assert.strictEqual(window.React.version, window.ReactDOM.version);
});

test("babel matches its hash and compiles an example the way the page does", async () => {
  const window = run(await load(find("@babel/standalone")));

  // Same options as renderComponent in playground/index.html.
  const { code } = window.Babel.transform(
    "const App = () => <Box a>hi</Box>;\nexport { App }",
    { presets: ["react"], plugins: [["transform-modules-commonjs"]] }
  );

  assert.match(code, /React\.createElement\(Box/);
  assert.match(code, /exports\.App = App/);
});

test("the monaco loader matches its hash and the editor files are the same version", async () => {
  const loader = find("monaco-editor");
  await load(loader);

  // The loader fetches the editor from the path given to require.config.
  const base = loader.src.replace("/loader.min.js", "");
  assert.ok(html.includes(`'vs': '${base}'`), base);
});
