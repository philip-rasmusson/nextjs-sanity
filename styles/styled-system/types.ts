import {
  ResponsiveValue,
  SpaceProps as _SpaceProps,
  TextAlignProps,
} from "styled-system"
import * as CSS from "csstype"
import { TypographyProps as ITypographyProps } from "styled-system"
import { ColorKeys } from "../constants/colors"
import { BorderColorKeys, FontWeight } from "../constants"

export interface TypographyProps
  extends ITypographyProps,
    SpaceProps,
    TextAlignProps,
    ColorProps {
  textTransform?: ResponsiveValue<CSS.Property.TextTransform>
  fontWeight?: ResponsiveValue<FontWeight>
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace>
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak>
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration>
}

export type SpaceProps = Pick<
  _SpaceProps,
  | "m"
  | "mt"
  | "mr"
  | "mb"
  | "ml"
  | "mx"
  | "my"
  | "p"
  | "pt"
  | "pr"
  | "pb"
  | "pl"
  | "px"
  | "py"
>

export interface TransitionProps {
  transition?: ResponsiveValue<string>
}

export interface OverflowWrapProps {
  overflowWrap?: ResponsiveValue<CSS.Property.OverflowWrap>
}
export interface WordBreakProps {
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak>
}
export interface VisibilityProps {
  visibility?: CSS.Property.Visibility
}

export interface ColorProps {
  textColor?: ResponsiveValue<ColorKeys | string>
  backgroundColor?: ResponsiveValue<ColorKeys | string>
}

export interface FillColorProps {
  fillColor?: ResponsiveValue<ColorKeys>
}

export interface BorderProps {
  /**
   *   Adds a border-top
   */
  borderTop?: ResponsiveValue<boolean>
  /**
   *   Adds a border-right
   */
  borderRight?: ResponsiveValue<boolean>
  /**
   *   Adds a border-bottom
   */
  borderBottom?: ResponsiveValue<boolean>
  /**
   *   Adds a border-left
   */
  borderLeft?: ResponsiveValue<boolean>
  /**
   *   Adds a border
   */
  border?: ResponsiveValue<boolean>
  /**
   *   Overrides the deafult border color
   */
  borderColor?: ResponsiveValue<BorderColorKeys | string>
}

export interface LayoutSizeProps {
  /**
   *   The width utility parses a component's `w` prop and converts it into a CSS width declaration.
   *
   *   - Numbers from 0-1 are converted to percentage widths.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive width styles.
   */
  w?: ResponsiveValue<number | string>
  /**
   *   The height utility parses a component's `h` prop and converts it into a CSS height declaration.
   *
   *   - Numbers from 0-1 are converted to percentage heights.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive height styles.
   */
  h?: ResponsiveValue<number | string>
  /**
   *   The min-width utility parses a component's `minw` prop and converts it into a CSS width declaration.
   *
   *   - Numbers from 0-1 are converted to percentage min-widths.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive min-width styles.
   */
  minw?: ResponsiveValue<number | string>
  /**
   *   The max-width utility parses a component's `maxw` prop and converts it into a CSS width declaration.
   *
   *   - Numbers from 0-1 are converted to percentage max-widths.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive max-width styles.
   */
  maxw?: ResponsiveValue<number | string>
  /**
   *   The min-height utility parses a component's `minh` prop and converts it into a CSS width declaration.
   *
   *   - Numbers from 0-1 are converted to percentage min-heights.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive min-height styles.
   */
  minh?: ResponsiveValue<number | string>
  /**
   *   The max-height utility parses a component's `maxh` prop and converts it into a CSS width declaration.
   *
   *   - Numbers from 0-1 are converted to percentage max-heights.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive max-height styles.
   */
  maxh?: ResponsiveValue<number | string>
  /**
   *   The size utility parses a component's `size` prop and converts it into a CSS width and height declaration.
   *
   *   - Numbers from 0-1 are converted to percentage widths and heights.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive width and height styles.
   */
  size?: ResponsiveValue<number | string>
}

export interface SizeProps {
  /**
   *   The width utility parses a component's `w` prop and converts it into a CSS width declaration.
   *
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive width styles.
   */
  w?: ResponsiveValue<number | string>
  /**
   *   The height utility parses a component's `h` prop and converts it into a CSS height declaration.
   *
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive height styles.
   */
  h?: ResponsiveValue<number | string>
  /**
   *   The min-width utility parses a component's `minw` prop and converts it into a CSS width declaration.
   *
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive min-width styles.
   */
  minw?: ResponsiveValue<number | string>
  /**
   *   The max-width utility parses a component's `maxw` prop and converts it into a CSS width declaration.
   *
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive max-width styles.
   */
  maxw?: ResponsiveValue<number | string>
  /**
   *   The min-height utility parses a component's `minh` prop and converts it into a CSS width declaration.
   *
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive min-height styles.
   */
  minh?: ResponsiveValue<number | string>
  /**
   *   The max-height utility parses a component's `maxh` prop and converts it into a CSS width declaration.
   *
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive max-height styles.
   */
  maxh?: ResponsiveValue<number | string>
  /**
   *   The size utility parses a component's `size` prop and converts it into a CSS width and height declaration.
   *
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive width and height styles.
   */
  size?: ResponsiveValue<number | string>
}

export interface GapProps {
  columnGap?: ResponsiveValue<number | string>
  rowGap?: ResponsiveValue<number | string>
}

// Svg props

export interface StrokeColorProps {
  strokeColor?: ResponsiveValue<CSS.Property.Color>
}

export interface RatioProps {
  ratio?: ResponsiveValue<number | string>
}
