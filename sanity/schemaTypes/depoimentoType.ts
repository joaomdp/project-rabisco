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
