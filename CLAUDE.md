# Site Novotraco (novotraco.com)

Site institucional da Novotraco, feito em **Astro** (com React e Tailwind), publicado no **GitHub Pages**.

- Repositório: `ntnovotraco/web`, branch `main`
- Domínio: `novotraco.com` (arquivo `public/CNAME`, não apagar)
- Toda a comunicação com a usuária é em português do Brasil, em linguagem simples (ela não é desenvolvedora).
- Os formulários de inscrição ficam em outro repositório (`ntnovotraco/forms`, pasta `~/Documents/novotraco-forms`, em `forms.novotraco.com`).

## Como funciona

- `npm run dev` abre uma prévia local; `npm run build` gera o site na pasta `site/` (não versionada).
- Cada `git push` na `main` dispara o workflow `.github/workflows/deploy.yml`, que monta o site e publica no GitHub Pages em poucos minutos. Acompanhe em Actions.
- Páginas ficam em `src/pages/` (cada arquivo vira um endereço). Arquivos começando com `_` não são publicados.
- Imagens e fontes ficam em `public/`. Algumas imagens são muito pesadas (até 23 MB); comprimir ao mexer nelas.

## Segurança — importante

- O repositório original (conta pessoal de Matheus Morais) tinha um `worker.js` com **chaves do ActiveCampaign e do Kommo escritas no código** e um `aws.md` com dados internos da AWS. **Os dois foram deixados de fora de propósito.** Nunca coloque chaves, tokens ou senhas no código deste repositório.
- Os formulários do site (contato, newsletter, captura das LPs e PDV) enviam para `ac.matheusiaromo.workers.dev`, um serviço na conta pessoal do Matheus no Cloudflare. Se ele parar, esses formulários param. A usuária disse que essas integrações não serão necessárias; avaliar com ela antes de mexer.

## Publicar

- Autenticação: token fine-grained da usuária no Keychain do macOS, Resource owner **ntnovotraco**, com acesso a `forms` e `web` (Contents **Read and write**). Nunca peça o token no chat.
- Commits com `user.email = isadora-lang@users.noreply.github.com`.

## Domínio

- DNS na **Network Solutions** (`dns101/dns102.register.com`). **Nunca mexer nos registros MX** (e-mail da empresa).
- Para o `novotraco.com`: 4 registros A do `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; CNAME `www` → `ntnovotraco.github.io`.
- Em abril de 2026 o site esteve na AWS (S3 + CloudFront, DNS no Route 53), montado pela Druid. Essa estrutura não é mais usada; confirmar com o TI se ainda gera custo.
