import type {BlockContent} from '../../sanity.types'

export type BlogPost = {
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  category?: string
  coverImage?: string
  coverImageAlt?: string
  body: BlockContent
  seoTitle?: string
  seoDescription?: string
}
