import {defineQuery} from 'next-sanity'

const POST_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "category": category->title,
  coverImage,
  "coverImageAlt": coverImage.alt,
  body,
  seoTitle,
  seoDescription
`

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc) {${POST_FIELDS}}
`)

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {${POST_FIELDS}}
`)

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)][]{"slug": slug.current}
`)
