import * as React from "react"
import { iconMap, IconPathProps, IconTypes } from "./IconMap"

import { ColorKeys } from "../../styles/constants"
import { Svg, SvgProps } from "../Svg"

export interface IconProps extends IconPathProps, SvgProps {
	/**
	 * identifiery of which icon to use
	 */
	icon: IconTypes
	color?: ColorKeys
	className?: string
}

const Icon: React.FC<IconProps> = (props) => {
	const { color, ...rest } = props

	return (
		<Svg viewBox="0 0 24 24" {...rest}>
			{iconMap[props.icon] &&
				React.createElement(iconMap[props.icon], { color })}
		</Svg>
	)
}

Icon.defaultProps = {
	color: "bodyTextColor",
	size: 3,
}

export { Icon }
