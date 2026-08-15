import type { Metadata } from "next";
import { PostCard } from "@/components/PostCard";
import { getPosts } from "@/lib/sanity";

export const revalidate = 60;
export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre neurologia, saúde cerebral, prevenção e estilo de vida.",
};

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <main>
      <header className="blog-hero reveal-group">
        <span className="section-number">Conteúdo com clareza e ciência</span>
        <h1>Um espaço para<br /><em>entender o cérebro.</em></h1>
        <p>Neurologia, prevenção, rotina e escolhas que ajudam a construir saúde ao longo da vida.</p>
      </header>
      <section className="blog-list" aria-label="Artigos publicados">
        <div className="blog-list-top">
          <span>{String(posts.length).padStart(2, "0")} {posts.length === 1 ? "artigo publicado" : "artigos publicados"}</span>
          <span>Mais recentes primeiro</span>
        </div>
        {posts.length ? (
          <div className="post-grid">{posts.map((post) => <PostCard key={post.slug} post={post} heading="h2" />)}</div>
        ) : (
          <div className="empty-blog"><h2>Novos conteúdos em breve.</h2><p>Este espaço está sendo preparado com cuidado.</p></div>
        )}
      </section>
    </main>
  );
}
