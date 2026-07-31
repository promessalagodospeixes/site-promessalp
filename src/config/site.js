// Configuração central do site — edite links, listas e dados aqui.

export const LINKS = {
  faleConosco: 'https://wa.me/5521970250597?text=' + encodeURIComponent('Olá! Vim pelo site da Promessa Lago dos Peixes.'),
  tesouraria: 'https://wa.me/5521982936289?text=' + encodeURIComponent('Olá! Segue o comprovante da minha contribuição.'),
  instagram: 'https://instagram.com/promessalagodospeixes',
  pregacoes: 'https://instagram.com/promessalagodospeixes',
  email: 'mailto:iaplagodospeixes@gmail.com',
  areaMembros: 'https://gestao.promessalagodospeixes.com.br',
  maps: 'https://www.google.com/maps?q=Estrada+Austin-Queimados,+250,+Austin,+Nova+Igua%C3%A7u+-+RJ,+26086-295',
  mapsEmbed: 'https://www.google.com/maps?q=Estrada+Austin-Queimados,+250,+Austin,+Nova+Igua%C3%A7u+-+RJ,+26086-295&output=embed',
}

// Fotos do carrossel do topo — adicione URLs aqui para entrar na capa.
export const FOTOS_CAPA = ['/foto-comunidade.jpg', '/foto-batismo.jpg']

// Carrossel da família pastoral (4 fotos).
export const FOTOS_FAMILIA = [
  { src: '/foto-comunidade.jpg', alt: 'Família pastoral' },
  { src: '/foto-batismo.jpg', alt: 'Pastor com a igreja no culto' },
  { src: '/galeria-4.jpg', alt: 'Família pastoral numa célula' },
  { src: '/galeria-ampla.jpg', alt: 'Pastor com a comunidade' },
]

export const REELS = [
  { url: 'https://www.instagram.com/reel/DTGS5N5Dmaf/', titulo: 'Um encontro na Promessa', meta: 'Reel · culto de celebração', poster: '/video-poster-1.jpg' },
  { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Louvor ao vivo', meta: 'Reel · equipe de louvor', poster: '/video-poster-2.jpg' },
  { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Café e Conexão', meta: 'Reel · comunidade', poster: '/video-poster-3.jpg' },
  { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Escola Bíblica', meta: 'Reel · sábado, 9h', poster: '/galeria-1.jpg' },
  { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Células nos lares', meta: 'Reel · durante a semana', poster: '/galeria-2.jpg' },
  { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Batismos', meta: 'Reel · vidas transformadas', poster: '/foto-batismo.jpg' },
]

// Pregações: cole aqui o link de cada mensagem (Instagram, YouTube, Drive…)
export const MENSAGENS = [
  { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Onde começa uma igreja?', meta: 'Pr. Gabriel Pereira · Atos 2' },
  { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Cuidar, amar e priorizar pessoas', meta: 'Pr. Gabriel Pereira · série da missão' },
  { url: 'https://instagram.com/promessalagodospeixes', titulo: 'A luz que precisa brilhar naquele lugar', meta: 'Culto da Família · sábado' },
  { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Fé que caminha junto', meta: 'Culto de Celebração · domingo' },
  { url: 'https://instagram.com/promessalagodospeixes', titulo: 'Generosidade que transborda', meta: 'Culto da Família · sábado' },
  { url: 'https://instagram.com/promessalagodospeixes', titulo: 'A igreja que Jesus edifica', meta: 'Mateus 16 · série Atos' },
]

export const MINISTERIOS = [
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
]

export const OPCOES_MINISTERIO = [
  'Louvor', 'Escola Bíblica', 'Crianças e Família', 'Jovens e Adolescentes', 'Mulheres', 'Homens',
  'Café e Conexão', 'Intercessão', 'Sonoplastia e Comunicação', 'Secretaria', 'Tesouraria',
  'Ainda não sei — me ajudem a escolher',
]

export const CELULAS = [
  { nome: 'Célula Lago dos Peixes', publico: 'Famílias', horario: 'Quinta, 19h30', endereco: 'Rua Sogerim, 93 — Lago dos Peixes, Austin', lider: 'Família Botelho', mapa: 'https://www.google.com/maps?q=Rua+Sogerim,+93,+Austin,+Nova+Igua%C3%A7u' },
  { nome: 'Célula Jovens Promessa', publico: 'Jovens', horario: 'Sexta, 20h', endereco: 'Estrada Austin-Queimados, 250 — Austin', lider: 'Liderança de jovens', mapa: 'https://www.google.com/maps?q=Estrada+Austin-Queimados,+250,+Austin,+Nova+Igua%C3%A7u' },
  { nome: 'Célula Antônio Cunha', publico: 'Adultos', horario: 'Quarta, 19h30', endereco: 'Rua Antônio Cunha, 202 — Austin', lider: 'A confirmar', mapa: 'https://www.google.com/maps?q=Rua+Ant%C3%B4nio+Cunha,+202,+Austin,+Nova+Igua%C3%A7u' },
]

export const GALERIA = [
  { src: '/foto-batismo.jpg', alt: 'Batismo — vidas nascendo de novo', larga: true },
  { src: '/galeria-1.jpg', alt: 'Batismo na Promessa Lago dos Peixes' },
  { src: '/galeria-2.jpg', alt: 'Igreja reunida em celebração' },
  { src: '/galeria-3.jpg', alt: 'Vigília — noite de oração' },
  { src: '/galeria-4.jpg', alt: 'Comunhão entre os irmãos' },
  { src: '/galeria-ampla.jpg', alt: 'Igreja reunida no templo', larga: true },
]
