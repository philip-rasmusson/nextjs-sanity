import styled from "styled-components"
import {
	size,
	SizeProps,
	FillColorProps,
	space,
	SpaceProps,
} from "../../styles/styled-system"

export interface SvgProps extends SizeProps, FillColorProps, SpaceProps {}

export const Svg = styled.svg<SvgProps>`
	display: block;
	${size}
	${space}
`
