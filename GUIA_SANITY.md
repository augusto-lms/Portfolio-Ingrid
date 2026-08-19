# Guia completo do Sanity — Blog da Ingrid

Este guia cobre a configuração inicial e a rotina de publicação. O trabalho é dividido entre três serviços:

```text
Sanity Studio → painel usado pela Ingrid
Sanity Content Lake → textos e imagens armazenados na nuvem
Next.js/Vercel → site público que apresenta os artigos
```

## 1. Criar a conta e o projeto

1. Acesse https://www.sanity.io/ e crie sua conta.
2. Entre em https://www.sanity.io/manage.
3. Crie um projeto chamado `Blog da Ingrid`.
4. Crie ou confirme o dataset chamado `production`.
5. Escolha a visibilidade **Public** para o dataset.

O dataset público permite que o site leia somente os documentos publicados sem guardar uma chave secreta. Rascunhos continuam restritos aos usuários autenticados do painel.

### Encontrar o Project ID

Dentro do projeto, abra as configurações ou a visão geral e copie o **Project ID**. Ele é uma sequência curta semelhante a:

```text
rc1wpgey
```

O Project ID identifica o projeto, mas não funciona como senha.

## 2. Conectar o site local ao Sanity

Na raiz do projeto, crie um arquivo chamado `.env.local` com:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=rc1wpgey
NEXT_PUBLIC_SANITY_DATASET=production
SITE_URL=http://localhost:3000
```

O Studio standalone fica na pasta irmã `../studio-blog-ingrid` e já possui o projeto `rc1wpgey` e o dataset `production` configurados em `sanity.config.ts` e `sanity.cli.ts`.

O `.env.local` do site não é enviado ao Git. O modelo disponível está em `.env.example`.

Sempre reinicie os servidores depois de alterar variáveis de ambiente.

## 3. Abrir o site e o painel

Em um terminal, abra o site:

```bash
npm run dev
```

Em outro terminal, abra o painel:

```bash
npm run studio:dev
```

Na primeira abertura, o Sanity pode pedir que você entre na conta. Utilize a mesma conta que criou o projeto.

## 4. Criar a primeira categoria

No painel do Sanity:

1. Entre em **Categorias**.
2. Clique para criar um documento.
3. Preencha o nome, por exemplo `Saúde cerebral`.
4. No campo de endereço, clique em **Generate/Gerar**.
5. Publique a categoria.

Outros exemplos possíveis:

- Prevenção
- Sono
- Memória
- Estilo de vida
- Rotina médica

## 5. Criar o primeiro artigo

Entre em **Artigos** e crie um documento. Os campos são:

### Título

O nome principal do artigo. Recomenda-se um título claro e específico.

### Endereço da página

Clique em **Generate/Gerar** depois de preencher o título. Um título como:

```text
Como o sono influencia a saúde cerebral
```

produzirá uma página semelhante a:

```text
/blog/como-o-sono-influencia-a-saude-cerebral
```

Evite alterar esse endereço depois que o artigo já tiver sido divulgado.

### Resumo

Texto curto usado nos cards do blog e, quando não houver descrição específica, nos mecanismos de busca. O limite configurado é de 220 caracteres.

### Imagem de capa

Envie a imagem principal e preencha a descrição da imagem. A descrição deve comunicar o conteúdo visual, por exemplo:

```text
Dra. Ingrid Hovsepian conversando com uma paciente no consultório
```

Não use a descrição apenas para repetir o título do artigo.

### Categoria

Selecione uma das categorias publicadas anteriormente.

### Data de publicação

O painel preenche a data atual automaticamente. Ela pode ser ajustada quando necessário.

### Conteúdo

O editor aceita:

- Texto normal
- Títulos e subtítulos
- Negrito e itálico
- Citações
- Listas
- Links
- Posts e Reels do Instagram

### Google e compartilhamento

Essa aba possui dois campos opcionais:

- **Título para o Google:** recomendado até 60 caracteres.
- **Descrição para o Google:** recomendada até 160 caracteres.

Quando esses campos ficam vazios, o site usa o título e o resumo normais.

## 6. Inserir um post do Instagram

Dentro do conteúdo do artigo:

1. Clique para adicionar um novo bloco.
2. Escolha **Post do Instagram**.
3. Abra o post ou Reel no Instagram.
4. Copie o link completo.
5. Cole o link no campo do painel.

Links aceitos seguem formatos como:

```text
https://www.instagram.com/p/ABC123/
https://www.instagram.com/reel/ABC123/
```

Para funcionar, a conta do Instagram deve ser pública e permitir incorporações em sites. Se o conteúdo for apagado, ficar privado ou bloquear incorporações, o artigo exibirá uma alternativa para abrir o post no Instagram.

## 7. Rascunho e publicação

Enquanto Ingrid estiver escrevendo, o Sanity mantém o documento como rascunho. O site público só consulta documentos publicados.

O fluxo recomendado é:

```text
Criar → escrever → revisar → conferir imagem e resumo → publicar
```

Depois de clicar em **Publish/Publicar**, o conteúdo normalmente aparece no site em até aproximadamente 60 segundos. Esse intervalo é controlado pela atualização automática configurada no Next.js.

## 8. Publicar o painel do Sanity na internet

O painel local só funciona enquanto o computador estiver executando o comando de desenvolvimento. Para Ingrid acessá-lo de qualquer lugar, publique o Studio:

```bash
npm run studio:deploy
```

Na primeira publicação, o Sanity solicitará um hostname. Um exemplo:

```text
blog-ingrid
```

O endereço resultante será semelhante a:

```text
https://blog-ingrid.sanity.studio
```

Quando os campos ou o visual do painel forem alterados no código, execute novamente `npm run studio:deploy`. Publicar ou editar artigos não exige republicar o painel.

## 9. Convidar a Ingrid

1. Abra https://www.sanity.io/manage.
2. Entre no projeto `Blog da Ingrid`.
3. Abra **Members**.
4. Convide o e-mail utilizado pela Ingrid.

No plano gratuito, as funções disponíveis são **Administrator** e **Viewer**. Como Viewer não pode escrever, Ingrid precisará ser Administrator para criar e publicar artigos. O plano Growth disponibiliza a função Editor, que permite edição com menos acesso às configurações do projeto.

Depois de aceitar o convite, Ingrid poderá entrar diretamente pelo endereço `.sanity.studio`.

## 10. Configurar o site na Vercel

No projeto da Vercel, abra **Settings → Environment Variables** e adicione:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID = rc1wpgey
NEXT_PUBLIC_SANITY_DATASET = production
SITE_URL = https://dominio-real-do-site.com.br
```

