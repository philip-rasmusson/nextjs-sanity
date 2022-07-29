import * as CSS from "csstype"
import { colors } from "../constants"

export const border = (val: boolean): CSS.Property.Border =>
  val ? `1px solid ${colors["blue33"]}` : "none"
