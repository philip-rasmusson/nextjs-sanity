import { system, Config } from "styled-system"
import { scale } from "../utils/calc"

const transform = (val: number | string) =>
	typeof val === "number" ? scale.px(val) : val

const configs: Config = {
	gridColumnGap: {
		property: "gridColumnGap",
		transform,
	},
	gridRowGap: {
		property: "gridRowGap",
		transform,
	},
}

export const gridGap = system(configs)
