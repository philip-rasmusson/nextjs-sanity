import * as CSS from "csstype"

export const colorKeys = [
  "navy",
  "white",
  "pink",
  "black",
  "blue100",
  "blue66",
  "blue33",
  "blue11",
  "plum100",
  "plum66",
  "plum33",
  "plum11",
  "green100",
  "green66",
  "green33",
  "green11",
  "salmon100",
  "salmon66",
  "salmon55",
  "salmon33",
  "salmon11",
  "corn100",
  "corn66",
  "corn33",
  "corn11",
  "grey81",
  "greyA6",
  "greyEE",
  "greyF3",
  "bodyColor",
  "bodyTextColor",
  "primary",
  "secondary",
  "alert",
  "success",
  "successNice",
  "hoverBlue",
  "placeholder",
] as const

export type ColorKeys = typeof colorKeys[number]

// Primaries
const navy = "#0D3050"
const white = "#FFFFFF"
const pink = "hotpink"
const black = "#454545"

// Blue
const blue100 = "#729fd4"
const blue66 = "#a2c0e3"
const blue33 = "#d1dff1"
const blue11 = "#f0f4fa"

// Plum
const plum100 = "#c9bdd1"
const plum66 = "#dbd4e1"
const plum33 = "#ede9f0"
const plum11 = "#f9f8fa"

// Green
const green100 = "#c8d3af"
const green66 = "#dbe2ca"
const green33 = "#edf1e5"
const green11 = "#f9faf6"

// Salmon
const salmon100 = "#F28F68"
const salmon66 = "#f6b59c"
const salmon55 = "#f8cbb9"
const salmon33 = "#fce7de"
const salmon11 = "#fef3ee"

// Corn
const corn100 = "#FCD180"
const corn66 = "#FDE1AB"
const corn33 = "#FEF5E3"
const corn11 = "#FFFAF1"

// Grey
const grey81 = "#818181"
const greyA6 = "#a6a6a6"
const greyEE = "#eeeeee"
const greyF3 = "#f3f3f3"

// Alert colors
const alertRed = "#A80000"
const alertGreenSuccess = "#8DC63F"
const alertGreenNice = "#3AC57E"

// Hover
const hoverBlue = "#1c5dac"

// Input placeholder color
const placeholder = "#8697a7"

export const colors: Record<ColorKeys, CSS.Property.Color> = {
  white,
  navy,
  pink,
  black,
  blue100,
  blue66,
  blue33,
  blue11,
  plum100,
  plum66,
  plum33,
  plum11,
  green100,
  green66,
  green33,
  green11,
  salmon100,
  salmon66,
  salmon55,
  salmon33,
  salmon11,
  corn100,
  corn66,
  corn33,
  corn11,
  grey81,
  greyA6,
  greyEE,
  greyF3,
  bodyColor: white,
  bodyTextColor: black,
  primary: navy,
  secondary: blue33,
  alert: alertRed,
  success: alertGreenSuccess,
  successNice: alertGreenNice,
  hoverBlue,
  placeholder,
}
