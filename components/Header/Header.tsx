import React from "react"
import { Flex } from "../Flex"
import { Text } from ".."
import { colors } from "../../styles"
import { Icon } from "../Icon"

const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      my={4}
      flexDirection="column"
      borderBottom
      borderColor={colors.black}
      pb={3}
    >
      <Flex w={1} justifyContent="space-between">
        <a href="/">
          <Text variant="headline-1" textColor={colors.pink}>
            NextJS | Sanity
          </Text>
        </a>
        <Flex columnGap={2}>
          <Icon icon="user" size={{ _: 1, m: 8 }} color="navy"></Icon>
          <Icon icon="menu" size={6} color="navy"></Icon>
        </Flex>
      </Flex>
    </Flex>
  )
}

export { Header }
