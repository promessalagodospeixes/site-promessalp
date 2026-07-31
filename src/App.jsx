import { useEffect, useRef, useState } from 'react'

const WHATS = 'https://wa.me/5521970250597'
const AREA_MEMBROS = 'https://gestao.promessalagodospeixes.com.br'
const INSTA = 'https://instagram.com/promessalagodospeixes'
const EMAIL = 'mailto:iaplagodospeixes@gmail.com'
const REEL = 'https://www.instagram.com/reel/DTGS5N5Dmaf/'
const MAPS_Q = 'https://www.google.com/maps?q=Estrada+Austin-Queimados,+250,+Austin,+Nova+Igua%C3%A7u+-+RJ,+26086-295'

const MINISTERIOS = [
  { n: '01', nome: 'Louvor', desc: 'Adoração que conduz a igreja à presença de Deus, com equipe vocal e instrumental. Liderança do Pr. Gabriel Pereira, com Eclair Campos (instrumental) e Vitória Vicente (vocal).' },
  { n: '02', nome: 'Escola Bíblica', desc: 'Todo sábado às 9h, com classes por faixa etária — da Nave (crianças) à classe de adultos. Palavra ensinada com profundidade e amor.' },
  { n: '03', nome: 'Crianças e Família', desc: 'As crianças aprendem desde cedo a alegria de congregar. Na Escola Bíblica têm classes próprias; no culto, adoramos todos juntos, em família.' },
  { n: '04', nome: 'Jovens e Adolescentes', desc: 'Classes bíblicas próprias, células durante a semana e um encontro mensal para viver a fé com a galera.' },
  { n: '05', nome: 'Mulheres e Homens', desc: 'Encontros, reuniões e visitas — cuidado com os da fé e atenção especial a quem ainda está conhecendo Cristo.' },
  { n: '06', nome: 'Café e Conexão', desc: 'Uma manhã por mês a igreja abre as portas para um café com a comunidade. Proximidade, escuta e acolhimento.' },
  { n: '07', nome: 'Intercessão', desc: 'Orações semanais às terças-feiras, pela igreja e pela vizinhança. Todo pedido de oração é levado a essas reuniões.' },
  { n: '08', nome: 'Sonoplastia e Comunicação', desc: 'Técnica, registros e conteúdo: preparando o ambiente do culto e levando o acolhimento da igreja pelas mídias.' },
]

const HORARIOS = [
  { dia: 'Sábado', hora: '9h', desc: 'Escola Bíblica — classes por idade' },
  { dia: 'Sábado', hora: '10h30', desc: 'Culto da Família — até 12h' },
  { dia: 'Domingo', hora: '18h', desc: 'Culto de Celebração' },
  { dia: 'Na semana', hora: 'Células', desc: 'Nos lares · Oração às terças' },
]

const PASSOS = [
  { n: '01', t: 'Chegue no horário que der', d: 'O culto de sábado começa 10h30 e termina às 12h. Sem traje obrigatório, sem constrangimento.' },
  { n: '02', t: 'Traga sua família toda', d: 'As crianças têm classes por idade na Escola Bíblica; no culto, adoramos todos juntos — em família.' },
  { n: '03', t: 'Templo acessível', d: 'Acesso e banheiros acessíveis. Se precisar de qualquer apoio, fale com a gente antes — a igreja se prepara para você.' },
]

const AGENDA = [
  { q1: 'Terça', q2: '19h30', t: 'Reunião de oração', d: 'Pela igreja e pela vizinhança — todo pedido é levado aqui' },
  { q1: 'Semana', q2: 'Células', t: 'Encontros nos lares', d: 'Grupos pequenos de jovens e famílias — chame no WhatsApp para participar' },
  { q1: 'Mensal', q2: 'Café', t: 'Café e Conexão', d: 'Uma manhã por mês de portas abertas para a comunidade de Austin' },
]

