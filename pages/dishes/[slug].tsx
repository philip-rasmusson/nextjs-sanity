import { sanityClient, urlFor, usePreviewSubscription } from "../../lib/sanity"
import { PortableText } from "@portabletext/react"
import { Flex, Text } from "../../components"
import Image from "next/image"
import styled from "styled-components"
import Link from "next/link"

const recipeQuery = `*[_type == "dish" && slug.current == $slug][0]{
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
      recipe[]{
          _key,
          recipe->{
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
`

export default function OneDish({ data, preview }: any) {
  if (!data) return <div>Loading...</div>
  const { data: recipe } = usePreviewSubscription(recipeQuery, {
    params: { slug: data.recipe?.slug.current },
    initialData: data,
    enabled: preview,
  })

  if (!recipe.recipe) return <div>Loading...</div>
  console.log("this")
  console.log(recipe.recipe[0].recipe)

  return (
    recipe.recipe.length > 0 && (
      <Flex as="article" flexDirection="column">
        <Flex as="main" flexDirection="column">
          {recipe.mainImage && (
            <ImageStyled
              src={urlFor(recipe?.mainImage).url()}
              alt={recipe.name}
            />
          )}

          <Text variant="headline-1">{recipe?.name}</Text>
          <Flex as="ul" flexDirection="column">
            {recipe?.recipe?.map((recipe: any) => (
              <Flex
                as="li"
                key={recipe._key}
                className="recipe"
                style={{ listStyle: "none" }}
              >
                {recipe?.recipe?.name} {recipe?.wholeNumber} {recipe?.fraction}{" "}
                {recipe?.unit}
                <br />
                {recipe.slug && (
                  <Link href={`/recipes/${recipe.slug.current}`}>
                    {recipe.recipe.name}
                  </Link>
                )}
              </Flex>
            ))}
            <PortableText value={recipe?.instructions} />
          </Flex>
        </Flex>
      </Flex>
    )
  )
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "dish" && defined(slug.current)]{
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
