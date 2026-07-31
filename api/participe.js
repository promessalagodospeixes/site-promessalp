// Endpoint dos formulários do site — envia e-mail pra igreja via Resend.
// Requer a env var RESEND_API_KEY no projeto da Vercel.

const DESTINO = 'iaplagodospeixes@gmail.com'
const REMETENTE = 'Site Promessa Lago dos Peixes <noreply@promessalagodospeixes.com.br>'
const TIPOS = new Set(['ministerio', 'celula', 'oracao'])

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' })

  const token = process.env.RESEND_API_KEY
  if (!token) return res.status(500).json({ error: 'RESEND_API_KEY não configurado' })

  const { tipo, assunto, campos } = req.body || {}
  if (!TIPOS.has(tipo) || !campos || typeof campos !== 'object') {
    return res.status(400).json({ error: 'dados inválidos' })
  }

  const entradas = Object.entries(campos)
    .filter(([k, v]) => typeof v === 'string' && v.trim() && k.length <= 60 && v.length <= 4000)
    .slice(0, 20)
  if (!entradas.length) return res.status(400).json({ error: 'formulário vazio' })

  const linhas = entradas
    .map(([k, v]) => `<tr><td style="padding:8px 14px;background:#E7F0F6;color:#14587F;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.06em;vertical-align:top;white-space:nowrap">${esc(k)}</td><td style="padding:8px 14px;color:#2F3538;font-size:14px;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join('')

  const html = `
  <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:8px">
    <h2 style="color:#1E6E96;font-size:18px">${esc(assunto || 'Mensagem do site')}</h2>
    <table style="border-collapse:collapse;width:100%;border:1px solid #DEDBD6;border-radius:8px">${linhas}</table>
    <p style="color:#949A9D;font-size:12px;margin-top:14px">Enviado pelo formulário do site promessalagodospeixes.com.br</p>
  </div>`

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: REMETENTE,
        to: [DESTINO],
        subject: assunto && String(assunto).slice(0, 120) || 'Mensagem do site',
        html,
      }),
    })
    if (!r.ok) {
      const detalhe = await r.text()
      console.error('Resend falhou:', r.status, detalhe)
      return res.status(502).json({ error: 'falha no envio' })
    }
    return res.status(200).json({ ok: true })
  } catch (e) {
    console.error('Erro no envio:', e)
    return res.status(500).json({ error: 'erro interno' })
  }
}
