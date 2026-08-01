// Configuração do site. Os PADROES abaixo são usados até o carregamento
// do que foi salvo no editor "Site Público" do sistema de gestão (Supabase).

const SUPABASE_URL = 'https://mynektdohwpzfbmgfunp.supabase.co'
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bmVrdGRvaHdwemZibWdmdW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NTcwMjQsImV4cCI6MjA5NjMzMzAyNH0.mhQIXbVgWkpVxvcOXs80KIoqSphde9juPLlZJJrkOhs'

const zap = (n, msg) => `https://wa.me/${n}?text=${encodeURIComponent(msg)}`

export const PADROES = {
  LINKS: {
    faleConosco: zap('5521970250597', 'Olá! Vim pelo site da Promessa Lago dos Peixes.'),
    tesouraria: zap('5521982936289', 'Olá! Segue o comprovante da minha contribuição.'),
    instagram: 'https://instagram.com/promessalagodospeixes',
    pregacoes: '', // vazio = botão "Ver todas as pregações" fica escondido
    email: 'mailto:iaplagodospeixes@gmail.com',
    areaMembros: 'https://gestao.promessalagodospeixes.com.br',
    maps: 'https://www.google.com/maps?q=Estrada+Austin-Queimados,+250,+Austin,+Nova+Igua%C3%A7u+-+RJ,+26086-295',
    mapsEmbed: 'https://www.google.com/maps?q=Estrada+Austin-Queimados,+250,+Austin,+Nova+Igua%C3%A7u+-+RJ,+26086-295&output=embed',
  },
  TEXTOS: {
    badge: 'Austin · Nova Iguaçu / RJ · desde 1988',
    heroTitulo: 'Aqui você não é visita. É',
    heroDestaque: 'esperado',
    heroSub: 'Somos a Promessa Lago dos Peixes: uma igreja viva, jovem e de portas abertas, que existe para cuidar, amar e priorizar pessoas.',
    novoTitulo: 'Venha como está. Nós iremos caminhar com você.',
    novoTexto: 'Ninguém precisa se encaixar num molde para entrar aqui. Se for sua primeira vez, avise a gente no WhatsApp: alguém vai te receber na porta, te apresentar a igreja e sentar com você.',
    sobreTitulo: 'Uma igreja que nasceu de um chamado dentro de um trem.',
    videosTitulo: 'Conheça um pouco da nossa igreja antes mesmo de vir.',
    mensagensTitulo: 'Pregações para ouvir durante a semana',
    mensagensTexto: 'Publicamos os trechos e as mensagens completas nas redes. Toque em qualquer uma para assistir.',
    fotosTitulo: '38 anos de vidas, batismos e comunhão',
    fotosTexto: 'Cada foto aqui é de um sábado, de uma célula, de um café com a vizinhança. Igreja é gente.',
    pastorNome: 'Pr. Gabriel Azeredo Pereira',
    pastorEsposa: 'Pâmela Pereira',
    pastorFilhos: 'Gabriel Filho, Nicolas e Zoe',
    pastorBio1: 'Pastor da Promessa Lago dos Peixes. Conduz a igreja no ensino da Palavra e no louvor, e caminha de perto com cada família — do primeiro café ao batismo. A porta da casa pastoral está aberta para conversar, orar e ouvir.',
    pastorBio2: 'A família pastoral vive a igreja junto com a igreja: no culto, na célula, na visita e no café da esquina.',
    contribuaTexto: 'Dízimos e ofertas são atos voluntários de amor e adoração. Cada recurso é investido com responsabilidade: no cuidado do templo, nas missões local e externa, no auxílio às necessidades dos irmãos, no apoio à família pastoral e no cuidado de outras igrejas.',
    pixExibicao: '30.228.769/0001-22',
    pixCopia: '30228769000122',
    endereco: 'Estrada Austin-Queimados, 250',
    cidade: 'Austin, Nova Iguaçu / RJ — CEP 26086-295',
    referencia: 'Referência: Mercado do Beto na esquina, ao lado da Águas do Rio.',
  },
  HORARIOS: [
    { dia: 'Sábado', hora: '9h', desc: 'Escola Bíblica' },
    { dia: 'Sábado', hora: '10h30', desc: 'Culto da Família' },
    { dia: 'Domingo', hora: '18h', desc: 'Culto de Celebração' },
    { dia: 'Terça', hora: '19h30', desc: 'Reunião de oração' },
  ],
  FOTOS_CAPA: ['/foto-comunidade.jpg', '/foto-batismo.jpg'],
  FOTOS_FAMILIA: [
    { src: '/foto-comunidade.jpg', alt: 'Família pastoral' },
    { src: '/foto-batismo.jpg', alt: 'Pastor com a igreja no culto' },
    { src: '/galeria-4.jpg', alt: 'Família pastoral numa célula' },
    { src: '/galeria-ampla.jpg', alt: 'Pastor com a comunidade' },
  ],
  REELS: [
    { url: 'https://www.instagram.com/reel/DTGS5N5Dmaf/', titulo: 'Um encontro na Promessa', meta: 'Reel · culto de celebração', poster: '/video-poster-1.jpg' },
    { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Louvor ao vivo', meta: 'Reel · equipe de louvor', poster: '/video-poster-2.jpg' },
    { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Café e Conexão', meta: 'Reel · comunidade', poster: '/video-poster-3.jpg' },
    { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Escola Bíblica', meta: 'Reel · sábado, 9h', poster: '/galeria-1.jpg' },
    { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Células nos lares', meta: 'Reel · durante a semana', poster: '/galeria-2.jpg' },
    { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Batismos', meta: 'Reel · vidas transformadas', poster: '/foto-batismo.jpg' },
  ],
  MENSAGENS: [
    { url: '', titulo: 'Onde começa uma igreja?', meta: 'Pr. Gabriel Pereira · Atos 2' },
    { url: '', titulo: 'Cuidar, amar e priorizar pessoas', meta: 'Pr. Gabriel Pereira · série da missão' },
    { url: '', titulo: 'A luz que precisa brilhar naquele lugar', meta: 'Culto da Família · sábado' },
  ],
  CELULAS: [
    { nome: 'Célula Lago dos Peixes', publico: 'Famílias', horario: 'Quinta, 19h30', endereco: 'Rua Sogerim, 93 — Lago dos Peixes, Austin', lider: 'Família Botelho', mapa: 'https://www.google.com/maps?q=Rua+Sogerim,+93,+Austin,+Nova+Igua%C3%A7u' },
    { nome: 'Célula Jovens Promessa', publico: 'Jovens', horario: 'Sexta, 20h', endereco: 'Estrada Austin-Queimados, 250 — Austin', lider: 'Liderança de jovens', mapa: 'https://www.google.com/maps?q=Estrada+Austin-Queimados,+250,+Austin,+Nova+Igua%C3%A7u' },
    { nome: 'Célula Antônio Cunha', publico: 'Adultos', horario: 'Quarta, 19h30', endereco: 'Rua Antônio Cunha, 202 — Austin', lider: 'A confirmar', mapa: 'https://www.google.com/maps?q=Rua+Ant%C3%B4nio+Cunha,+202,+Austin,+Nova+Igua%C3%A7u' },
  ],
  GALERIA: [
    { src: '/foto-batismo.jpg', alt: 'Batismo — vidas nascendo de novo', larga: true },
    { src: '/galeria-1.jpg', alt: 'Batismo na Promessa Lago dos Peixes' },
    { src: '/galeria-2.jpg', alt: 'Igreja reunida em celebração' },
    { src: '/galeria-3.jpg', alt: 'Vigília — noite de oração' },
    { src: '/galeria-4.jpg', alt: 'Comunhão entre os irmãos' },
    { src: '/galeria-ampla.jpg', alt: 'Igreja reunida no templo', larga: true },
  ],
  MINISTERIOS: [
    { n: '01', nome: 'Louvor', lider: 'Eclair Campos e Vitória Vicente', desc: 'Adoração que conduz a igreja à presença de Deus, com equipe vocal e instrumental. Liderança do Pr. Gabriel Pereira, com Eclair Campos (instrumental) e Vitória Vicente (vocal).' },
    { n: '02', nome: 'Escola Bíblica', lider: 'Rosilene e equipe de professores', desc: 'Todo sábado às 9h, com classes por faixa etária — da Nave (crianças) à classe de adultos. Palavra ensinada com profundidade e amor.' },
    { n: '03', nome: 'Crianças e Família', lider: 'Equipe da Nave', desc: 'As crianças aprendem desde cedo a alegria de congregar. Na Escola Bíblica têm classes próprias; no culto, adoramos todos juntos, em família.' },
    { n: '04', nome: 'Jovens e Adolescentes', lider: 'Liderança de jovens', desc: 'Classes bíblicas próprias, células durante a semana e um encontro mensal para viver a fé com a galera.' },
    { n: '05', nome: 'Mulheres e Homens', lider: 'Liderança dos departamentos', desc: 'Encontros, reuniões e visitas — cuidado com os da fé e atenção especial a quem ainda está conhecendo Cristo.' },
    { n: '06', nome: 'Café e Conexão', lider: 'Equipe de acolhimento', desc: 'Uma manhã por mês a igreja abre as portas para um café com a comunidade de Lago dos Peixes, em Austin. Proximidade, escuta e acolhimento.' },
    { n: '07', nome: 'Intercessão', lider: 'Equipe de oração', desc: 'Orações semanais às terças-feiras, pela igreja e pela vizinhança. Todo pedido de oração é levado a essas reuniões.' },
    { n: '08', nome: 'Sonoplastia e Comunicação', lider: 'Equipe de comunicação', desc: 'Técnica, registros e conteúdo: preparando o ambiente do culto e levando o acolhimento da igreja pelas mídias.' },
    { n: '09', nome: 'Secretaria', lider: 'Secretaria da igreja', desc: 'Cuida dos registros, das atas e do cadastro dos membros — a memória e a organização da igreja em dia.' },
    { n: '10', nome: 'Tesouraria', lider: 'Tesouraria da igreja', desc: 'Administra dízimos, ofertas e o cuidado com o templo, com transparência e prestação de contas.' },
  ],
}

export const OPCOES_MINISTERIO_EXTRA = ['Ainda não sei — me ajudem a escolher']

// Busca o que foi salvo no editor do sistema de gestão e mescla nos padrões.
export async function carregarConfig() {
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/site_config?id=eq.1&select=config`, {
      headers: { apikey: SUPABASE_ANON, Authorization: `Bearer ${SUPABASE_ANON}` },
    })
    if (!r.ok) return PADROES
    const [linha] = await r.json()
    const c = linha?.config
    if (!c || typeof c !== 'object') return PADROES

    const out = { ...PADROES }
    const l = c.links || {}
    out.LINKS = {
      ...PADROES.LINKS,
      ...(l.whatsPastor ? { faleConosco: zap(l.whatsPastor, 'Olá! Vim pelo site da Promessa Lago dos Peixes.') } : {}),
      ...(l.whatsTesouraria ? { tesouraria: zap(l.whatsTesouraria, 'Olá! Segue o comprovante da minha contribuição.') } : {}),
      ...(l.instagram ? { instagram: l.instagram } : {}),
      pregacoes: l.pregacoes || '',
      ...(l.email ? { email: `mailto:${l.email}` } : {}),
    }
    out.TEXTOS = { ...PADROES.TEXTOS }
    if (c.textos && typeof c.textos === 'object') {
      for (const [k, v] of Object.entries(c.textos)) {
        if (typeof v === 'string' && v.trim()) out.TEXTOS[k] = v
      }
    }
    if (Array.isArray(c.horarios) && c.horarios.length) out.HORARIOS = c.horarios.filter((h) => h.dia || h.hora)
    if (Array.isArray(c.fotosCapa) && c.fotosCapa.length) out.FOTOS_CAPA = c.fotosCapa
    if (Array.isArray(c.familia) && c.familia.length) {
      out.FOTOS_FAMILIA = c.familia.map((src, i) => ({ src, alt: `Família pastoral — foto ${i + 1}` }))
    }
    if (Array.isArray(c.galeria) && c.galeria.length) {
      out.GALERIA = c.galeria.map((src, i) => ({
        src, alt: 'Promessa Lago dos Peixes', larga: i === 0 || i === c.galeria.length - 1,
      }))
    }
    if (Array.isArray(c.reels) && c.reels.length) {
      out.REELS = c.reels.filter((r2) => r2.titulo || r2.url).map((r2) => ({
        url: r2.url || out.LINKS.instagram, titulo: r2.titulo || 'Reel', meta: r2.meta || '', poster: r2.poster || '',
      }))
    }
    if (Array.isArray(c.mensagens) && c.mensagens.length) {
      out.MENSAGENS = c.mensagens.filter((m) => m.titulo).map((m) => ({
        url: m.url || '', titulo: m.titulo, meta: m.meta || '',
      }))
    }
    if (Array.isArray(c.celulas) && c.celulas.length) {
      out.CELULAS = c.celulas.filter((ce) => ce.nome).map((ce) => ({
        ...ce,
        mapa: ce.mapa || `https://www.google.com/maps?q=${encodeURIComponent(ce.endereco || 'Austin, Nova Iguaçu')}`,
      }))
    }
    if (Array.isArray(c.ministerios) && c.ministerios.length) {
      out.MINISTERIOS = c.ministerios.filter((m) => m.nome).map((m, i) => ({
        n: String(i + 1).padStart(2, '0'), nome: m.nome, lider: m.lider || '', desc: m.desc || '',
      }))
    }
    return out
  } catch (e) {
    return PADROES
  }
}
