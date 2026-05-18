# Sanity CMS — Depoimentos e Projetos — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir os dados hardcoded de Depoimentos e Projetos por conteúdo gerenciado via Sanity Studio em `/studio`.

**Architecture:** Schemas `depoimento` e `projeto` definidos em `sanity/schemaTypes/`. Queries GROQ tipadas em `sanity/queries.ts`. `Depoimentos.tsx` e `Portfolio.tsx` viram Server Components assíncronos que chamam `client.fetch` com cache ISR de 60 segundos.

**Tech Stack:** Next.js 15 App Router, next-sanity, TypeScript, Tailwind CSS

---

## File Map

| Ação    | Arquivo                                          | Responsabilidade                              |
|---------|--------------------------------------------------|-----------------------------------------------|
| Criar   | `sanity/schemaTypes/depoimentoType.ts`           | Schema Sanity do documento depoimento         |
| Criar   | `sanity/schemaTypes/projetoType.ts`              | Schema Sanity do documento projeto            |
| Criar   | `sanity/queries.ts`                              | Tipos TS + funções de fetch GROQ              |
| Alterar | `sanity/schemaTypes/index.ts`                    | Registrar novos schemas, remover blog         |
| Alterar | `sanity/structure.ts`                            | Menu do Studio: Depoimentos + Projetos        |
| Alterar | `components/Depoimentos.tsx`                     | Server Component que busca depoimentos        |
| Alterar | `components/Portfolio.tsx`                       | Server Component que busca projetos           |
| Deletar | `sanity/schemaTypes/postType.ts`                 | Não utilizado                                 |
| Deletar | `sanity/schemaTypes/authorType.ts`               | Não utilizado                                 |
| Deletar | `sanity/schemaTypes/categoryType.ts`             | Não utilizado                                 |
| Deletar | `sanity/schemaTypes/blockContentType.ts`         | Não utilizado                                 |

---

## Task 1: Schema `depoimento`

**Files:**
- Create: `sanity/schemaTypes/depoimentoType.ts`

- [ ] **Step 1: Criar o arquivo do schema**

```ts
// sanity/schemaTypes/depoimentoType.ts
import { defineField, defineType } from 'sanity'

export const depoimentoType = defineType({
  name: 'depoimento',
  title: 'Depoimento',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome completo',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'role',
      title: 'Cargo · Empresa',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'initials',
      title: 'Iniciais (máx 2 caracteres)',
      type: 'string',
      validation: (r) => r.required().max(2),
    }),
    defineField({
      name: 'quote',
      title: 'Depoimento',
      type: 'text',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'cardStyle',
      title: 'Estilo do card',
      type: 'string',
      options: {
        list: [
          { title: 'Claro (branco)', value: 'light' },
          { title: 'Rosa', value: 'pink' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'avatarColor',
      title: 'Cor do avatar',
      type: 'string',
      options: {
        list: [
          { title: 'Rosa', value: 'pink' },
          { title: 'Amarelo', value: 'yellow' },
          { title: 'Gradiente rosa-amarelo', value: 'pink-gradient' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'raised',
      title: 'Card levantado',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Ordem de exibição',
      type: 'number',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role' },
  },
  orderings: [
    { name: 'orderAsc', title: 'Ordem', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
```

- [ ] **Step 2: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 3: Commit**

```bash
git add sanity/schemaTypes/depoimentoType.ts
git commit -m "feat(sanity): add depoimento schema"
```

---

## Task 2: Schema `projeto`

**Files:**
- Create: `sanity/schemaTypes/projetoType.ts`

- [ ] **Step 1: Criar o arquivo do schema**

