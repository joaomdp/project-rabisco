import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Rabisco')
    .items([
      S.documentTypeListItem('depoimento').title('Depoimentos'),
      S.documentTypeListItem('projeto').title('Projetos'),
    ])
