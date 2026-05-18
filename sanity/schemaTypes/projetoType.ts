import { defineField, defineType, Rule } from 'sanity'

export const projetoType = defineType({
  name: 'projeto',
  title: 'Projeto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome do projeto',
      type: 'string',
      validation: (r: Rule) => r.required(),
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
      validation: (r: Rule) => r.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Descrição curta',
      type: 'string',
      validation: (r: Rule) => r.required(),
    }),
    defineField({
      name: 'result',
      title: 'Resultado alcançado',
      type: 'string',
      description: 'Ex: +340% engajamento, R$ 187k em 14 dias',
      validation: (r: Rule) => r.required(),
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
      validation: (r: Rule) => r.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordem de exibição',
      type: 'number',
      validation: (r: Rule) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag' },
  },
  orderings: [
    { name: 'orderAsc', title: 'Ordem', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
