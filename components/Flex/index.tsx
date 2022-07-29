import styled from "styled-components"
import {
  space,
  SpaceProps,
  layoutSize,
  LayoutSizeProps,
  color,
  ColorProps,
  border,
  BorderProps,
  visibility,
  VisibilityProps,
  transition,
  TransitionProps,
  overflowWrap,
  OverflowWrapProps,
  gap,
  GapProps,
} from "../../styles/styled-system"
import {
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
  alignContent,
  AlignContentProps,
  display,
  DisplayProps,
  width,
  WidthProps,
  flexDirection,
  FlexDirectionProps,
  justifyContent,
  JustifyContentProps,
  flex,
  FlexProps,
  flexWrap,
  FlexWrapProps,
  FlexGrowProps,
  flexGrow,
  flexShrink,
  FlexShrinkProps,
  flexBasis,
  FlexBasisProps,
  order,
  OrderProps,
  overflow,
  OverflowProps,
  position,
  PositionProps,
  zIndex,
  ZIndexProps,
} from "styled-system"

export interface LayoutProps
  extends SpaceProps,
    AlignItemsProps,
    AlignSelfProps,
    AlignContentProps,
    DisplayProps,
    WidthProps,
    FlexDirectionProps,
    FlexProps,
    LayoutSizeProps,
    JustifyContentProps,
    ColorProps,
    FlexWrapProps,
    FlexShrinkProps,
    FlexGrowProps,
    FlexBasisProps,
    BorderProps,
    OrderProps,
    OverflowProps,
    ZIndexProps,
    PositionProps,
    VisibilityProps,
    TransitionProps,
    OverflowWrapProps,
    GapProps {
  bodyColor?: boolean
}

export const Flex = styled.div.withConfig({
  shouldForwardProp: (prop: any, defaultValidatorFn: any) =>
    !["display", "overflow", "width", "height", "order"].includes(prop) &&
    defaultValidatorFn(prop),
})<LayoutProps>`
  display: flex;
  ${flexDirection}
  ${space}
  	${alignItems}
	${alignSelf}
	${alignContent}
	${display}
  	${width}
  	${justifyContent}
  	${flex}
	${layoutSize}
	${flexWrap}
	${flexShrink}
	${flexGrow}
	${flexBasis}
	${color}
	${order}
	${border}
	${overflow}
	${position}
	${zIndex}
	${visibility}
	${transition}
	${overflowWrap}
	${gap}
`