```ts
// sanity/schemaTypes/projetoType.ts
import { defineField, defineType } from 'sanity'

export const projetoType = defineType({
  name: 'projeto',
  title: 'Projeto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome do projeto',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Categoria',
      type: 'string',
      options: {
        list: ['Branding', 'Vídeo', 'Tráfego', 'Identidade', 'Social', 'Lançamento'].map(
          (v) => ({ title: v, value: v }),
        ),
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Descrição curta',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'result',
      title: 'Resultado alcançado',
      type: 'string',
      description: 'Ex: +340% engajamento, R$ 187k em 14 dias',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'theme',
      title: 'Tema visual do card',
      type: 'string',
      options: {
        list: [
          { title: 'Rosa Escuro (gradiente pink → deep)', value: 'rosa-escuro' },
          { title: 'Amarelo (gradiente yellow → pink)', value: 'amarelo' },
          { title: 'Rosa Claro (gradiente pink2 → yellow)', value: 'rosa-claro' },
          { title: 'Profundo (radial escuro)', value: 'profundo' },
          { title: 'Solar (pink → yellow diagonal)', value: 'solar' },
          { title: 'Neon (pink escuro com grid)', value: 'neon' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordem de exibição',
      type: 'number',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag' },
  },
  orderings: [
    { name: 'orderAsc', title: 'Ordem', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
```

- [ ] **Step 2: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 3: Commit**

```bash
git add sanity/schemaTypes/projetoType.ts
git commit -m "feat(sanity): add projeto schema"
```

---

## Task 3: Atualizar index de schemas e remover schemas de blog

**Files:**
- Modify: `sanity/schemaTypes/index.ts`
- Delete: `sanity/schemaTypes/postType.ts`
- Delete: `sanity/schemaTypes/authorType.ts`
- Delete: `sanity/schemaTypes/categoryType.ts`
- Delete: `sanity/schemaTypes/blockContentType.ts`

- [ ] **Step 1: Substituir conteúdo de `sanity/schemaTypes/index.ts`**

```ts
// sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import { depoimentoType } from './depoimentoType'
import { projetoType } from './projetoType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [depoimentoType, projetoType],
}
```

- [ ] **Step 2: Deletar os schemas de blog**

```bash
rm sanity/schemaTypes/postType.ts
rm sanity/schemaTypes/authorType.ts
rm sanity/schemaTypes/categoryType.ts
rm sanity/schemaTypes/blockContentType.ts
```

- [ ] **Step 3: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 4: Commit**

```bash
git add -A sanity/schemaTypes/
git commit -m "feat(sanity): replace blog schemas with depoimento and projeto"
```

---

## Task 4: Atualizar estrutura do Studio

**Files:**
- Modify: `sanity/structure.ts`

- [ ] **Step 1: Substituir conteúdo de `sanity/structure.ts`**

```ts
// sanity/structure.ts
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Rabisco')
    .items([
      S.documentTypeListItem('depoimento').title('Depoimentos'),
      S.documentTypeListItem('projeto').title('Projetos'),
    ])
```

- [ ] **Step 2: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 3: Commit**

```bash
git add sanity/structure.ts
git commit -m "feat(sanity): update studio structure for Rabisco content"
```

---

## Task 5: Queries GROQ tipadas

**Files:**
- Create: `sanity/queries.ts`

- [ ] **Step 1: Criar `sanity/queries.ts`**

```ts
// sanity/queries.ts
import { client } from './lib/client'

export type Depoimento = {
  _id: string
  name: string
  role: string
  initials: string
  quote: string
  cardStyle: 'light' | 'pink'
  avatarColor: 'pink' | 'yellow' | 'pink-gradient'
  raised?: boolean
}

export type ProjetoTheme =
  | 'rosa-escuro'
  | 'amarelo'
  | 'rosa-claro'
  | 'profundo'
  | 'solar'
  | 'neon'

export type Projeto = {
  _id: string
  title: string
  tag: string
  desc: string
  result: string
  theme: ProjetoTheme
}

const depoimentosQuery = `*[_type == "depoimento"] | order(order asc) {
  _id, name, role, initials, quote, cardStyle, avatarColor, raised
}`

const projetosQuery = `*[_type == "projeto"] | order(order asc) {
  _id, title, tag, desc, result, theme
}`

export async function getDepoimentos(): Promise<Depoimento[]> {
  return client.fetch(depoimentosQuery, {}, { next: { revalidate: 60 } })
}

export async function getProjetos(): Promise<Projeto[]> {
  return client.fetch(projetosQuery, {}, { next: { revalidate: 60 } })
}
```

