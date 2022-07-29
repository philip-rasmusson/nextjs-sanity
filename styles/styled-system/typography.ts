import { system, compose, Config } from "styled-system"
import { scale } from "../utils/calc"
import { getFontWeight } from "../utils"
import { space } from "./spacing"
import { color } from "./color"

const config: Config = {
	fontFamily: {
		property: "fontFamily",
		transform: scale.px
	},
	fontSize: {
		property: "fontSize",
		transform: scale.px
	},
	fontWeight: {
		property: "fontWeight",
		transform: getFontWeight
	},
	lineHeight: {
		property: "lineHeight",
		transform: scale.px
	},
	letterSpacing: {
		property: "letterSpacing",
		transform: scale.px
	},
	textTransform: {
		property: "textTransform"
	},
	wordBreak: {
		property: "wordBreak"
	},
	whiteSpace: {
		property: "whiteSpace"
	},
	textColor: {
		property: "color",
		scale: "colors"
	},
	textDecoration: {
		property: "textDecoration"
	},
	textAlign: true,
	fontStyle: true
}

export const typography = compose(space, color, system(config))
