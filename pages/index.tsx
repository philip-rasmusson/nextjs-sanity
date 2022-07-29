import type { NextPage } from "next"
import styled from "styled-components"
import Link from "next/link"
import { Flex, Text } from "../components"
import { colors } from "../styles"

const recipesQuery = `*[_type == "recipe"]{
  _id,
  name,
  slug,
  mainImage,
}`

const ListItemStyled = styled.li`
  border-radius: 2rem;
  border: 1px solid ${colors.pink};
  list-style: none;
  height: 100%;
  background-color: ${colors.pink};
  transition: background-color 0.25s, height 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.white};

    & p {
      color: ${colors.pink};

      transition: color 0.45s, height 0.2s ease;
    }
  }
`

const ListItem = (props: { slug: string; name: string }) => {
  return (
    <ListItemStyled>
      <Link href={`/${props.slug}`}>
        <Flex h={10} alignItems="center" columnGap={2}>
          <Text
            textTransform="uppercase"
            mb={0}
            mx={4}
            textColor={colors.white}
          >
            {props.name}
          </Text>
        </Flex>
      </Link>
    </ListItemStyled>
  )
}

const Home: NextPage = ({ recipes }: any) => {
  return (
    <></>
    // <Flex flexDirection="column" w={69} m="auto">
    //   <Flex as="ul" flexDirection="column" rowGap={2}>
    //     <ListItem slug="recipes" name="Recept"></ListItem>
    //     <ListItem slug="blog" name="Blog"></ListItem>
    //   </Flex>
    // </Flex>
  )
}

export default Home
