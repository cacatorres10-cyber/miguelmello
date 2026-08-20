# Cartão digital · Miguel Mello

Site de página única (cartão digital) para **Miguel Mello — Fisioterapeuta**,
com atendimento domiciliar personalizado.

Feito com Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui e
Framer Motion, com o componente animado **Background Paths** no topo e no
bloco de contato.

---

## Como rodar

```bash
npm install
npm run dev       # http://localhost:3000
```

Para gerar o site pronto para publicar:

```bash
npm run build     # gera a pasta ./out (site estático)
```

---

## ✍️ Como mudar os textos

**Todo o conteúdo do site está em um único arquivo:
[`content/site.ts`](content/site.ts).**

Não é preciso mexer em nenhum componente. A página se adapta sozinha ao
que estiver escrito lá:

| O que você quer mudar | Onde editar |
| --- | --- |
| Nome, profissão, faculdade, cidade | `profile` |
| WhatsApp e Instagram | `profile.whatsapp` / `profile.instagram` |
| Frase principal e frases que se alternam | `hero` |
| Texto "Sobre" e a lista de objetivos | `about` |
| Serviços (adicionar, remover, reordenar) | `services.items` |
| Bloco de contato (inclui a frase da avaliação) | `cta` |
| Rodapé | `footer` |
| Título e descrição no Google / WhatsApp | `seo` |

Alguns detalhes úteis:

- **Adicionar um serviço:** copie um bloco de `services.items` e mude
  `title`, `summary` (frase curta do card), `description` (texto do
  pop-up) e `icon`. Os ícones disponíveis estão listados no
  tipo `ServiceIcon` (e mapeados em
  [`components/sections/services.tsx`](components/sections/services.tsx)).
  A grade se reorganiza sozinha — o último card ocupa o espaço que sobrar.
- **Objetivos e frases rotativas:** são listas; basta acrescentar ou apagar
  linhas.
- **WhatsApp:** o link usa o número em formato internacional
  (`5534998883002`), definido na constante `WHATSAPP_E164` no topo do
  arquivo. O texto que aparece na tela é o `display`. O link abre a
  conversa direto, sem mensagem pré-escrita.

## 📸 Como colocar a foto

Salve a foto do Miguel em `public/miguel-mello.jpg` (quadrada, ~1200 px).
Enquanto ela não existir, o site mostra um monograma "MM" no lugar.
Para usar outro nome ou formato, ajuste `profile.photo` em `content/site.ts`.

---

## Recursos

- Fundo preto com o traçado **Background Paths** animado na página inteira
  (camada fixa — o conteúdo desliza por cima)
- Título revelado letra a letra e frases que se alternam sozinhas
- Cards de serviço que **abrem em pop-up** com o texto completo e atalho
  para o WhatsApp (fecha no X, no fundo ou com Esc)
- Botões de **WhatsApp** (com mensagem pronta) e **Instagram**
- **Salvar contato** (baixa um `.vcf` para a agenda do celular)
- **Compartilhar** (usa o compartilhamento nativo do celular)
- Barra fixa de contato no celular ao rolar a página
- Respeita `prefers-reduced-motion`: em aparelhos com "reduzir movimento"
  ligado o site aparece pronto, sem animação
- SEO com dados estruturados (schema.org) e Open Graph

---

## Estrutura

```
app/
  layout.tsx          metadados, fonte e tema
  page.tsx            monta as seções na ordem
  globals.css         cores da marca e tokens de design
components/
  ui/                 componentes shadcn e o background-paths
  sections/           hero, sobre, serviços, avaliação, contato
  ...                 botões de contato, foto, animações
content/
  site.ts             ← TODO O TEXTO DO SITE
lib/
  utils.ts            helper cn()
  motion.ts           presets de animação
  vcard.ts            geração do cartão de contato (.vcf)
public/
  miguel-mello.jpg    ← a foto (adicionar)
```

---

## Publicar

**Vercel (recomendado):** importe o repositório em vercel.com — ele detecta
o Next.js sozinho. Depois é só apontar o domínio.

**Qualquer hospedagem estática** (Netlify, GitHub Pages, Hostinger…):
rode `npm run build` e publique o conteúdo da pasta `out/`.

Depois de publicar, atualize `seo.url` em `content/site.ts` com o endereço
final — ele é usado nos dados estruturados e no compartilhamento.
