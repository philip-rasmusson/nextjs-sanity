import { FontWeight, fontWeight } from "../constants/typography"

export const getFontWeight = (weight: FontWeight): string =>
	fontWeight[weight] || fontWeight["normal"]
