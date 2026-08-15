import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { getPosts } from "@/lib/sanity";

export const revalidate = 60;

export default async function HomePage() {
  const latestPosts = (await getPosts()).slice(0, 3);

  return (
    <main id="inicio">
      <section className="classic-hero" aria-labelledby="hero-title">
        <div className="classic-copy reveal-group">
          <div className="classic-eyebrow"><span /> Residente em Neurologia.</div>
          <h1 id="hero-title">O cérebro é complexo.<br />Falar sobre ele<br /><em>não precisa ser.</em></h1>
          <p className="classic-lead">Um espaço com conteúdos sobre neurologia, explicados com clareza e baseados em ciência.</p>
          <Link className="classic-button" href="/blog">Conheça o blog <span>→</span></Link>
          <div className="classic-signature" />
        </div>
        <div className="classic-portrait reveal-photo">
          <div className="portrait-blob" />
          <figure><img src="/images/FotoMain-fundo-quente.png" alt="Dra. Ingrid Hovsepian usando jaleco e estetoscópio" /></figure>
        </div>
      </section>

      <div className="about-background reveal-background">
        <section className="about-section" id="sobre" aria-labelledby="about-title">
          <div className="about-visual reveal-photo">
            <figure className="about-photo-slot"><img src="/images/FotoSobre-reenquadrada.png" alt="Dra. Ingrid Hovsepian em um momento descontraído em uma cafeteria" /></figure>
            <span className="about-vertical">Conheça a Ingrid · 01</span>
            <div className="about-stamp">IH<small>Neurologia</small></div>
          </div>
          <div className="about-content reveal-group">
            <div className="about-heading-row"><span className="section-number">01 / Sobre mim</span><span className="about-line" /></div>
            <h2 id="about-title">Prazer,<br /><em>eu sou a Ingrid.</em></h2>
            <div className="about-story">
              <p>Sou médica e, atualmente, residente de Neurologia — uma área que tem despertado cada vez mais a minha curiosidade sobre o cérebro, seu funcionamento e tudo aquilo que podemos fazer para cuidar dele ao longo da vida.</p>
              <p>Também sou pós-graduada em Medicina do Trabalho e em Medicina Legal e Perícias Médicas, formações que me ensinaram a olhar para a saúde de uma maneira muito mais ampla: entender não apenas a doença, mas também a rotina, os hábitos, o ambiente de trabalho e tudo aquilo que, de alguma forma, interfere na nossa qualidade de vida.</p>
            </div>
            <div className="about-credentials"><span>CRM/MG 92.598</span><i /><span>Uberaba, Minas Gerais</span></div>
          </div>
        </section>

        <section className="content-purpose reveal-group" aria-labelledby="purpose-title">
          <div className="purpose-heading"><span className="section-number">02 / Por aqui</span><h2 id="purpose-title">Saúde, rotina<br /><em>e prevenção.</em></h2></div>
          <div className="purpose-story">
            <p>Sempre gostei muito de falar sobre prevenção e construção de bons hábitos. Atividade física, alimentação, sono, organização da rotina, saúde mental, acompanhamento médico… acredito muito que pequenas escolhas, quando sustentadas ao longo do tempo, podem ter um impacto enorme na nossa saúde e no nosso futuro.</p>
            <p>E agora, vivendo a Neurologia de perto, tenho me interessado cada vez mais pelo estudo do cérebro — especialmente pelas doenças neurovasculares, demências e outros fatores que influenciam a saúde cerebral e o envelhecimento.</p>
            <p>Por aqui, quero compartilhar um pouco de tudo isso, mas também da vida como ela é: medicina, residência, estudos, treinos, rotina, hábitos, organização e os bastidores de quem também está tentando construir uma vida mais saudável e equilibrada.</p>
            <p>Não quero que esse seja um espaço apenas sobre doenças. Quero falar principalmente sobre saúde, prevenção, conhecimento e estilo de vida — e sobre como podemos cuidar melhor de nós mesmos hoje pensando também em quem queremos ser no futuro.</p>
          </div>
        </section>
      </div>

      <section className="home-blog reveal-group" aria-labelledby="home-blog-title">
        <div className="home-blog-heading">
          <div><span className="section-number">03 / Conteúdos</span><h2 id="home-blog-title">Neurologia para<br /><em>a vida real.</em></h2></div>
          <Link className="text-link" href="/blog">Ver todos os artigos <span>→</span></Link>
        </div>
        <div className="post-grid">{latestPosts.map((post) => <PostCard key={post.slug} post={post} />)}</div>
      </section>
    </main>
  );
}
