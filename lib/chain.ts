import { CSS } from "@stitches/react";
import {
  ElementTag as Tag,
  Node,
  StitchesInstance,
  Chain,
  VariantCSS,
  MethodRegistrar,
  ChainMethod,
} from "./types";

import * as box from "./box";
import * as size from "./size";
import * as colors from "./colors";
import * as align from "./align";
import * as aspect from "./aspect";
import * as border from "./border";
import * as cursor from "./cursor";
import * as outline from "./outline";
import * as shadow from "./shadow";
import * as spacing from "./spacing";
import * as text from "./text";
import * as transition from "./transition";
import * as scroll from "./scroll";
import * as flex from "./flex";
import * as selectors from "./selectors";
import * as grid from "./grid";
import * as responsive from "./responsive";
import * as transform from "./transform";
import * as accessibility from "./accessibility";
import * as backdrop from "./backdrop";
import * as gradient from "./gradient";

const modules = [
  align,
  aspect,
  border,
  box,
  colors,
  cursor,
  size,
  outline,
  shadow,
  spacing,
  text,
  transition,
  scroll,
  flex,
  selectors,
  responsive,
  grid,
  transform,
  accessibility,
  backdrop,
  gradient,
];

export function createChain(
  stitches: StitchesInstance,
  elementTag?: Tag,
  startingValues?: {
    tree: CSS;
    variants: VariantCSS;
    children: Record<string, CSS | Chain>;
  },
): Chain {
  let tree: CSS = { ...startingValues?.tree };
  const variants: VariantCSS = { ...startingValues?.variants };
  const children: Record<string, CSS | Chain> = { ...startingValues?.children };

  let self: Chain;

  const chain: Chain = {
    extend: (newElementTag?: Tag) => {
      return createChain(stitches, newElementTag || elementTag, {
        tree,
        variants,
        children,
      });
    },
    compile,
    // @ts-ignore
    select: (selector: string, subchain: CSS | Chain) => {
      children[selector] = subchain;
      return self;
    },
    // In your element method:
    element: (rawCSS?: CSS) => {
      const component = stitches.styled(elementTag || "div", {
        ...chain.compile(),
        ...rawCSS,
      });

      return component;
    },
    variant: (
      name: string,
      value: string | number | boolean,
      subchain: Chain | CSS,
    ) => {
      if (!subchain) {
        // @ts-ignore
        subchain = value as Chain | CSS;
        value = true;
      }

      if (variants[name]) {
        variants[name].push({ chain: subchain, value });
      } else {
        variants[name] = [
          {
            value,
            chain: subchain,
          },
        ];
      }
      return self;
    },

    css: (rawCSS: CSS) => {
      update(rawCSS);
      return self;
    },
  };

  modules.forEach((m) => m.register(addMethod));

  const proxy = new Proxy(chain as Chain, {
    get(target, propKey, receiver) {
      // Default implemented methods
      if (propKey in target) {
        return Reflect.get(target, propKey, receiver);
      }

      if (typeof propKey !== "string") {
        return undefined;
      }

      return (...args: any[]) => {
        if (!args.length) {
          return receiver;
        }

        // Fallback to style property update with given key-value pairs.
        update({ [propKey]: args[0] });

        return receiver;
      };
    },
  });

  self = proxy as Chain;

  return proxy as Chain;

  function addMethod(name: string, fn: ChainMethod) {
    chain[name] = (...args: unknown[]) => {
      update(fn.apply(chain, [tree, ...args]));
      return self;
    };
  }

  function update(updates: CSS) {
    tree = { ...tree, ...updates };
  }

  function compile() {
    const output: CSS = {
      ...tree,
    };

    output.variants = {};

    for (const name in variants) {
      output.variants[name] = {};

      for (const variant of variants[name]) {
        output.variants[name][variant.value] =
          typeof variant.chain.compile === "function"
            ? variant.chain.compile()
            : variant.chain;
      }
    }

    for (const selector in children) {
      output[selector] =
        typeof children[selector].compile === "function"
          ? (children[selector] as Chain).compile()
          : children[selector];
    }

    return output;
  }
}
