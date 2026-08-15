import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <Link className="brand footer-brand" href="/">
        <span className="monogram">IH</span>
        <span><strong>Ingrid Hovsepian</strong><small>Médica residente em Neurologia</small></span>
      </Link>
      <p>© {new Date().getFullYear()} · Todos os direitos reservados</p>
    </footer>
  );
}
