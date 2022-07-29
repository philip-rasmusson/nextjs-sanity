import * as React from "react"
import styled, { css } from "styled-components"
import {
  variant,
  ResponsiveValue,
  display,
  DisplayProps,
  alignItems,
  verticalAlign,
  VerticalAlignProps,
  AlignItemsProps,
} from "styled-system"
import { variants, Variants } from "../../styles/constants/typography"
import { colors } from "../../styles/constants"
import { typography, TypographyProps } from "../../styles/styled-system"
import { Link, LinkProps } from "react-router-dom"

export interface TextProps
  extends TypographyProps,
    DisplayProps,
    AlignItemsProps,
    VerticalAlignProps {
  children?: string
  id?: string
  variant?: Variants
  as?: any
  truncate?: ResponsiveValue<
    "singleLine" | "twoLine" | "threeLine" | "fourLine" | "none"
  >
}

export type TextAnchorProps = TextProps &
  Omit<React.HTMLProps<HTMLAnchorElement>, "size">

export interface TextLinkProps extends LinkProps {
  underline?: boolean
  active?: boolean
  id?: string
  variant?: Variants
  as?: any
  truncate?: ResponsiveValue<
    "singleLine" | "twoLine" | "threeLine" | "fourLine" | "none"
  >
}

export type TextButtonProps = TextProps & React.HTMLProps<HTMLButtonElement>
export type TextLabelProps = TextProps & React.HTMLProps<HTMLLabelElement>

export interface TextComponent {
  Anchor: typeof TextAnchor
  Link: typeof TextLink
  Button: typeof TextButton
  Label: typeof TextLabel
}

export const textStyles = css`
  ${typography}
  ${display}
	${alignItems}
	${verticalAlign}
	${variant({
    prop: "truncate",
    variants: {
      singleLine: {
        width: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      twoLine: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": "2",
        "-webkit-box-orient": "vertical",
        whiteSpace: "normal",
      },
      threeLine: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": "3",
        "-webkit-box-orient": "vertical",
        whiteSpace: "normal",
      },
      fourLine: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": "4",
        "-webkit-box-orient": "vertical",
        whiteSpace: "normal",
      },
      none: {
        overflow: "visisble",
        display: "inline",
        "-webkit-line-clamp": "none",
        "-webkit-box-orient": "initial",
        whiteSpace: "normal",
      },
    },
  })}
	${(props) =>
    !(props as TextProps).textColor &&
    css`
				color: ${colors.bodyTextColor};
		
		}`}
`

const withConfig = {
  shouldForwardProp: (prop: any, defaultValidatorFn: any) =>
    ![
      "lineHeight",
      "fontWeight",
      "fontSize",
      "display",
      "mr",
      "whitespace",
      "textColor",
      "variant",
    ].includes(prop) && defaultValidatorFn(prop),
}

/**
 * Text element
 */
export const TextStyled = styled.p.withConfig(withConfig)`
  ${textStyles}
`

const Text: React.FC<TextProps> & TextComponent = ({
  variant = "paragraph-16",
  ...rest
}) => <TextStyled {...variants[variant]} {...rest}></TextStyled>

/**
 * Link element
 */
const TextLinkStyled = styled(Link).withConfig(withConfig)<TextLinkProps>`
  ${textStyles}
  text-decoration: ${(props) => (props.active ? "underline" : "none")};

  &:hover {
    text-decoration: ${(props) => (props.underline ? "underline" : "none")};
    text-decoration-color: ${colors["hoverBlue"]};
    color: ${colors["hoverBlue"]};
  }
`
const TextLink: React.FC<TextLinkProps> = ({
  variant = "paragraph-16",
  ...rest
}) => <TextLinkStyled {...variants[variant]} as={Link} {...rest} />

Text.Link = TextLink

/**
 * Anchor element
 */
export const TextAnchorStyled = styled.a`
  ${textStyles}

  &:hover {
    color: ${colors["hoverBlue"]};
  }
`

const TextAnchor = React.forwardRef<any, TextAnchorProps>(
  ({ variant = "paragraph-16", ...rest }, ref) => {
    return (
      <TextAnchorStyled {...variants[variant]} as="a" {...rest} ref={ref} />
    )
  }
) as React.FC<TextAnchorProps>

Text.Anchor = TextAnchor

/**
 * Button element
 */
const TextButtonStyled = styled.button`
  ${textStyles}

  &:hover {
    color: ${colors.hoverBlue};
  }
`

const TextButton: React.FC<TextButtonProps> = ({
  variant = "paragraph-16",
  ...rest
}) => <TextButtonStyled {...variants[variant]} as="button" {...rest} />

Text.Button = TextButton

/**
 * Label element
 */
const TextLabelStyled = styled.label`
  ${textStyles}
`

const TextLabel: React.FC<TextLabelProps> = ({
  variant = "paragraph-16",
  ...rest
}) => <TextLabelStyled {...variants[variant]} as="label" {...rest} />

Text.Label = TextLabel

export { Text, TextLink }
