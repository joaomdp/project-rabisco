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
