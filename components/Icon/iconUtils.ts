import { iconMap, IconTypes } from "./IconMap"

export const isIconType = (iconType: string): iconType is IconTypes =>
	Object.keys(iconMap).includes(iconType)
