import {PortableText, type PortableTextComponents} from 'next-sanity'
import { InstagramEmbed } from "./InstagramEmbed";
import type {BlockContent} from '../../sanity.types'

const components: PortableTextComponents = {
  types: { instagram: InstagramEmbed },
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  marks: {
    link: ({ children, value }) => {
      const external = value?.href?.startsWith("http");
      return <a href={value?.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{children}</a>;
    },
  },
};

export function ArticleBody({ body }: { body: BlockContent }) {
  return <div className="article-body"><PortableText value={body} components={components} /></div>;
}
