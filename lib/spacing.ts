import { CSS } from "@stitches/react";
import { MethodRegistrar, Chain } from "./types";
import { boxSideProps, BoxSides } from "./box-sides";

export type Methods = {
  space: (options: SpacingOptions) => Chain;
  margin: (options: number | string | BoxSides, override?: BoxSides) => Chain;
  padding: (options: number | string | BoxSides, override?: BoxSides) => Chain;
  gap: (value: number | string) => Chain;
};

declare module "./types" {
  interface ChainMethods extends Methods {}
}

export function register(method: MethodRegistrar) {
  method("space", applySpace);
  method("margin", applyMargin);
  method("padding", applyPadding);
  method("gap", applyGap);
}

export interface SpacingOptions {
  gap?: string | number;
  inner?: string | number | BoxSides;
  outer?: string | number | BoxSides;
}

/**
 * Applies spacing styles to the CSS object.
 *
 * @param css - The current CSS object
 * @param options - SpacingOptions object
 * @returns Updated CSS object with spacing styles applied
 *
 * @example
 * // Input:
 * applySpace({}, { gap: 10, inner: 20, outer: 30 })
 * // Output:
 * { gap: 10, padding: 20, margin: 30 }
 */
function applySpace(css: CSS, options: SpacingOptions): CSS {
  return applySpacingOptions(css, options);
}

/**
 * Applies margin styles to the CSS object.
 *
 * @param css - The current CSS object
 * @param options - Margin value or BoxSides object
 * @param override - Optional BoxSides object to override specific sides
 * @returns Updated CSS object with margin styles applied
 *
 * @example
 * // Input:
 * applyMargin({}, 10)
 * // Output:
 * { margin: 10 }
 *
 * @example
 * // Input:
 * applyMargin({}, 20, { right: 15 })
 * // Output:
 * { marginTop: 20, marginBottom: 20, marginLeft: 20, marginRight: 15 }
 */
function applyMargin(
  css: CSS,
  options: number | string | BoxSides,
  override?: BoxSides,
): CSS {
  let result = applySpacingOptions(css, { outer: options });
  if (override) {
    result = applySpacingOptions(result, { outer: override });
  }
  return result;
}

/**
 * Applies padding styles to the CSS object.
 *
 * @param css - The current CSS object
 * @param options - Padding value or BoxSides object
 * @param override - Optional BoxSides object to override specific sides
 * @returns Updated CSS object with padding styles applied
 *
 * @example
 * // Input:
 * applyPadding({}, 10)
 * // Output:
 * { padding: 10 }
 *
 * @example
 * // Input:
 * applyPadding({}, 20, { right: 15 })
 * // Output:
 * { paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 15 }
 */
function applyPadding(
  css: CSS,
  options: number | string | BoxSides,
  override?: BoxSides,
): CSS {
  let result = applySpacingOptions(css, { inner: options });
  if (override) {
    result = applySpacingOptions(result, { inner: override });
  }
  return result;
}

/**
 * Applies gap styles to the CSS object.
 *
 * @param css - The current CSS object
 * @param value - Gap value for flex/grid containers
 * @returns Updated CSS object with gap applied
 *
 * @example
 * // Input:
 * applyGap({}, 20)
 * // Output:
 * { gap: '20px' }
 *
 * @example
 * // Input:
 * applyGap({}, '1rem')
 * // Output:
 * { gap: '1rem' }
 */
function applyGap(css: CSS, value: number | string): CSS {
  return {
    ...css,
    gap: typeof value === "number" ? `${value}px` : value,
  };
}

function applySpacingOptions(css: CSS, options: SpacingOptions): CSS {
  const result = {
    ...css,
    ...boxSideProps("padding", options.inner),
    ...boxSideProps("margin", options.outer),
  };

  if (options.gap !== undefined) {
    result.gap =
      typeof options.gap === "number" ? `${options.gap}px` : options.gap;
  }

  return result;
}
