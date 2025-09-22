import { CSS } from "@stitches/react";
import { MethodRegistrar, Chain } from "./types";

export type Methods = {
  transition: (
    speedOrOptions?: number | string | TransitionOptions,
    props?: string[]
  ) => Chain;
};

declare module "./types" {
  interface ChainMethods extends Methods {}
}

export interface TransitionOptions {
  speed?: number | string;
  ease?: string;
  delay?: number | string;
  props?: string[];
}

export function register(method: MethodRegistrar) {
  method("transition", applyTransition);
}

const defaultTransitionProps = [
  "color",
  "background-color",
  "border-color",
  "text-decoration-color",
  "fill",
  "stroke",
  "opacity",
  "box-shadow",
  "transform",
  "filter",
  "backdrop-filter",
];

/**
 * Applies transition styles to the CSS object.
 *
 * @param css - The current CSS object
 * @param speedOrOptions - Transition duration (number/string) or TransitionOptions object
 * @param props - Array of CSS properties to transition (when using legacy API)
 * @returns Updated CSS object with transition styles applied
 *
 * @example
 * // Legacy API - simple duration
 * // Input:
 * applyTransition({}, 300)
 * // Output:
 * {
 *   transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
 *   transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
 *   transitionDuration: '300ms'
 * }
 *
 * @example
 * // Legacy API - duration with specific properties
 * // Input:
 * applyTransition({}, '0.5s', ['opacity', 'transform'])
 * // Output:
 * {
 *   transitionProperty: 'opacity, transform',
 *   transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
 *   transitionDuration: '0.5s'
 * }
 *
 * @example
 * // New API - options object
 * // Input:
 * applyTransition({}, { speed: 300, ease: 'ease-in', delay: 100, props: ['opacity'] })
 * // Output:
 * {
 *   transitionProperty: 'opacity',
 *   transitionTimingFunction: 'ease-in',
 *   transitionDuration: '300ms',
 *   transitionDelay: '100ms'
 * }
 */
function applyTransition(
  css: CSS,
  speedOrOptions?: number | string | TransitionOptions,
  props?: string[],
): CSS {
  if (typeof speedOrOptions === 'object' && speedOrOptions !== null) {
    return applyTransitionOptions(css, speedOrOptions);
  } else {
    return applyTransitionOptions(css, {
      speed: speedOrOptions as number | string,
      props: props
    });
  }
}

function applyTransitionOptions(
  css: CSS,
  options?: TransitionOptions,
): CSS {
  const output = { ...css };
  const { speed, ease, delay, props } = options || {};

  output.transitionProperty = (props || defaultTransitionProps).join(", ");
  output.transitionTimingFunction = ease || "cubic-bezier(0.4, 0, 0.2, 1)";
  output.transitionDuration = speed
    ? typeof speed === "number"
      ? `${speed}ms`
      : speed
    : "150ms";

  if (delay) {
    output.transitionDelay = typeof delay === "number" ? `${delay}ms` : delay;
  }

  return output;
}