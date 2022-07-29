import { breakpoints as bps, borderColors } from "../constants"
import { DefaultTheme } from "styled-components"
import { colors } from "../constants"

// Breakpoints
export interface Breakpoints
	extends Array<string>,
		Record<keyof typeof bps, string> {}

const breakpointList: string[] = (Object.keys(bps) as Array<
	keyof typeof bps
>).reduce((acc: string[], key) => [...acc, `${bps[key]}px`], [])

const breakpoints: Breakpoints = Object.assign(breakpointList)

breakpoints.xs = breakpoints[0]
breakpoints.s = breakpoints[1]
breakpoints.m = breakpoints[2]
breakpoints.l = breakpoints[3]
breakpoints.xl = breakpoints[4]
breakpoints.xxl = breakpoints[5]

export const theme: DefaultTheme = {
	colors,
	breakpoints,
	borderColors,
	darkMode: false,
}
