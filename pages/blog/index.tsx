import type { NextPage } from "next"
import styled from "styled-components"
import Link from "next/link"
import { sanityClient, urlFor } from "../../lib/sanity"
import { Flex, Text } from "../../components"
import { colors } from "../../styles"

const recipesQuery = `*[_type == "post"]{
  _id,
  name,
  slug,
  mainImage,
}`

const ImageStyled = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  border-radius: 2rem 0 0 2rem;
`

const ListItemStyled = styled.li`
  border-radius: 2rem;
  border: 1px solid ${colors.pink};
  list-style: none;
  height: 100%;
  transition: background-color 0.25s, height 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.salmon100};

    & p {
      color: ${colors.white};

      transition: color 0.45s, height 0.2s ease;
    }
  }
`

export async function getStaticProps() {
  const recipes = await sanityClient.fetch(recipesQuery)

  return {
    props: {
      recipes,
    },
  }
}

const Home: NextPage = ({ recipes }: any) => {
  return (
    <Flex flexDirection="column" w={69} m="auto">
      <Flex as="ul" flexDirection="column" rowGap={2}>
        {recipes.map(({ slug, name, _id, mainImage }: any) => (
          <ListItemStyled key={_id}>
            <Link href={`/recipes/${slug.current}`}>
              <Flex h={10} alignItems="center" columnGap={2}>
                <Flex h={1} maxw={15}>
                  {mainImage ? (
                    <ImageStyled src={urlFor(mainImage).url()} alt={name} />
                  ) : (
                    <Flex
                      w={15}
                      backgroundColor={colors.pink}
                      style={{ borderRadius: "2rem 0 0 2rem" }}
                    ></Flex>
                  )}
                </Flex>
                <Text textTransform="uppercase" mb={0}>
                  {name}
                </Text>
              </Flex>
            </Link>
          </ListItemStyled>
        ))}
      </Flex>
    </Flex>
  )
}

export default Home
