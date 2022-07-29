import * as React from "react"
import { ColorKeys } from "../../styles"
import {
  close,
  heart,
  heartFilled,
  plus,
  arrowLeft,
  arrowRight,
  arrowUp,
  chevronDown,
  chevronMenuDown,
  menu,
  warningTriangle,
  infoCircle,
  check,
  user,
  filter,
  playCircle,
  moreVertical,
  accountSettings,
  logout,
  linkedIn,
  facebook2,
  instagram,
} from "./UIIcons"

export const defaultColor: ColorKeys = "bodyTextColor"

export interface IconPathProps {
  color?: ColorKeys
}

export type IconTypesUI =
  | "plus"
  | "arrow-up"
  | "arrow-left"
  | "arrow-right"
  | "close"
  | "chevron-down"
  | "heart"
  | "heart-filled"
  | "menu"
  | "chevron-menu-down"
  | "warning-triangle"
  | "info-circle"
  | "check"
  | "user"
  | "filter"
  | "playCircle"
  | "more-vertical"
  | "account-settings"
  | "logout"
  | "linkedIn"
  | "facebook2"
  | "instagram"

export type IconTypes = IconTypesUI

type IconMap = Record<IconTypes, React.FC<IconPathProps>>

export const iconMap: IconMap = {
  "more-vertical": moreVertical,
  plus,
  close,
  "arrow-left": arrowLeft,
  "arrow-right": arrowRight,
  "arrow-up": arrowUp,
  "chevron-down": chevronDown,
  "chevron-menu-down": chevronMenuDown,
  heart: heart,
  "heart-filled": heartFilled,
  menu,
  "warning-triangle": warningTriangle,
  "info-circle": infoCircle,
  check,
  user,
  filter,
  "account-settings": accountSettings,
  logout,
  linkedIn,
  facebook2,
  instagram,
  playCircle,
}
