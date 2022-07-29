import { colors, ColorKeys } from "./colors"
import * as CSS from "csstype"

export type BorderColorKeys = Extract<ColorKeys, "navy" | "blue33">

// export const borderColors: Record<BorderColorKeys, CSS.Property.Color> = {
// 	navy: colors["navy"],
// 	blue33: colors["blue33"],
// }

// export const borderKeys = Object.keys(borderColors) as BorderColorKeys[]