function Historia() {
  return (
    <details className="historia">
      <summary>
        <span>Ler a nossa história completa — 1988 até hoje</span>
        <span className="mais">+</span>
      </summary>
      <div className="hist-corpo">
        <h3>O início</h3>
        <p>Durante a década de 1980, o Presbítero Paulo Roberto Muniz Botelho e sua esposa, Diaconisa Vilma, congregavam na igreja em Austin e exerciam o chamado missionário no Rio de Janeiro e nas cidades vizinhas. Em 1º de janeiro de 1983, haviam iniciado um trabalho em Lages, na casa do Presbítero Norival e da irmã Amélia.</p>
        <p>Cinco anos depois, voltando de Lages, o Presbítero Paulo recebeu de Deus, dentro do trem, a seguinte direção:</p>
        <blockquote>“Vá para a casa da tua mãe, que a minha luz tem que brilhar lá naquele lugar.”</blockquote>
        <p>Naquele mesmo dia, acompanhado do irmão Alcindo, dirigiu-se à casa de seus pais, Celina e José Muniz Botelho, na Rua Sogerim, nº 93. Em 1º de janeiro de 1988, em obediência a essa direção, teve início ali o ponto de pregação da Promessa em Lago dos Peixes.</p>
        <h3>Rua Sogerim, 93 · 1988–1992</h3>
        <p>Ao trabalho recém-iniciado somou-se a família de José Fernando Muniz Botelho, com sua esposa Ana Botelho e as filhas Angélica e Cíntia. O trabalho consolidou-se, alcançou mais de quarenta irmãos e passou a ser assessorado ministerialmente pelo pastor e pelo grupo base da igreja em Austin.</p>
        <p>O primeiro batismo aconteceu em 1988, com o irmão José Muniz e a irmã Celina, pais do Presbítero Paulo. Ao longo desses anos houve batismos no Espírito Santo, avivamentos em subidas ao monte e batismos cerimoniais — além de evangelismos, cultos nos lares e tardes de louvor para levantar recursos para um terreno próprio.</p>
        <h3>Rua Antônio Cunha, 202 · a partir de 1992</h3>
        <p>Em janeiro de 1992, a igreja mudou para um espaço maior, cedido pelo irmão José Fernando. Nesse período, o irmão Luiz Thomé tornou-se o primeiro membro consagrado da igreja, levado ao Diaconato na igreja em Austin. No mesmo ano, de uma visita de amor nasceu também o trabalho em Engenheiro Pedreira.</p>
        <h3>Estrada Austin-Queimados, 250 — o templo</h3>
        <p>Ali foi construído o templo, inaugurado por volta de 1998 — endereço em que permanecemos até hoje.</p>
        <h3>O reconhecimento da data de fundação · 2026</h3>
        <p>Em 27 de junho de 2026, em Assembleia Extraordinária convocada pelo Pastor Gabriel Azeredo Pereira, a igreja refletiu sobre o tema <em>“Onde começa uma igreja?”</em> — a igreja nasce de uma experiência com Deus, e não de um edifício (Atos 2.1-4; Mateus 16.18). Pelo mesmo princípio, a Assembleia Local reconheceu, de forma unânime, a fundação da nossa igreja em 1º de janeiro de 1988.</p>
        <div className="hist-data">
          <div className="g">1º de janeiro de 1988</div>
          <div className="s">Fundação reconhecida em Assembleia Local · 38 anos em 2026</div>
        </div>
        <p className="hist-fontes">Fontes: “Histórico da Promessa Lago dos Peixes” (pesquisa de Rosilene e Eclair, com testemunhos dos pioneiros, 2026) e Ata da Assembleia Extraordinária de 27/06/2026. Consolidação: Pr. Gabriel Azeredo Pereira.</p>
      </div>
    </details>
  )
}

