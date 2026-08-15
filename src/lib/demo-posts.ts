import type { BlogPost } from "./types";

export const demoPosts: BlogPost[] = [
  {
    title: "O que significa cuidar da saúde cerebral?",
    slug: "cuidar-da-saude-cerebral",
    excerpt:
      "Saúde cerebral não começa apenas quando surge uma doença. Ela é construída nas escolhas que repetimos todos os dias.",
    publishedAt: "2026-08-15T12:00:00.000Z",
    category: "Saúde cerebral",
    coverImage: "/images/FotoMain-fundo-quente.png",
    coverImageAlt: "Dra. Ingrid Hovsepian usando jaleco e estetoscópio",
    body: [
      {
        _key: "intro",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "intro-text",
            _type: "span",
            text: "Quando falamos em cuidar do cérebro, é comum pensar primeiro em memória ou em doenças neurológicas. Mas a saúde cerebral é influenciada por tudo aquilo que sustenta a nossa saúde como um todo: sono, movimento, alimentação, vínculos, controle dos fatores de risco e acompanhamento médico.",
          },
        ],
      },
      {
        _key: "prevention-title",
        _type: "block",
        style: "h2",
        children: [{ _key: "prevention-title-text", _type: "span", text: "Prevenção também é cuidado neurológico" }],
      },
      {
        _key: "prevention",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "prevention-text",
            _type: "span",
            text: "Pequenas escolhas, quando mantidas ao longo do tempo, podem ajudar a proteger o cérebro e favorecer um envelhecimento mais saudável. Não existe uma única fórmula, mas existe espaço para decisões mais conscientes e sustentáveis.",
          },
        ],
      },
      {
        _key: "quote",
        _type: "block",
        style: "blockquote",
        children: [
          {
            _key: "quote-text",
            _type: "span",
            text: "Informação clara é uma das ferramentas que nos ajudam a cuidar melhor da própria saúde.",
          },
        ],
      },
      {
        _key: "conclusion",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "conclusion-text",
            _type: "span",
            text: "Este espaço nasce para aproximar a neurologia da vida cotidiana, sempre com responsabilidade e sem substituir uma avaliação médica individual.",
          },
        ],
      },
    ],
  },
];
