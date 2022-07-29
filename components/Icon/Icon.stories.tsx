import React from "react"
import { Story } from "@storybook/react"
import { Icon, IconTypes, IconProps } from "./"
import { iconMap } from "./IconMap"
import { colorKeys } from "../../styles/constants"

const iconIds = Object.keys(iconMap) as IconTypes[]

export default {
	title: "Components/Icon",
	component: Icon,
	argTypes: {
		size: {
			control: { type: "range", min: 3, max: 10, step: 0.5 },
		},
		color: {
			control: "select",
			options: colorKeys,
		},
		icon: {
			control: "select",
			options: iconIds,
		},
	},
}

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const normal = Template.bind({})
normal.args = { icon: "plus", color: "navy" }
