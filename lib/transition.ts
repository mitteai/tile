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

type EaseValue =
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'linear'
  | 'step-start'
  | 'step-end'
  | `cubic-bezier(${number}, ${number}, ${number}, ${number})`
  | `steps(${number})`
  | `steps(${number}, ${'start' | 'end'})`;

export interface TransitionOptions {
  speed?: number | string;
  ease?: EaseValue;
  delay?: number | string;
  props?: string[];
}

export function register(method: MethodRegistrar) {
  method("transition", applyTransition);
}

const DEFAULT_TRANSITION_DURATION = "150ms";
const DEFAULT_TRANSITION_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";
const DEFAULT_TRANSITION_DELAY = "0ms";

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

function isTransitionOptions(value: unknown): value is TransitionOptions {
  return typeof value === 'object' && value !== null;
}

function isValidNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

function formatDuration(speed: number | string | undefined): string {
  if (speed === undefined) {
    return DEFAULT_TRANSITION_DURATION;
  }
  
  if (isValidNumber(speed)) {
    return `${Math.max(0, speed)}ms`;
  }
  
  if (typeof speed === 'string') {
    return speed;
  }
  
  return DEFAULT_TRANSITION_DURATION;
}

function formatDelay(delay: number | string | undefined): string {
  if (delay === undefined) {
    return DEFAULT_TRANSITION_DELAY;
  }
  
  if (isValidNumber(delay)) {
    return `${Math.max(0, delay)}ms`;
  }
  
  if (typeof delay === 'string') {
    return delay;
  }
  
  return DEFAULT_TRANSITION_DELAY;
}

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
  const options = isTransitionOptions(speedOrOptions)
    ? speedOrOptions
    : { 
        speed: speedOrOptions, 
        props: props
      };
  
  return applyTransitionOptions(css, options);
}

function applyTransitionOptions(css: CSS, options: TransitionOptions): CSS {
  const output = { ...css };
  
  const {
    speed,
    ease = DEFAULT_TRANSITION_EASING,
    delay,
    props = defaultTransitionProps
  } = options;

  output.transitionProperty = props.join(", ");
  output.transitionTimingFunction = ease;
  output.transitionDuration = formatDuration(speed);
  output.transitionDelay = formatDelay(delay);

  return output;
}