"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname() || "/";
  const isHome = pathname === "/";
  const isBlog = pathname.startsWith("/blog");

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Página inicial de Ingrid Hovsepian">
        <span className="monogram">IH</span>
        <span><strong>Ingrid Hovsepian</strong><small>Neurologia</small></span>
      </Link>
      <nav aria-label="Navegação principal">
        <Link className={isHome ? "active" : undefined} href="/">Início</Link>
        <Link href="/#sobre">Sobre mim</Link>
        <Link className={isBlog ? "active" : undefined} href="/blog">Blog</Link>
      </nav>
      <Link className="header-link" href={isBlog ? "/" : "/blog"}>
        {isBlog ? "Voltar ao início" : "Leia o blog"} <span>→</span>
      </Link>
    </header>
  );
}
