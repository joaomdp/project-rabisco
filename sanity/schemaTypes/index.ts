import { type SchemaTypeDefinition } from 'sanity'
import { depoimentoType } from './depoimentoType'
import { projetoType } from './projetoType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [depoimentoType, projetoType],
}
