import { system, Config } from "styled-system"

const configs: Config = {
	fillColor: {
		property: "fill",
		scale: "colors",
	},
}

export const fillColor = system(configs)
