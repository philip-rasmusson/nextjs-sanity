import { system } from "styled-system"
import { scale } from "../utils/calc"

const calc = (val: number | string) =>
	typeof val === "number" ? (val > 1 ? scale.px(val) : `${val * 100}%`) : val

const configs: any = {}

configs.layoutSize = {
	w: {
		property: "width",
		transform: calc
	},
	h: {
		property: "height",
		transform: calc
	},
	maxw: {
		property: "maxWidth",
		transform: calc
	},
	minw: {
		property: "minWidth",
		transform: calc
	},
	minh: {
		property: "minHeight",
		transform: calc
	},
	maxh: {
		property: "maxHeight",
		transform: calc
	},
	size: {
		properties: ["width", "height"],
		transform: calc
	}
}

configs.size = {
	w: {
		property: "width",
		transform: scale.px
	},
	h: {
		property: "height",
		transform: scale.px
	},
	maxw: {
		property: "maxWidth",
		transform: scale.px
	},
	minw: {
		property: "minWidth",
		transform: scale.px
	},
	minh: {
		property: "minHeight",
		transform: scale.px
	},
	maxh: {
		property: "maxHeight",
		transform: scale.px
	},
	size: {
		properties: ["width", "height"],
		transform: scale.px
	}
}

export const layoutSize = system(configs.layoutSize)
export const size = system(configs.size)
