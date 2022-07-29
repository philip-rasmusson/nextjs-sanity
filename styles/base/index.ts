import { createGlobalStyle } from "styled-components"
import reset from "./reset"
import base from "./base"
import typography from "./typography"

export interface Config {
	publicPath: string
}

export const GlobalStyles = createGlobalStyle`
		${reset}
		${base}
    ${typography}
	`