export default function App() {
  const [pixCopiado, setPixCopiado] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const copiarPix = () => {
    try { navigator.clipboard?.writeText('30228769000122') } catch (e) { /* sem clipboard */ }
    setPixCopiado(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setPixCopiado(false), 2400)
  }

  return (
    <>
      <header className="topo">
        <div className="topo-in">
          <a href="#inicio" className="marca">
            <img src="/logo.png" alt="Promessa Lago dos Peixes" />
            <span className="marca-txt">
              <span className="marca-nome">Promessa Lago dos Peixes</span>
              <span className="marca-sub">Austin · Nova Iguaçu / RJ</span>
            </span>
          </a>
          <nav>
            <a href="#novo">Primeira visita</a>
            <a href="#sobre">Quem somos</a>
            <a href="#videos">Vídeos</a>
            <a href="#fotos">Fotos</a>
            <a href="#ministerios">Ministérios</a>
            <a href="#contribua">Contribua</a>
            <a href="#contato">Contato</a>
            <a href={AREA_MEMBROS} target="_blank" rel="noopener noreferrer" className="membros">Área de Membros</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-bg"><img src="/foto-comunidade.jpg" alt="Igreja em oração, uns pelos outros" /></div>
        <div className="hero-in container">
          <div className="hero-badge">
            <span className="ponto"></span>
            <span>Austin · Nova Iguaçu / RJ · desde 1988</span>
          </div>
          <h1>Aqui você não é visita. É <em>esperado</em>.</h1>
          <p className="hero-sub">Somos a Promessa Lago dos Peixes: uma igreja viva, jovem e de portas abertas, que existe para cuidar, amar e priorizar pessoas.</p>
          <div className="hero-cta">
            <a href={WHATS} target="_blank" rel="noopener noreferrer" className="btn-azul">Sou novo aqui — falar no WhatsApp</a>
            <a href="#videos" className="btn-vidro">▶ Ver a igreja por dentro</a>
          </div>
          <div className="hero-horarios">
            {HORARIOS.map((h, i) => (
              <div className="h-item" key={i}>
                <div className="h-dia">{h.dia}</div>
                <div className="h-hora">{h.hora}</div>
                <div className="h-desc">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="novo" className="sec">
        <div className="container duas-col">
          <div className="novo-txt">
            <div className="chapeu">Primeira visita</div>
            <h2 className="titulo">Venha como está. A gente cuida do resto.</h2>
            <p>Ninguém precisa se encaixar num molde para entrar aqui. Se for sua primeira vez, avise a gente no WhatsApp: alguém vai te receber na porta, te apresentar a igreja e sentar com você.</p>
            <div className="novo-botoes">
              <a href={WHATS} target="_blank" rel="noopener noreferrer" className="btn-grafite">Falar com o Pr. Gabriel</a>
              <a href={`${EMAIL}?subject=Pedido%20de%20ora%C3%A7%C3%A3o`} className="btn-ghost">Enviar pedido de oração</a>
            </div>
          </div>
          <div className="passos">
            {PASSOS.map((p) => (
              <div className="passo" key={p.n}>
                <div className="passo-num">{p.n}</div>
                <div>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="sec sec-cinza">
        <div className="blob blob-tr"></div>
        <div className="container">
          <div className="cab-flex">
            <div>
              <div className="chapeu claro">Igreja em movimento</div>
              <h2 className="titulo" style={{ maxWidth: '24ch', marginBottom: 0 }}>Dá uma olhada em como é o nosso domingo — antes de vir.</h2>
            </div>
            <a href={INSTA} target="_blank" rel="noopener noreferrer" className="btn-outline-claro">Ver tudo no Instagram</a>
          </div>
          <div className="videos-grid">
            <a href={REEL} target="_blank" rel="noopener noreferrer" className="video-card video-destaque">
              <img src="/video-poster-1.jpg" alt="Um domingo na Promessa" />
              <div className="scrim"></div>
              <div className="info">
                <span className="video-play">▶</span>
                <div>
                  <div className="video-titulo">Um domingo na Promessa</div>
                  <div className="video-sub">Reel · Instagram @promessalagodospeixes</div>
                </div>
              </div>
            </a>
            <div className="video-col">
              <a href={INSTA} target="_blank" rel="noopener noreferrer" className="video-card video-mini">
                <img src="/video-poster-2.jpg" alt="Louvor ao vivo" />
                <div className="scrim"></div>
                <div className="rotulo">▶ Louvor ao vivo</div>
              </a>
              <a href={INSTA} target="_blank" rel="noopener noreferrer" className="video-card video-mini">
                <img src="/video-poster-3.jpg" alt="Café e Conexão com a comunidade" />
                <div className="scrim"></div>
                <div className="rotulo">▶ Café e Conexão</div>
              </a>
            </div>
          </div>
          <div className="faixa-info">
            <span>Estamos preparando o canal no YouTube para as mensagens completas. Enquanto isso, os trechos saem primeiro no Instagram.</span>
            <a href={INSTA} target="_blank" rel="noopener noreferrer">Seguir @promessalagodospeixes →</a>
          </div>
        </div>
      </section>

      <section id="fotos" className="sec sec-alt">
        <div className="container">
          <div className="chapeu">Nossa gente</div>
          <div className="cab-flex" style={{ marginTop: 14 }}>
            <h2 className="titulo" style={{ margin: 0, maxWidth: '22ch' }}>38 anos de vidas, batismos e comunhão</h2>
            <p className="apoio">Cada foto aqui é de um sábado, de uma célula, de um café com a vizinhança. Igreja é gente.</p>
          </div>
          <div className="galeria">
            <div className="g-larga"><img src="/foto-batismo.jpg" alt="Batismo — vidas nascendo de novo" loading="lazy" /></div>
            <div className="g-quad"><img src="/galeria-1.jpg" alt="Batismo na Promessa Lago dos Peixes" loading="lazy" /></div>
            <div className="g-quad"><img src="/galeria-2.jpg" alt="Igreja reunida em celebração" loading="lazy" /></div>
            <div className="g-quad"><img src="/galeria-3.jpg" alt="Vigília — noite de oração" loading="lazy" /></div>
            <div className="g-quad"><img src="/galeria-4.jpg" alt="Comunhão entre os irmãos" loading="lazy" /></div>
            <div className="g-larga"><img src="/galeria-ampla.jpg" alt="Igreja reunida no templo" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section id="sobre" className="sec">
        <div className="container duas-col" style={{ alignItems: 'start' }}>
          <div className="sobre-txt">
            <div className="chapeu">Quem somos</div>
            <h2 className="titulo">Uma igreja que nasceu de um chamado dentro de um trem.</h2>
            <p className="abertura">Em 1º de janeiro de 1988, o Presbítero Paulo Roberto ouviu de Deus: <em>“vá para a casa da tua mãe, que a minha luz tem que brilhar naquele lugar.”</em> Daquela sala nasceu a nossa igreja. Trinta e oito anos depois, a missão é a mesma.</p>
            <div className="pilares">
              <div className="pilar"><b>Cuidar</b><span>uns dos outros, de perto</span></div>
              <div className="pilar"><b>Amar</b><span>sem exigir molde</span></div>
              <div className="pilar"><b>Priorizar</b><span>pessoas antes de tudo</span></div>
            </div>
            <p className="fe">Cremos em amar a Deus acima de todas as coisas e proclamar a mensagem de Jesus Cristo sob o poder do Espírito Santo. Fazemos parte de uma <a href="https://promessistas.org/" target="_blank" rel="noopener noreferrer">família de igrejas</a> presente em todo o Brasil desde 1932.</p>
            <Historia />
          </div>
          <div className="sobre-lado">
            <div className="retrato"><img src="/foto-batismo.jpg" alt="Batismo na Promessa Lago dos Peixes" loading="lazy" /></div>
            <div className="stats">
              <div className="stat cinza">
                <div className="n">38</div>
                <div className="d">anos de história em Lago dos Peixes</div>
              </div>
              <div className="stat azul">
                <div className="n">150</div>
                <div className="d">pessoas alcançadas: a meta que estamos perseguindo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ministerios" className="sec sec-alt">
        <div className="container">
          <div className="chapeu">Como servimos</div>
          <div className="cab-flex" style={{ marginTop: 14 }}>
            <h2 className="titulo" style={{ margin: 0, maxWidth: '20ch' }}>Cada ministério é um jeito de cuidar</h2>
            <p className="apoio" style={{ maxWidth: '38ch' }}>Dos de dentro e dos de fora. Escolha por onde começar — tem lugar para você em todos.</p>
          </div>
          <div className="min-grid">
            {MINISTERIOS.map((m) => (
              <div className="min-card" key={m.n}>
                <div className="min-head">
                  <span className="min-num">{m.n}</span>
                  <h3>{m.nome}</h3>
                </div>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agenda" className="sec-agenda">
        <div className="container duas-col" style={{ alignItems: 'center' }}>
          <div className="agenda-txt">
            <div className="chapeu">Ritmo da igreja</div>
            <h2 className="titulo">Sempre tem algo acontecendo aqui</h2>
            <p>Além dos cultos, a semana tem célula nos lares, oração às terças e um encontro por mês com a comunidade. A agenda completa é publicada no Instagram.</p>
          </div>
          <div className="agenda-col">
            {AGENDA.map((a, i) => (
              <div className="agenda-item" key={i}>
                <div className="agenda-quando">
                  <div className="q1">{a.q1}</div>
                  <div className="q2">{a.q2}</div>
                </div>
                <div className="agenda-div"></div>
                <div className="agenda-oq"><b>{a.t}</b><span>{a.d}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contribua" className="sec sec-cinza">
        <div className="blob blob-bl"></div>
        <div className="container duas-col" style={{ alignItems: 'center' }}>
          <div className="contribua-txt">
            <div className="chapeu claro">Generosidade</div>
            <h2 className="titulo" style={{ maxWidth: '20ch' }}>Contribua com esta obra</h2>
            <p>Dízimos e ofertas são atos voluntários de amor e adoração. Cada recurso é investido com responsabilidade: no cuidado do templo, nas missões local e externa, no auxílio às necessidades dos irmãos, no apoio à família pastoral e no cuidado de outras igrejas.</p>
          </div>
          <div className="pix-card">
            <div className="pix-rotulo">PIX · CNPJ da igreja</div>
            <div className="pix-chave">30.228.769/0001-22</div>
            <button type="button" className="pix-btn" onClick={copiarPix}>
              {pixCopiado ? 'Chave PIX copiada' : 'Copiar chave PIX'}
            </button>
            <div className="pix-aviso">
              <span className="seta">↗</span>
              <span>Depois de contribuir, envie o comprovante para o WhatsApp da tesouraria — assim o registro da sua contribuição fica certinho.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="sec">
        <div className="container duas-col" style={{ alignItems: 'start' }}>
          <div>
            <div className="chapeu">Venha nos visitar</div>
            <h2 className="titulo" style={{ marginBottom: 22 }}>Onde estamos</h2>
            <div className="contato-cards">
              <div className="card-end">
                <div className="rotulo-mini">Endereço</div>
                <div className="end">Estrada Austin-Queimados, 250</div>
                <div className="cid">Austin, Nova Iguaçu / RJ — CEP 26086-295</div>
                <div className="ref">Mercado do Beto na esquina · ao lado da Águas do Rio · templo e banheiros acessíveis</div>
                <a href={MAPS_Q} target="_blank" rel="noopener noreferrer" className="rota">Abrir rota no Google Maps →</a>
              </div>
              <div className="contato-links">
                <a href={WHATS} target="_blank" rel="noopener noreferrer" className="card-link">
                  <div className="rotulo-mini">WhatsApp do pastor</div>
                  <div className="v">(21) 97025-0597</div>
                </a>
                <a href={EMAIL} className="card-link">
                  <div className="rotulo-mini">E-mail</div>
                  <div className="v">iaplagodospeixes@gmail.com</div>
                </a>
                <a href={INSTA} target="_blank" rel="noopener noreferrer" className="card-link">
                  <div className="rotulo-mini">Redes</div>
                  <div className="v">@promessalagodospeixes</div>
                </a>
              </div>
            </div>
          </div>
          <div className="mapa">
            <iframe
              src="https://www.google.com/maps?q=Estrada+Austin-Queimados,+250,+Austin,+Nova+Igua%C3%A7u+-+RJ,+26086-295&output=embed"
              title="Mapa — Promessa Lago dos Peixes"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="foot-in">
            <div className="foot-marca">
              <img src="/logo.png" alt="Promessa Lago dos Peixes" />
              <p>Cuidar, amar e priorizar pessoas. De portas abertas em Austin, Nova Iguaçu, desde 1º de janeiro de 1988.</p>
            </div>
            <div className="foot-cols">
              <div className="foot-col">
                <div className="t">Site</div>
                <a href="#novo">Primeira visita</a>
                <a href="#sobre">Quem somos</a>
                <a href="#ministerios">Ministérios</a>
                <a href="#contribua">Contribua</a>
              </div>
              <div className="foot-col">
                <div className="t">Links</div>
                <a href={INSTA} target="_blank" rel="noopener noreferrer">Instagram local</a>
                <a href="https://promessistas.org/" target="_blank" rel="noopener noreferrer">Promessistas Brasil</a>
                <a href="https://instagram.com/promessistas" target="_blank" rel="noopener noreferrer">@promessistas</a>
                <a href={AREA_MEMBROS} target="_blank" rel="noopener noreferrer">Área de Membros</a>
              </div>
            </div>
          </div>
          <div className="foot-fim">
            <span>Promessa Lago dos Peixes · CNPJ 30.228.769/0001-22</span>
            <span>Estrada Austin-Queimados, 250 · Austin, Nova Iguaçu / RJ</span>
          </div>
        </div>
      </footer>
    </>
  )
}
