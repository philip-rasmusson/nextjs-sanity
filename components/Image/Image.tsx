import * as React from "react"
import styled, { css } from "styled-components"
import { ratio, RatioProps } from "../../styles/styled-system"

interface ImgProps
  extends ImageFigureProps,
    Partial<RatioProps>,
    Omit<
      React.HTMLProps<HTMLImageElement>,
      "crossOrigin" | "ref" | "as" | "srcSet"
    > {
  width?: number
  height?: number
  cover?: boolean
}

export interface ImageProps extends ImgProps {
  srcSet?: string
  sizes?: string
}

type ImageFigureProps = RatioProps

export const ImageFigure = styled.figure<ImageFigureProps>`
  width: 100%;
  ${(props) =>
    typeof props.ratio !== "undefined" &&
    css`
      position: relative;
      &:after {
        content: "";
        display: block;
        height: 0;
        position: relative;
        ${ratio}
      }
    `}
`

export const ImagePicture = styled.picture<ImgProps>`
  ${(props) =>
    typeof props.ratio !== "undefined" &&
    css`
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    `}
`

export const ImageImg = styled.img<ImgProps>`
  display: block;

  ${(props) =>
    typeof props.ratio !== "undefined" &&
    css`
      height: auto;
      width: auto;
      max-height: 100%;
      max-width: 100%;
      ${() => {
        if (props.height && props.width && props.ratio) {
          const realRatio = props.height / props.width

          if (realRatio > props.ratio) {
            return "height: 100%;"
          } else if (realRatio < props.ratio) {
            return "width: 100%;"
          } else {
            return "height: 100%; width: 100%;"
          }
        }
      }}
      position: absolute;
    `}
  ${(props) =>
    typeof props.cover !== "undefined" &&
    css`
      object-fit: cover;
      object-position: center top;
      width: 100%;
      height: 100%;
    `}
`

export const Image: React.FC<ImageProps> = ({ ratio, ...rest }) => {
  const dynaamicAspectRatio =
    rest.height && rest.width && rest.height / rest.width
  const activeRatio = ratio || dynaamicAspectRatio

  return (
    <ImageFigure ratio={activeRatio}>
      <ImageImg loading="lazy" {...rest} ratio={activeRatio} />
    </ImageFigure>
  )
}
