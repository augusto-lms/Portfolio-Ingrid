# Site Ingrid Hovsepian

Site institucional e blog da Dra. Ingrid Hovsepian, desenvolvido com Next.js, React e TypeScript. O conteúdo editorial é administrado pelo Sanity Studio.

## Tecnologias

- Next.js com App Router
- React
- TypeScript
- Sanity Content Lake e Sanity Studio
- Vercel

## Desenvolvimento do site

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Sem a configuração do Sanity, o site utiliza um artigo demonstrativo local.

## Painel editorial

```bash
npm run studio:dev
```

O Studio permanece como aplicação standalone na pasta irmã `../studio-blog-ingrid` e abre normalmente em `http://localhost:3333`.

## Configuração completa

Consulte [GUIA_SANITY.md](./GUIA_SANITY.md) para criar o projeto, conectar o site, publicar o painel e convidar a Ingrid.

## Comandos

| Comando | Função |
|---|---|
| `npm run dev` | Abre o site localmente |
| `npm run build` | Valida e gera a versão de produção |
| `npm run start` | Executa a versão de produção |
| `npm run studio:dev` | Abre o painel do Sanity localmente |
| `npm run studio:deploy` | Publica ou atualiza o painel do Sanity |
| `npm run studio:typegen` | Atualiza os tipos do schema no site |

## Estrutura principal

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── blog/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/
└── lib/

../studio-blog-ingrid/
├── sanity.config.ts
└── schemaTypes/
```
