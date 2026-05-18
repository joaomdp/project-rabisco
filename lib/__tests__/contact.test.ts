import { describe, it, expect, vi, beforeEach } from 'vitest'
import { contactSchema } from '../contact-schema'

describe('contactSchema', () => {
  it('valida dados corretos', () => {
    const result = contactSchema.safeParse({
      name:    'João Silva',
      email:   'joao@exemplo.com',
      message: 'Quero saber mais sobre os serviços da Rabisco.',
    })
    expect(result.success).toBe(true)
  })

  it('rejeita nome muito curto', () => {
    const result = contactSchema.safeParse({
      name:    'J',
      email:   'joao@exemplo.com',
      message: 'Mensagem válida aqui.',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Nome muito curto')
    }
  })

  it('rejeita email inválido', () => {
    const result = contactSchema.safeParse({
      name:    'João',
      email:   'nao-e-email',
      message: 'Mensagem válida aqui.',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Email inválido')
    }
  })

  it('rejeita mensagem muito curta', () => {
    const result = contactSchema.safeParse({
      name:    'João',
      email:   'joao@exemplo.com',
      message: 'Curta',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Mensagem muito curta')
    }
  })
})

describe('submitContact', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('faz POST para Web3Forms e retorna sucesso', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ success: true }),
    } as Response)

    const { submitContact } = await import('../web3forms')
    const result = await submitContact({
      name:    'João',
      email:   'joao@exemplo.com',
      message: 'Quero saber mais.',
    })

    expect(fetch).toHaveBeenCalledWith(
      'https://api.web3forms.com/submit',
      expect.objectContaining({ method: 'POST' })
    )
    expect(result.success).toBe(true)
  })

  it('retorna falha quando Web3Forms rejeita', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ success: false, message: 'Invalid key' }),
    } as Response)

    const { submitContact } = await import('../web3forms')
    const result = await submitContact({
      name:    'João',
      email:   'joao@exemplo.com',
      message: 'Quero saber mais.',
    })

    expect(result.success).toBe(false)
  })
})
