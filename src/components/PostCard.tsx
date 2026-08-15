import Link from "next/link";
import type { BlogPost } from "@/lib/types";

const formatDate = (date: string) => new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit", month: "long", year: "numeric", timeZone: "America/Sao_Paulo",
}).format(new Date(date));

export function PostCard({ post, heading = "h3" }: { post: BlogPost; heading?: "h2" | "h3" }) {
  const Heading = heading;
  return (
    <article className="post-card reveal-group">
      <Link className="post-card-image" href={`/blog/${post.slug}`}>
        {post.coverImage
          ? <img src={post.coverImage} alt={post.coverImageAlt || ""} loading="lazy" />
          : <span>IH</span>}
      </Link>
      <div className="post-card-meta">
        <span>{post.category || "Neurologia"}</span>
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      </div>
      <Heading><Link href={`/blog/${post.slug}`}>{post.title}</Link></Heading>
      <p>{post.excerpt}</p>
      <Link className="post-read" href={`/blog/${post.slug}`}>Ler artigo <span>→</span></Link>
    </article>
  );
}
