import { base, baseFontSize } from "../constants/scale"

const calc = (n: number) => n * base
const pxCalc = (n: number) => calc(n)
const relCalc = (n: number) => calc(n) / baseFontSize

interface ScaleUtils {
	/**
	 * Returns a multiple of "n" as a unitless px value
	 */
	(n: number): number
	/**
	 * Returns a multiple of "n" in px units
	 */
	px: (n: number) => string
	/**
	 * Returns a multiple of "n" in em units
	 */
	em: (n: number) => string
	/**
	 * Returns a multiple of "n" in rem units
	 */
	rem: (n: number) => string
}

export const scale: ScaleUtils = Object.assign(calc, {
	px: (n: number) => `${pxCalc(n)}px`,
	em: (n: number) => `${relCalc(n)}em`,
	rem: (n: number) => `${relCalc(n)}rem`
})
