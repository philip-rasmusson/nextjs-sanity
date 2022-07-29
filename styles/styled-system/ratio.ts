import { system, Config } from "styled-system"

const configs: Config = {
	ratio: {
		property: "paddingBottom",
		transform: (ratio: number | string) =>
			typeof ratio === "string" ? ratio : `${ratio * 100}%`
	}
}

export const ratio = system(configs)
