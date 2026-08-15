import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { getPost, getPostSlugs } from "@/lib/sanity";

export const revalidate = 60;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPostSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: { type: "article", images: post.coverImage ? [post.coverImage] : undefined },
  };
}

const formatDate = (date: string) => new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit", month: "long", year: "numeric", timeZone: "America/Sao_Paulo",
}).format(new Date(date));

export default async function ArticlePage({ params }: PageProps) {
  const post = await getPost((await params).slug);
  if (!post) notFound();
  return (
    <main>
      <article className="article-page">
        <header className="article-header reveal-group">
          <Link className="article-back" href="/blog">← Todos os artigos</Link>
          <div className="article-meta"><span>{post.category || "Neurologia"}</span><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time></div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </header>
        {post.coverImage && <figure className="article-cover reveal-photo"><img src={post.coverImage} alt={post.coverImageAlt || ""} /></figure>}
        <div className="article-layout">
          <aside className="article-author"><span className="monogram">IH</span><p><strong>Ingrid Hovsepian</strong><br />Médica residente em Neurologia<br />CRM/MG 92.598</p></aside>
          <ArticleBody body={post.body} />
        </div>
        <footer className="medical-note"><strong>Informação importante</strong><p>Este conteúdo tem caráter educativo e não substitui uma consulta, diagnóstico ou orientação médica individualizada.</p></footer>
      </article>
    </main>
  );
}
