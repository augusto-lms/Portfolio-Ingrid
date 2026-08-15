import 'server-only'

import {createImageUrlBuilder} from '@sanity/image-url'
import type {POST_QUERY_RESULT, POSTS_QUERY_RESULT} from '../../sanity.types'
import {client, sanityConfigured} from '@/sanity/client'
import {POST_QUERY, POSTS_QUERY, POST_SLUGS_QUERY} from '@/sanity/queries'
import {demoPosts} from './demo-posts'
import type {BlogPost} from './types'

const imageBuilder = client ? createImageUrlBuilder(client) : null
const options = {next: {revalidate: 60}}

type SanityPost = NonNullable<POST_QUERY_RESULT> | POSTS_QUERY_RESULT[number]

function normalizePost(post: SanityPost): BlogPost {
  return {
    title: post.title || 'Artigo sem título',
    slug: post.slug || '',
    excerpt: post.excerpt || '',
    publishedAt: post.publishedAt || new Date(0).toISOString(),
    category: post.category || undefined,
    coverImage: post.coverImage && imageBuilder
      ? imageBuilder.image(post.coverImage).width(1600).quality(85).auto('format').url()
      : undefined,
    coverImageAlt: post.coverImageAlt || undefined,
    body: post.body || [],
    seoTitle: post.seoTitle || undefined,
    seoDescription: post.seoDescription || undefined,
  }
}

export async function getPosts(): Promise<BlogPost[]> {
  if (!sanityConfigured || !client) return demoPosts
  const posts = await client.fetch(POSTS_QUERY, {}, options)
  return posts.map(normalizePost)
}

export async function getPost(slug: string): Promise<BlogPost | undefined> {
  if (!sanityConfigured || !client) return demoPosts.find((post) => post.slug === slug)
  const post = await client.fetch(POST_QUERY, {slug}, options)
  return post ? normalizePost(post) : undefined
}

export async function getPostSlugs(): Promise<Array<{slug: string}>> {
  if (!sanityConfigured || !client) return demoPosts.map(({slug}) => ({slug}))
  const slugs = await client.withConfig({useCdn: false}).fetch(POST_SLUGS_QUERY)
  return slugs.filter((item): item is {slug: string} => Boolean(item.slug))
}
