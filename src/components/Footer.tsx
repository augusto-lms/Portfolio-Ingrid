import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-primary">
          <Link className="footer-signature" href="/">
            <span className="footer-monogram">IH</span>
            <span><strong>Ingrid Hovsepian</strong><small>Médica residente em Neurologia · CRM/MG 92.598</small></span>
          </Link>
          <nav className="footer-nav" aria-label="Navegação do rodapé">
            <Link href="/">Início</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/blog">Blog</Link>
          </nav>
          <a className="footer-instagram" href="https://www.instagram.com/guiguitcha/" target="_blank" rel="noreferrer" aria-label="Instagram de Ingrid Hovsepian, abre em nova aba">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle className="instagram-dot" cx="17.4" cy="6.7" r="1" />
            </svg>
            <span>@guiguitcha</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ingrid Hovsepian</p>
          <p>Conteúdo educativo. Não substitui consulta ou orientação médica individualizada.</p>
        </div>
      </div>
    </footer>
  );
}
