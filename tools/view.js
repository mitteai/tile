const { build } = require("esbuild");
const fs = require("fs");
const path = require("path");
const http = require("http");
const { spawn } = require("child_process");

// Get the example file path from command line arguments
const exampleFile = process.argv[2];

if (!exampleFile) {
  console.error("Usage: ./tools/view <example-file.tsx>");
  console.error("Example: ./tools/view examples/box.tsx");
  process.exit(1);
}

// Resolve the full path
const fullPath = path.resolve(exampleFile);

if (!fs.existsSync(fullPath)) {
  console.error(`File not found: ${fullPath}`);
  process.exit(1);
}

// Create a temporary directory for build output
const tempDir = path.join(__dirname, ".temp");
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// Generate HTML template that includes React and renders the example
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tile Example: ${path.basename(exampleFile)}</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #fff;
        }
        #root {
    width: 100vw;
    height: calc(100vh - 38px);
    padding: 0px;
    position: fixed;
    top: 38px;
    left: 0;
    overflow: scroll;
        }
        .example-info {
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            background: rgba(0,0,0,0.95);
            color: rgba(255,255,255,0.75);
            padding: 12px 12px;
            font-size: 12px;
            z-index: 1000;
            font-family:  'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace;;
        }
    </style>
</head>
<body>
    <div class="example-info">${path.basename(exampleFile)}</div>
    <div id="root"></div>
    <script src="bundle.js"></script>
</body>
</html>
`;

// Create wrapper that imports the example and renders it
const wrapperContent = `
import React from 'react';
import { createRoot } from 'react-dom/client';

// Import the example component
import ExampleComponent from '${fullPath.replace(/\\/g, "/")}';

// Create root and render
const container = document.getElementById('root');
const root = createRoot(container);

// Try to render the example
try {
  // If it's a default export that's a component, render it
  if (React.isValidElement(ExampleComponent)) {
    root.render(ExampleComponent);
  } else if (typeof ExampleComponent === 'function') {
    root.render(React.createElement(ExampleComponent));
  } else if (ExampleComponent && typeof ExampleComponent.default === 'function') {
    root.render(React.createElement(ExampleComponent.default));
  } else {
    // Fallback: try to render whatever was exported
    root.render(React.createElement('div', { style: { padding: 20 } },
      React.createElement('h1', null, 'Example loaded'),
      React.createElement('div', null, 'Check console for any errors')
    ));
    console.log('Exported value:', ExampleComponent);
  }
} catch (error) {
  console.error('Error rendering example:', error);
  root.render(React.createElement('div', {
    style: { padding: 0 }
  }, 'Error rendering example. Check console for details.'));
}
`;

const wrapperPath = path.join(tempDir, "wrapper.jsx");
const htmlPath = path.join(tempDir, "index.html");

// Write files
fs.writeFileSync(wrapperPath, wrapperContent);
fs.writeFileSync(htmlPath, htmlTemplate);

async function buildAndServe() {
  try {
    console.log(`Building ${exampleFile}...`);

    // Build with esbuild
    await build({
      entryPoints: [wrapperPath],
      bundle: true,
      outfile: path.join(tempDir, "bundle.js"),
      format: "iife",
      platform: "browser",
      target: ["es2020"],
      jsx: "automatic",
      define: {
        "process.env.NODE_ENV": '"development"',
      },
      external: [],
      loader: {
        ".tsx": "tsx",
        ".ts": "ts",
        ".jsx": "jsx",
        ".js": "js",
      },
      sourcemap: true,
      minify: false,
    });

    console.log("Build successful!");

    // Create a simple HTTP server
    const server = http.createServer((req, res) => {
      let filePath = path.join(
        tempDir,
        req.url === "/" ? "index.html" : req.url,
      );

      // Security: prevent directory traversal
      if (!filePath.startsWith(tempDir)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }

      if (!fs.existsSync(filePath)) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      const ext = path.extname(filePath);
      const contentType =
        {
          ".html": "text/html",
          ".js": "application/javascript",
          ".js.map": "application/json",
        }[ext] || "text/plain";

      res.writeHead(200, { "Content-Type": contentType });
      const content = fs.readFileSync(filePath);
      res.end(content);
    });

    const port = 3001;
    server.listen(port, () => {
      const url = `http://localhost:${port}`;
      console.log(`Server running at ${url}`);
      console.log("Press Ctrl+C to stop the server");

      // Try to open the browser
      const platform = process.platform;
      const command =
        platform === "darwin"
          ? "open"
          : platform === "win32"
            ? "start"
            : "xdg-open";

      try {
        spawn(command, [url], { stdio: "ignore", detached: true });
      } catch (error) {
        console.log(
          `Could not auto-open browser. Please visit ${url} manually.`,
        );
      }
    });

    // Handle graceful shutdown
    process.on("SIGINT", () => {
      console.log("\nShutting down server...");
      server.close(() => {
        // Clean up temp files
        try {
          fs.rmSync(tempDir, { recursive: true, force: true });
        } catch (error) {
          // Ignore cleanup errors
        }
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
}

buildAndServe();
