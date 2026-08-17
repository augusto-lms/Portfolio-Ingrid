import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-number" aria-hidden="true">404</div>
      <div className="not-found-content">
        <span className="section-number">Página não encontrada</span>
        <h1>Talvez este caminho<br /><em>tenha mudado.</em></h1>
        <p>A página que você procurou não existe ou não está mais disponível.</p>
        <div className="not-found-actions">
          <Link className="classic-button" href="/">Voltar ao início <span>→</span></Link>
          <Link className="text-link" href="/blog">Conhecer o blog <span>→</span></Link>
        </div>
      </div>
    </main>
  );
}
