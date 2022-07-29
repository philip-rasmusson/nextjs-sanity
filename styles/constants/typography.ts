import { TypographyProps } from "../../styles/styled-system"

export type Variants =
  | "paragraph-16"
  | "paragraph-14"
  | "paragraph-12"
  | "headline-1"
  | "headline-1-plus"
  | "headline-2"
  | "headline-3"
  | "headline-4"
  | "quote"
  | "preamble"

export interface Variant extends TypographyProps {
  as: any
}

export const bodyFontFamily = "helvetica, arial, sans-serif"

export type FontWeight = "normal" | "bold"

export const fontWeight: Record<FontWeight, string> = {
  normal: "300",
  bold: "500",
}

export const variants: Record<Variants, Variant> = {
  "headline-1-plus": {
    as: "h1",
    fontSize: { _: 6, m: 8 },
    lineHeight: { _: 6, m: 8 },
    fontWeight: "bold",
    mb: 4,
  },
  "headline-1": {
    as: "h1",
    fontSize: { _: 4, l: 6 },
    lineHeight: { _: 4, l: 6 },
    fontWeight: "bold",
    mb: 1.75,
  },
  "headline-2": {
    as: "h2",
    fontSize: { _: 3, l: 4 },
    lineHeight: { _: 3, l: 4 },
    fontWeight: "bold",
    mb: 4,
  },
  "headline-3": {
    as: "h3",
    fontSize: { _: 2.25, l: 2.5 },
    lineHeight: { _: 2.5, l: 3 },
    fontWeight: "bold",
    mb: 3,
  },
  "headline-4": {
    as: "h4",
    fontSize: 2,
    lineHeight: 2.5,
    fontWeight: "bold",
    mb: 3,
  },
  "paragraph-16": {
    as: "p",
    fontSize: 2,
    lineHeight: 3,
    mb: 2,
  },
  "paragraph-14": {
    as: "p",
    fontSize: 1.75,
    lineHeight: 2.5,
    mb: 2,
  },
  "paragraph-12": {
    as: "p",
    fontSize: 1.5,
    lineHeight: 2.5,
    mb: 2,
  },
  quote: {
    as: "p",
    fontSize: { _: 3, m: 3.5 },
    lineHeight: { _: 4, m: 4.5 },
    mb: 2,
  },
  preamble: {
    as: "p",
    fontSize: 2.5,
    lineHeight: 4,
    mb: 2.5,
  },
}
