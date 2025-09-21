import { CSS } from "@stitches/react";
import { MethodRegistrar, Chain } from "./types";

export type Methods = {
  gradient: (
    direction: GradientDirection,
    colors: GradientColors,
    options?: GradientOptions,
  ) => Chain;
};

declare module "./types" {
  interface ChainMethods extends Methods {}
}

export function register(method: MethodRegistrar) {
  method("gradient", applyGradient);
}

// Direction types
export type LinearDirection =
  | "to-top"
  | "to-top-right"
  | "to-right"
  | "to-bottom-right"
  | "to-bottom"
  | "to-bottom-left"
  | "to-left"
  | "to-top-left"
  | string; // for custom angles like "45deg"

export type RadialDirection = "radial";
export type ConicDirection = "conic";

export type GradientDirection =
  | LinearDirection
  | RadialDirection
  | ConicDirection;

// Color types
export type ColorStop = {
  color: string;
  stop?: string; // e.g., "0%", "50%", "100%"
};

export type GradientColors = string[] | ColorStop[];

// Options for different gradient types
export interface LinearGradientOptions {
  // No additional options for linear gradients currently
}

export interface RadialGradientOptions {
  center?:
    | "center"
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top left"
    | "top right"
    | "bottom left"
    | "bottom right"
    | string;
  size?:
    | "closest-side"
    | "closest-corner"
    | "farthest-side"
    | "farthest-corner"
    | string;
  shape?: "circle" | "ellipse";
}

export interface ConicGradientOptions {
  center?: string; // e.g., "center", "50% 50%", "top left"
  from?: string | number; // starting angle, e.g., "0deg", 90
}

export type GradientOptions =
  | LinearGradientOptions
  | RadialGradientOptions
  | ConicGradientOptions;

/**
 * Applies gradient styles to the CSS object.
 *
 * @param css - The current CSS object
 * @param direction - Gradient direction/type
 * @param colors - Array of colors or color stops
 * @param options - Additional gradient options
 * @returns Updated CSS object with gradient applied
 *
 * @example
 * // Linear gradient
 * applyGradient({}, "to-right", ["red", "blue"])
 * // Output: { backgroundImage: 'linear-gradient(to right, red, blue)' }
 *
 * @example
 * // Radial gradient
 * applyGradient({}, "radial", ["white", "black"], { center: "top", size: "farthest-corner" })
 * // Output: { backgroundImage: 'radial-gradient(farthest-corner at top, white, black)' }
 *
 * @example
 * // Conic gradient
 * applyGradient({}, "conic", ["red", "yellow", "green"], { from: "90deg" })
 * // Output: { backgroundImage: 'conic-gradient(from 90deg, red, yellow, green)' }
 */
function applyGradient(
  css: CSS,
  direction: GradientDirection,
  colors: GradientColors,
  options?: GradientOptions,
): CSS {
  const gradientValue = buildGradientValue(direction, colors, options);

  return {
    ...css,
    backgroundImage: gradientValue,
  };
}

function buildGradientValue(
  direction: GradientDirection,
  colors: GradientColors,
  options?: GradientOptions,
): string {
  const colorString = buildColorString(colors);

  if (direction === "radial") {
    return buildRadialGradient(colorString, options as RadialGradientOptions);
  }

  if (direction === "conic") {
    return buildConicGradient(colorString, options as ConicGradientOptions);
  }

  // Linear gradient (default)
  return buildLinearGradient(direction as LinearDirection, colorString);
}

function buildColorString(colors: GradientColors): string {
  return colors
    .map((color) => {
      if (typeof color === "string") {
        return color;
      }
      return color.stop ? `${color.color} ${color.stop}` : color.color;
    })
    .join(", ");
}

function buildLinearGradient(
  direction: LinearDirection,
  colorString: string,
): string {
  // Convert direction shortcuts to CSS values
  const directionMap: Record<string, string> = {
    "to-top": "to top",
    "to-top-right": "to top right",
    "to-right": "to right",
    "to-bottom-right": "to bottom right",
    "to-bottom": "to bottom",
    "to-bottom-left": "to bottom left",
    "to-left": "to left",
    "to-top-left": "to top left",
  };

  const cssDirection = directionMap[direction] || direction;
  return `linear-gradient(${cssDirection}, ${colorString})`;
}

function buildRadialGradient(
  colorString: string,
  options?: RadialGradientOptions,
): string {
  const parts: string[] = [];

  // Only add shape if explicitly specified
  if (options?.shape) {
    parts.push(options.shape);
  }

  // Add size if specified
  if (options?.size) {
    parts.push(options.size);
  }

  // Add position if specified
  if (options?.center) {
    // Map common hyphenated values to CSS-correct space-separated values
    const centerMap: Record<string, string> = {
      "top-left": "top left",
      "top-right": "top right",
      "bottom-left": "bottom left",
      "bottom-right": "bottom right",
    };

    const center = centerMap[options.center] || options.center;
    parts.push(`at ${center}`);
  }

  const optionsString = parts.length > 0 ? `${parts.join(" ")}, ` : "";
  return `radial-gradient(${optionsString}${colorString})`;
}

function buildConicGradient(
  colorString: string,
  options?: ConicGradientOptions,
): string {
  const parts: string[] = [];

  if (options?.from !== undefined) {
    const fromValue =
      typeof options.from === "number" ? `${options.from}deg` : options.from;
    parts.push(`from ${fromValue}`);
  }

  if (options?.center) {
    parts.push(`at ${options.center}`);
  }

  const optionsString = parts.length > 0 ? `${parts.join(" ")}, ` : "";
  return `conic-gradient(${optionsString}${colorString})`;
}
