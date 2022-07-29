import { sanityClient, urlFor, usePreviewSubscription } from "../../lib/sanity"
import { PortableText } from "@portabletext/react"
import { Flex, Text } from "../../components"
import styled from "styled-components"
import { colors, scale } from "../../styles"

const recipeQuery = `*[_type == "recipe" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      mainImage,
      ingredient[]{
        _key,
        unit,
        wholeNumber,
        fraction,
        ingredient->{
          name
        }
      },
      instructions
    }`

const ImageStyled = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  margin-bottom: ${scale.rem(4)};
`

export default function OneRecipe({ data, preview }: any) {
  const { data: recipe } = usePreviewSubscription(recipeQuery, {
    params: { slug: data.recipe?.slug.current },
    initialData: data,
    enabled: preview,
  })

  if (!data) return <div>Loading...</div>
  return (
    <Flex as="article" flexDirection="column" mb={5}>
      <Flex as="main" flexDirection="column" flexGrow={2}>
        {recipe.mainImage && (
          <ImageStyled
            src={urlFor(recipe?.mainImage).url()}
            alt={recipe.name}
          />
        )}

        <Text variant="headline-2" textColor={colors.pink}>
          {recipe?.name}
        </Text>
        <Flex flexDirection={{ _: "column", m: "row" }}>
          <Flex
            flexDirection="column"
            pr={4}
            mr={4}
            w={80}
            borderRight
            borderColor={colors.greyEE}
          >
            <Text variant="headline-3" textColor={colors.pink}>
              Ingredienser
            </Text>
            <Flex as="ul" flexDirection="column">
              {recipe?.ingredient?.map((ingredient: any) => (
                <Flex
                  as="li"
                  key={ingredient._key}
                  className="ingredient"
                  style={{ listStyle: "none" }}
                >
                  <Flex as="span" w={5}>
                    <Text mb={0} variant="paragraph-14" lineHeight={4}>
                      {ingredient?.wholeNumber}
                    </Text>
                    <Text mb={0} variant="paragraph-14" lineHeight={4}>
                      {ingredient?.fraction}
                    </Text>
                  </Flex>
                  <Flex as="span" w={6}>
                    <Text mb={0} variant="paragraph-14" lineHeight={4}>
                      {ingredient?.unit}
                    </Text>
                  </Flex>
                  <Text mb={0} variant="paragraph-14" lineHeight={4}>
                    {ingredient?.ingredient?.name}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex flexDirection="column">
            <Text variant="headline-3" textColor={colors.pink}>
              Tillagning
            </Text>
            <Flex pl={2}>
              <PortableText value={recipe?.instructions} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
  // )
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "recipe" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  )

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }: any) {
  const { slug } = params
  const recipe = await sanityClient.fetch(recipeQuery, { slug })
  return { props: { data: { recipe }, preview: true } }
}
