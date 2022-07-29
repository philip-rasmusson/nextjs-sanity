import { system, Config } from "styled-system"
import { border as borderUtil } from "../utils/border"

const config: Config = {
	borderTop: {
		property: "borderTop",
		transform: borderUtil,
	},
	borderRight: {
		property: "borderRight",
		transform: borderUtil,
	},
	borderBottom: {
		property: "borderBottom",
		transform: borderUtil,
	},
	borderLeft: {
		property: "borderLeft",
		transform: borderUtil,
	},
	border: {
		properties: ["borderTop", "borderRight", "borderBottom", "borderLeft"],
		transform: borderUtil,
	},
	borderColor: {
		property: "borderColor",
		scale: "borderColors",
	},
	borderWidth: {
		property: "borderWidth",
	},
	borderRadius: {
		property: "borderRadius",
	},
}

export const border = system(config)