- [ ] **Step 2: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 3: Commit**

```bash
git add sanity/queries.ts
git commit -m "feat(sanity): add typed GROQ queries for depoimentos and projetos"
```

---

## Task 6: Converter `Depoimentos.tsx` em Server Component

**Files:**
- Modify: `components/Depoimentos.tsx`

- [ ] **Step 1: Substituir todo o conteúdo de `components/Depoimentos.tsx`**

```tsx
// components/Depoimentos.tsx
import Reveal from './Reveal'
import { getDepoimentos, type Depoimento } from '@/sanity/queries'

const AVATAR_BG: Record<NonNullable<Depoimento['avatarColor']>, string> = {
  'pink': 'bg-gradient-to-br from-rab-pink to-rab-pink2 text-white',
  'yellow': 'bg-rab-yellow text-rab-dark',
  'pink-gradient': 'bg-gradient-to-br from-rab-yellow to-yellow-500 text-rab-dark',
}

export default async function Depoimentos() {
  const testimonials = await getDepoimentos()

  return (
    <section id="depoimentos" className="relative py-24 md:py-36 bg-rab-cream overflow-hidden">

      <svg className="absolute right-6 top-10 w-40 opacity-60 hidden md:block" viewBox="0 0 200 100" fill="none" aria-hidden="true">
        <path d="M10 50 C 40 10, 80 90, 110 40 S 190 60, 190 50" stroke="#FF007A" strokeWidth="5" strokeLinecap="round" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-rab-pink">
            <span className="w-8 h-px bg-rab-pink" /> Depoimentos
          </div>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            Quem rabiscou<br />com a gente <span className="text-rab-pink">conta.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6 items-start">
          {testimonials.map((t, i) => {
            const isPink = t.cardStyle === 'pink'
            return (
              <Reveal key={t._id} delay={0.08 * i} className="h-full">
                <figure
                  className={`flex flex-col h-full rounded-3xl p-7 shadow-soft ${
                    isPink ? 'bg-rab-pink text-white' : 'bg-white text-rab-dark border border-rab-dark/5'
                  } ${t.raised ? 'md:translate-y-6' : ''}`}
                >
                  <svg
                    className={`w-10 h-10 mb-4 flex-shrink-0 ${isPink ? 'text-rab-yellow' : 'text-rab-pink'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 7h4v4H7c0 4 2 5 4 5v3c-5 0-8-3-8-8V7Zm10 0h4v4h-4c0 4 2 5 4 5v3c-5 0-8-3-8-8V7Z" />
                  </svg>

                  <blockquote className="flex-1 text-base leading-relaxed">{t.quote}</blockquote>

                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className={`w-11 h-11 rounded-full grid place-items-center font-bold flex-shrink-0 ${AVATAR_BG[t.avatarColor]}`}>
                      {t.initials}
                    </span>
                    <span>
                      <div className="font-bold text-sm">{t.name}</div>
                      <div className={`text-xs ${isPink ? 'text-white/70' : 'text-rab-dark/55'}`}>{t.role}</div>
                    </span>
                  </figcaption>

                  <div className={`mt-4 text-sm tracking-wide ${isPink ? 'text-rab-yellow' : 'text-rab-pink'}`}>
                    ★★★★★
                  </div>
                </figure>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 3: Commit**

```bash
git add components/Depoimentos.tsx
git commit -m "feat: convert Depoimentos to async Server Component with Sanity fetch"
```

---

## Task 7: Converter `Portfolio.tsx` em Server Component

**Files:**
- Modify: `components/Portfolio.tsx`

- [ ] **Step 1: Substituir todo o conteúdo de `components/Portfolio.tsx`**

```tsx
// components/Portfolio.tsx
import type { CSSProperties, ReactNode } from 'react'
import Reveal from './Reveal'
import { getProjetos, type ProjetoTheme } from '@/sanity/queries'

type ThemeConfig = {
  bg: string
  bgStyle?: CSSProperties
  tagClass: string
  numClass: string
  textClass: string
  descClass: string
  resultClass: string
  decor: ReactNode
}

const THEMES: Record<ProjetoTheme, ThemeConfig> = {
  'rosa-escuro': {
    bg: 'bg-gradient-to-br from-rab-pink via-rab-pink2 to-rab-deep',
    tagClass: 'bg-white/15 backdrop-blur text-white',
    numClass: 'text-white/40',
    textClass: 'text-white',
    descClass: 'text-white/80',
    resultClass: 'bg-rab-yellow text-rab-dark',
    decor: (
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 500" preserveAspectRatio="none">
        <path d="M-10 100 C 80 60, 160 180, 260 110 S 410 120, 420 100" stroke="#fff" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M-10 380 C 100 410, 220 340, 410 400" stroke="#FFEA00" strokeWidth="6" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  'amarelo': {
    bg: 'bg-gradient-to-br from-rab-yellow via-yellow-400 to-rab-pink',
    tagClass: 'bg-rab-dark text-rab-yellow',
    numClass: 'text-rab-dark/30',
    textClass: 'text-rab-dark',
    descClass: 'text-rab-dark/80',
    resultClass: 'bg-rab-dark text-white',
    decor: (
      <>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0 2px, transparent 2px 16px)' }} />
        <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 400 500" preserveAspectRatio="none">
          <circle cx="80" cy="380" r="40" stroke="#FF007A" strokeWidth="5" fill="none" />
          <path d="M280 80 q 40 60 0 120" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      </>
    ),
  },
  'rosa-claro': {
    bg: 'bg-gradient-to-br from-rab-pink2 via-pink-400 to-rab-yellow',
    tagClass: 'bg-rab-dark text-white',
    numClass: 'text-rab-dark/30',
    textClass: 'text-rab-dark',
    descClass: 'text-rab-dark/80',
    resultClass: 'bg-rab-dark text-white',
    decor: (
      <svg className="absolute right-4 top-4 w-32 opacity-90" viewBox="0 0 100 100" fill="none">
        <path d="M50 5 L 61 39 H 95 L 67 60 L 78 95 L 50 73 L 22 95 L 33 60 L 5 39 H 39 Z" fill="#1F0033" />
      </svg>
    ),
  },
  'profundo': {
    bg: '',
    bgStyle: { background: 'radial-gradient(circle at 30% 30%, #FF4DA6 0%, #1F0033 75%)' },
    tagClass: 'bg-white/15 backdrop-blur text-white',
    numClass: 'text-white/30',
    textClass: 'text-white',
    descClass: 'text-white/80',
    resultClass: 'bg-rab-yellow text-rab-dark',
    decor: (
      <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 400 500" preserveAspectRatio="none">
        <path d="M40 250 C 100 150, 200 350, 360 200" stroke="#FFEA00" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M40 320 C 140 260, 240 400, 360 300" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  'solar': {
    bg: 'bg-gradient-to-tl from-rab-pink via-rab-pink2 to-rab-yellow',
    tagClass: 'bg-rab-dark text-white',
    numClass: 'text-rab-dark/30',
    textClass: 'text-rab-dark',
    descClass: 'text-rab-dark/80',
    resultClass: 'bg-rab-dark text-rab-yellow',
    decor: (
      <svg className="absolute left-6 bottom-32 w-24 opacity-70" viewBox="0 0 100 60" fill="none">
        <path d="M5 30 C 25 5, 45 55, 65 25 S 95 35, 95 30" stroke="#1F0033" strokeWidth="5" strokeLinecap="round" />
      </svg>
    ),
  },
  'neon': {
    bg: 'bg-gradient-to-br from-rab-pink via-pink-500 to-rab-deep',
    tagClass: 'bg-white/15 backdrop-blur text-white',
    numClass: 'text-white/30',
    textClass: 'text-white',
    descClass: 'text-white/80',
    resultClass: 'bg-rab-yellow text-rab-dark',
    decor: (
      <>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,#fff 0 1px, transparent 1px 24px),repeating-linear-gradient(90deg,#fff 0 1px, transparent 1px 24px)',
          }}
        />
        <svg className="absolute right-6 top-12 w-28 opacity-90" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="30" stroke="#FFEA00" strokeWidth="4" fill="none" />
          <circle cx="50" cy="50" r="44" stroke="#fff" strokeWidth="3" strokeDasharray="4 6" fill="none" />
        </svg>
      </>
    ),
  },
}

export default async function Portfolio() {
  const projects = await getProjetos()

  return (
    <section id="portfolio" className="relative py-24 md:py-36 bg-rab-snow overflow-hidden">

      <svg className="absolute top-20 left-10 w-32 opacity-50 hidden md:block" viewBox="0 0 200 80" fill="none" aria-hidden="true">
        <path d="M5 40 C 40 5, 90 75, 130 30 S 195 60, 195 40" stroke="#FFEA00" strokeWidth="5" strokeLinecap="round" />
      </svg>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-rab-pink">
                <span className="w-8 h-px bg-rab-pink" /> Vitrine
              </div>
              <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
                Portfólio <span className="text-rab-pink">Rabisco</span>
              </h2>
              <p className="mt-4 text-xl md:text-2xl font-hand text-rab-dark/70">trabalhos que estão fazendo barulho 🔊</p>
            </div>
            <a
              href="#contato"
              className="hidden md:inline-flex items-center gap-2 bg-rab-dark text-white font-semibold text-sm px-5 py-3 rounded-full hover:bg-rab-pink transition"
            >
              Quero um igual
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const t = THEMES[p.theme]
            const num = String(i + 1).padStart(2, '0')
            return (
              <Reveal key={p._id} delay={0.05 * i}>
                <article
                  className={`project group rounded-3xl overflow-hidden bg-rab-dark relative aspect-[4/5] cursor-pointer ${t.bg}`}
                  style={t.bgStyle}
                >
                  {t.decor}
                  <div className="absolute inset-x-0 top-0 p-6 flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest ${t.tagClass}`}>{p.tag}</span>
                    <span className={`font-display text-xl ${t.numClass}`}>{num}</span>
                  </div>
                  <div className={`absolute inset-x-0 bottom-0 p-6 ${t.textClass}`}>
                    <h3 className="font-display text-3xl leading-tight">{p.title}</h3>
                    <p className={`text-sm mt-1 ${t.descClass}`}>{p.desc}</p>
                    <div className={`reveal-result mt-4 inline-flex items-center gap-2 font-bold px-4 py-2 rounded-full text-sm ${t.resultClass}`}>
                      {p.result}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-10 text-center md:hidden">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-rab-dark text-white font-semibold text-sm px-5 py-3 rounded-full"
          >
            Quero um igual
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar TypeScript e build**

```bash
npx tsc --noEmit
```

Esperado: sem erros.

```bash
npm run build
```

Esperado: build concluído sem erros. Se aparecer erro de variáveis de ambiente do Sanity (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`), confirme que o `.env.local` está preenchido.

- [ ] **Step 3: Commit**

```bash
git add components/Portfolio.tsx
git commit -m "feat: convert Portfolio to async Server Component with Sanity fetch"
```

---

## Verificação Final

Após todos os tasks:

1. Rode `npm run dev` e acesse `http://localhost:3000/studio`
2. Confirme que o Studio mostra apenas **Depoimentos** e **Projetos** no menu lateral
3. Crie um depoimento de teste: preencha todos os campos e publique
4. Acesse `http://localhost:3000` — o depoimento deve aparecer na seção Depoimentos em até 60 segundos (ou imediatamente em dev com cache desabilitado)
5. Crie um projeto de teste e confirme que aparece na seção Portfólio