Marque as variáveis para os ambientes de produção e preview. Depois, faça um novo deploy do site para que a configuração seja aplicada.

A Vercel deve reconhecer o projeto como Next.js automaticamente. O comando de build é:

```text
npm run build
```

## 11. Rotina da Ingrid

Depois da configuração inicial, Ingrid precisará apenas:

1. Abrir o endereço do painel.
2. Entrar com sua conta.
3. Abrir **Artigos**.
4. Criar ou editar um artigo.
5. Clicar em **Publish/Publicar**.

Ela não precisará acessar GitHub, Vercel, código ou terminal.

## 12. Excluir ou retirar um artigo do site

Para apagar um artigo de teste:

1. Abra **Artigos** no Studio.
2. Abra o artigo desejado.
3. Clique no menu de ações **⋮**, ao lado do botão **Publish**.
4. Escolha **Delete** e confirme.

A exclusão é permanente. Quando a intenção for apenas esconder o artigo e preservar o conteúdo, escolha **Unpublish**. Depois da exclusão ou despublicação, o artigo pode levar aproximadamente 60 segundos para desaparecer do site.

## 13. Acesso da Ingrid ao painel

No plano gratuito, Ingrid precisa ser convidada como **Administrator** para criar e publicar artigos:

1. Acesse https://www.sanity.io/manage.
2. Abra o projeto **Blog Ingrid**.
3. Entre em **Members**.
4. Clique em **Invite project members**.
5. Informe o e-mail que Ingrid usará para entrar no Sanity.
6. Selecione **Administrator** e envie o convite.

Para disponibilizar o painel pela internet, execute uma vez:

```bash
npm run studio:deploy
```

Escolha um endereço disponível quando solicitado. Depois que Ingrid aceitar o convite, ela poderá entrar nesse endereço `*.sanity.studio` com a própria conta e administrar os artigos sem acessar o código.

## 12. O que cada alteração exige

| Alteração | O que fazer |
|---|---|
| Novo artigo | Publicar no Sanity |
| Correção em um artigo | Editar e publicar novamente |
| Nova categoria | Criar e publicar no Sanity |
| Alterar campos do painel | Atualizar código e executar `npm run studio:deploy` |
| Alterar o design do site | Atualizar código e publicar na Vercel |
| Trocar Project ID | Atualizar variáveis locais e da Vercel |

## 13. Problemas comuns

### O artigo demonstrativo continua aparecendo

Verifique se `NEXT_PUBLIC_SANITY_PROJECT_ID` está correto e reinicie `npm run dev`.

### O blog ficou vazio depois da conexão

Isso significa que o Sanity foi conectado, mas ainda não existe nenhum artigo publicado. Crie e publique o primeiro artigo.

### A imagem não aparece

Confirme que a imagem de capa foi enviada e que o artigo foi publicado depois do upload.

### O Instagram não carrega

Confirme que:

- O link é de um post ou Reel.
- A conta é pública.
- A opção de incorporações em sites está ativada no Instagram.
- O conteúdo não foi apagado ou restringido.

### A publicação não apareceu imediatamente

Aguarde até 60 segundos e atualize a página. Se continuar ausente, confirme que o documento está publicado e não apenas salvo como rascunho.

## 14. Segurança

- Não coloque tokens administrativos em variáveis que começam com `NEXT_PUBLIC_` ou `SANITY_STUDIO_`.
- O frontend atual não precisa de token porque lê somente conteúdo publicado em um dataset público.
- Não publique `.env.local` no Git.
- Não coloque informações identificáveis de pacientes nos artigos ou imagens.
- Mantenha o aviso de caráter educativo e revise conteúdos médicos antes da publicação.
