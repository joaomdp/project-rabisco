import type { ContactFormData } from './contact-schema'

export async function submitContact(data: ContactFormData): Promise<{ success: boolean; message?: string }> {
  const res = await fetch('https://api.web3forms.com/submit', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      ...data,
    }),
  })
  return res.json()
}
