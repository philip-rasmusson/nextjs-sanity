import { createBreakpoint, createMap } from "styled-components-breakpoint"

export type Breakpoint = "xs" | "s" | "m" | "l" | "xl" | "xxl"
const breakpoints: Record<Breakpoint, number> = {
	xs: 468,
	s: 576,
	m: 768,
	l: 992,
	xl: 1200,
	xxl: 1400,
}

const breakpoint = createBreakpoint({ _: 0, ...breakpoints })
const breakpointMap = createMap(breakpoints)

export { breakpoints, breakpointMap, breakpoint }
