# Sanity CMS — Depoimentos e Projetos

**Data:** 2026-05-18  
**Status:** Aprovado

## Objetivo

Permitir que o conteúdo de Depoimentos e Projetos do site Rabisco seja gerenciado pelo Sanity Studio em `/studio`, sem necessidade de alterar código.

## Escopo

- Schemas: `depoimento` e `projeto` (substituem os schemas de blog padrão)
- Studio: estrutura simplificada com apenas as duas coleções
- Busca: Server Components assíncronos com ISR (revalidate: 60s)
- Visual: estilos e decorações hardcoded por tema — o usuário escolhe o tema, o componente mapeia

Fora do escopo: upload de imagens para projetos, rich text (Portable Text), webhooks, live preview.

---

## Schemas

### `depoimento`

| Campo       | Tipo    | Obrigatório | Valores / Notas                              |
|-------------|---------|-------------|----------------------------------------------|
| name        | string  | sim         | Nome completo                                |
| role        | string  | sim         | Cargo · Empresa                              |
| initials    | string  | sim         | Iniciais do avatar (ex: CM). Máx 2 chars     |
| quote       | text    | sim         | Texto do depoimento                          |
| cardStyle   | string  | sim         | `light` \| `pink`                            |
| avatarColor | string  | sim         | `pink` \| `yellow` \| `pink-gradient`        |
| raised      | boolean | não         | Card deslocado verticalmente. Default: false |
| order       | number  | sim         | Ordem de exibição (crescente)                |

### `projeto`

| Campo  | Tipo   | Obrigatório | Valores / Notas                                                      |
|--------|--------|-------------|----------------------------------------------------------------------|
| title  | string | sim         | Nome do projeto                                                      |
| tag    | string | sim         | `Branding` \| `Vídeo` \| `Tráfego` \| `Identidade` \| `Social` \| `Lançamento` |
| desc   | string | sim         | Descrição curta (1 linha)                                            |
| result | string | sim         | Resultado alcançado (ex: +340% engajamento)                          |
| theme  | string | sim         | `rosa-escuro` \| `amarelo` \| `rosa-claro` \| `profundo` \| `solar` \| `neon` |
| order  | number | sim         | Ordem de exibição (crescente)                                        |

---

## Mapeamento de Temas — Projetos

| Tema         | Gradiente Tailwind                                    | Texto | SVG Decorativo         |
|--------------|-------------------------------------------------------|-------|------------------------|
| `rosa-escuro`| `from-rab-pink via-rab-pink2 to-rab-deep`            | white | Ondas brancas/amarelas |
| `amarelo`    | `from-rab-yellow via-yellow-400 to-rab-pink`         | dark  | Listras + círculo      |
| `rosa-claro` | `from-rab-pink2 via-pink-400 to-rab-yellow`          | dark  | Estrela escura         |
| `profundo`   | radial `#FF4DA6 → #1F0033`                           | white | Ondas amarelas/brancas |
| `solar`      | `from-rab-pink via-rab-pink2 to-rab-yellow` (tl)    | dark  | Onda escura            |
| `neon`       | `from-rab-pink via-pink-500 to-rab-deep`             | white | Grid + círculos        |

---

## Mapeamento de Cores — Avatares Depoimentos

| avatarColor      | Classes Tailwind                                          |
|------------------|-----------------------------------------------------------|
| `pink`           | `bg-gradient-to-br from-rab-pink to-rab-pink2 text-white`|
| `yellow`         | `bg-rab-yellow text-rab-dark`                             |
| `pink-gradient`  | `bg-gradient-to-br from-rab-yellow to-yellow-500 text-rab-dark` |

---

## Arquitetura

### Arquivos a criar
- `sanity/schemaTypes/depoimentoType.ts`
- `sanity/schemaTypes/projetoType.ts`
- `sanity/queries.ts` — GROQ queries tipadas

### Arquivos a modificar
- `sanity/schemaTypes/index.ts` — substituir schemas de blog pelos novos
- `sanity/structure.ts` — estrutura do Studio com Depoimentos e Projetos
- `components/Depoimentos.tsx` — Server Component assíncrono
- `components/Portfolio.tsx` — Server Component assíncrono

### Arquivos a remover
- `sanity/schemaTypes/postType.ts`
- `sanity/schemaTypes/authorType.ts`
- `sanity/schemaTypes/categoryType.ts`
- `sanity/schemaTypes/blockContentType.ts`

---

## Fluxo de dados

```
Sanity Studio (/studio)
  └─ Usuário publica conteúdo
       └─ Salvo no Sanity hosted DB
            └─ Next.js Server Component
                 └─ client.fetch(query, {}, { next: { revalidate: 60 } })
                      └─ Cache ISR: revalida em até 60s
                           └─ Componente renderiza com dados frescos
```

---

## Queries GROQ

```groq
// Depoimentos
*[_type == "depoimento"] | order(order asc) {
  name, role, initials, quote, cardStyle, avatarColor, raised
}

// Projetos
*[_type == "projeto"] | order(order asc) {
  title, tag, desc, result, theme
}
```

---

## Restrições

- O campo `order` deve ser único por coleção para garantir ordenação previsível.
- `initials` limitado a 2 caracteres (validação no schema).
- Os schemas de blog padrão (post/author/category/blockContent) são removidos permanentemente — não estavam em uso.
- A página do Studio em `app/studio/[[...tool]]/page.tsx` não precisa ser alterada.
