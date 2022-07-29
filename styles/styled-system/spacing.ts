import { system, compose } from "styled-system"
import { scale } from "../utils/calc"

const configs: any = {}

const transform = (val: number | string) =>
	typeof val === "number" ? scale.px(val) : val

configs.margin = {
	m: {
		property: "margin",
		transform,
	},
	mt: {
		property: "marginTop",
		transform,
	},
	mr: {
		property: "marginRight",
		transform,
	},
	mb: {
		property: "marginBottom",
		transform,
	},
	ml: {
		property: "marginLeft",
		transform,
	},
	mx: {
		properties: ["marginLeft", "marginRight"],
		transform,
	},
	my: {
		properties: ["marginTop", "marginBottom"],
		transform,
	},
}

configs.padding = {
	p: {
		property: "padding",
		transform,
	},
	pt: {
		property: "paddingTop",
		transform,
	},
	pr: {
		property: "paddingRight",
		transform,
	},
	pb: {
		property: "paddingBottom",
		transform,
	},
	pl: {
		property: "paddingLeft",
		transform,
	},
	px: {
		properties: ["paddingLeft", "paddingRight"],
		transform,
	},
	py: {
		properties: ["paddingTop", "paddingBottom"],
		transform,
	},
}

configs.gap = {
	columnGap: {
		property: "columnGap",
		transform,
	},
	rowGap: {
		property: "rowGap",
		transform,
	},
}

export const margin = system(configs.margin)
export const padding = system(configs.padding)
export const gap = system(configs.gap)
export const space = compose(margin, padding, gap)
