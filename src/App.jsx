import { useEffect, useRef, useState } from 'react'
import { PADROES, carregarConfig, carregarEventos, OPCOES_MINISTERIO_EXTRA } from './config/site.js'

const MESES_A = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
const DIAS_SEM = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']

const NAV = [
  ['#novo', 'Primeira visita'],
  ['#sobre', 'Quem somos'],
  ['#videos', 'Vídeos'],
  ['#fotos', 'Fotos'],
  ['#lideres', 'Liderança'],
  ['#mensagens', 'Mensagens'],
  ['#ministerios', 'Ministérios'],
  ['#participe', 'Participe'],
  ['#contribua', 'Contribua'],
  ['#contato', 'Contato'],
]

const NAV_MOBILE = [
  ['#novo', 'Primeira visita'],
  ['#sobre', 'Quem somos'],
  ['#videos', 'Vídeos'],
  ['#fotos', 'Fotos'],
  ['#lideres', 'Liderança'],
  ['#mensagens', 'Mensagens'],
  ['#ministerios', 'Ministérios'],
  ['#celulas', 'Células'],
  ['#participe', 'Participe'],
  ['#contribua', 'Contribua'],
  ['#contato', 'Contato'],
]

const ASSUNTOS = {
  ministerio: 'Site — candidatura a ministério',
  celula: 'Site — cadastro de célula',
  oracao: 'Site — pedido de oração',
}

const ABAS = [
  { k: 'ministerio', rotulo: 'Quero servir' },
  { k: 'oracao', rotulo: 'Pedido de oração' },
]

function iniciais(nome) {
  return (nome || '?').split(/\s+e\s+|\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase()
}

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
  const [S, setS] = useState(PADROES)
  const [pixCopiado, setPixCopiado] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)
  const [capa, setCapa] = useState(0)
  const [familia, setFamilia] = useState(0)
  const [aba, setAba] = useState('ministerio')
  const [envio, setEnvio] = useState('')
  const [fotoAberta, setFotoAberta] = useState(null)
  const [sobreIdx, setSobreIdx] = useState(0)
  const [eventos, setEventos] = useState([])
  const refEventos = useRef(null)
  const refMsgs = useRef(null)
  const pixTimer = useRef(null)
  const capaTimer = useRef(null)
  const refReels = useRef(null)
  const refFotos = useRef(null)

  const T = S.TEXTOS

  useEffect(() => {
    carregarConfig().then(setS)
    carregarEventos().then(setEventos)
    return () => clearTimeout(pixTimer.current)
  }, [])

  useEffect(() => {
    capaTimer.current = setInterval(() => setCapa((c) => (c + 1) % S.FOTOS_CAPA.length), 6500)
    return () => clearInterval(capaTimer.current)
  }, [S])

  const abrirAba = (k) => { setAba(k); setEnvio(''); setMenuAberto(false) }

  const irCapa = (i) => {
    clearInterval(capaTimer.current)
    setCapa(((i % S.FOTOS_CAPA.length) + S.FOTOS_CAPA.length) % S.FOTOS_CAPA.length)
  }
  const irFamilia = (i) => setFamilia(((i % S.FOTOS_FAMILIA.length) + S.FOTOS_FAMILIA.length) % S.FOTOS_FAMILIA.length)
  const irSobre = (i) => setSobreIdx(((i % S.FOTOS_SOBRE.length) + S.FOTOS_SOBRE.length) % S.FOTOS_SOBRE.length)
  const rolarReels = (dir) => {
    const el = refReels.current
    if (el) el.scrollBy({ left: dir * Math.max(240, el.clientWidth * 0.7), behavior: 'smooth' })
  }
  const rolarMsgs = (dir) => {
    const el = refMsgs.current
    if (el) el.scrollBy({ left: dir * Math.max(240, el.clientWidth * 0.7), behavior: 'smooth' })
  }
  const rolarEventos = (dir) => {
    const el = refEventos.current
    if (el) el.scrollBy({ left: dir * Math.max(240, el.clientWidth * 0.7), behavior: 'smooth' })
  }
  const rolarFotos = (dir) => {
    const el = refFotos.current
    if (el) el.scrollBy({ left: dir * Math.max(200, el.clientWidth * 0.7), behavior: 'smooth' })
  }
  const navegarFoto = (delta) => setFotoAberta((i) => {
    const n = S.GALERIA.length
    return ((i + delta) % n + n) % n
  })
  const copiarPix = () => {
    try { navigator.clipboard?.writeText(T.pixCopia) } catch (e) { /* sem clipboard */ }
    setPixCopiado(true)
    clearTimeout(pixTimer.current)
    pixTimer.current = setTimeout(() => setPixCopiado(false), 2400)
  }

  const enviarForm = async (e) => {
    e.preventDefault()
    const form = e.target
    const dados = Object.fromEntries(new FormData(form).entries())
    if (dados._gotcha) return
    delete dados._gotcha
    setEnvio('enviando')
    try {
      const r = await fetch('/api/participe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo: aba, assunto: ASSUNTOS[aba], campos: dados }),
      })
      if (!r.ok) throw new Error('falha')
      setEnvio('ok')
      form.reset()
    } catch (err) {
      setEnvio('erro')
    }
  }

  const inp = (label, props = {}) => (
    <label className="campo">
      <span>{label}</span>
      <input {...props} />
    </label>
  )

  const opcoesMinisterio = [...S.MINISTERIOS.map((m) => m.nome), ...OPCOES_MINISTERIO_EXTRA]

  return (
    <>
      <header className="topo">
        <div className="topo-in headRow">
          <a href="#inicio" className="marca">
            <img src="/logo.png" alt="Promessa Lago dos Peixes" />
            <span className="marca-txt">
              <span className="marca-nome brandName">Promessa Lago dos Peixes</span>
              <span className="marca-sub brandSub">Austin · Nova Iguaçu / RJ</span>
            </span>
          </a>
          <button
            className="navBurger"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto((v) => !v)}
          >
            <span></span><span></span><span className="curta"></span>
          </button>
          <nav className="navDesk">
            {NAV.map(([href, rotulo]) => <a key={href} href={href}>{rotulo}</a>)}
            <a href={S.LINKS.areaMembros} target="_blank" rel="noopener noreferrer" className="membros">Área de Membros</a>
          </nav>
        </div>
        {menuAberto && (
          <nav className="drawer">
            <div className="drawer-in">
              {NAV_MOBILE.map(([href, rotulo]) => (
                <a key={href} href={href} onClick={() => setMenuAberto(false)}>{rotulo}</a>
              ))}
              <div className="drawer-ctas">
                <a href={S.LINKS.faleConosco} target="_blank" rel="noopener noreferrer" onClick={() => setMenuAberto(false)} className="cta-azul">Falar no WhatsApp</a>
                <a href={S.LINKS.areaMembros} target="_blank" rel="noopener noreferrer" onClick={() => setMenuAberto(false)} className="cta-grafite">Área de Membros</a>
              </div>
            </div>
          </nav>
        )}
      </header>

      <section id="inicio" className="hero">
        <div className="hero-camadas">
          {S.FOTOS_CAPA.map((f, i) => (
            <div
              key={(f.src || f) + i}
              className="hero-camada"
              style={{
                backgroundImage: `url("${f.src || f}")`,
                backgroundPosition: { topo: 'center top', base: 'center bottom' }[f.pos] || 'center 38%',
                opacity: i === capa ? 1 : 0,
              }}
            ></div>
          ))}
        </div>
        <div className="hero-scrim"></div>
        <div className="hero-in container">
          <div className="hero-badge">
            <span className="ponto"></span>
            <span>{T.badge}</span>
          </div>
          <h1>{T.heroTitulo} <em>{T.heroDestaque}</em>.</h1>
          <p className="hero-sub">{T.heroSub}</p>
          <div className="hero-cta">
            <a href={S.LINKS.faleConosco} target="_blank" rel="noopener noreferrer" className="btn-azul">Sou novo aqui — falar no WhatsApp</a>
            <a href="#videos" className="btn-vidro">▶ Ver a igreja por dentro</a>
          </div>
          <div className="hero-base">
            <div className="hero-horarios">
              {S.HORARIOS.map((h, i) => (
                <div className="h-item" key={i}>
                  <div className="h-dia">{h.dia}</div>
                  <div className="h-hora">{h.hora}</div>
                  <div className="h-desc">{h.desc}</div>
                </div>
              ))}
              <div className="h-item">
                <div className="h-dia">Na semana</div>
                <div className="h-hora">Células</div>
                <div className="h-desc"><a href="#celulas">a mais próxima →</a></div>
              </div>
            </div>
            <div className="hero-controles">
              <button onClick={() => irCapa(capa - 1)} aria-label="Foto anterior">‹</button>
              <div className="pontos">
                {S.FOTOS_CAPA.map((_, i) => (
                  <button key={i} onClick={() => irCapa(i)} aria-label="Ver foto de capa" className={i === capa ? 'ativo' : ''}></button>
                ))}
              </div>
              <button onClick={() => irCapa(capa + 1)} aria-label="Próxima foto">›</button>
            </div>
          </div>
        </div>
      </section>

      <section id="novo" className="sec">
        <div className="container duas-col">
          <div>
            <div className="chapeu">Primeira visita</div>
            <h2 className="titulo">{T.novoTitulo}</h2>
            <p className="par-grande">{T.novoTexto}</p>
            <div className="botoes">
              <a href={S.LINKS.faleConosco} target="_blank" rel="noopener noreferrer" className="btn-grafite">Fale conosco</a>
              <a href="#participe" onClick={() => abrirAba('oracao')} className="btn-ghost">Enviar pedido de oração</a>
            </div>
          </div>
          <div className="passos">
            <div className="passo">
              <div className="passo-num">01</div>
              <div>
                <h3>Chegue no horário que der</h3>
                <p>O culto de sábado começa 10h30 e termina às 12h. Sem traje obrigatório, sem constrangimento.</p>
              </div>
            </div>
            <div className="passo">
              <div className="passo-num">02</div>
              <div>
                <h3>Traga sua família toda</h3>
                <p>As crianças têm classes por idade na Escola Bíblica; no culto, adoramos todos juntos — em família.</p>
              </div>
            </div>
            <div className="passo">
              <div className="passo-num">03</div>
              <div>
                <h3>Estrutura pensada para todos</h3>
                <p>Entrada e banheiros acessíveis. Se precisar de qualquer apoio, avise antes — a igreja se prepara para receber você.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="videos" className="sec sec-cinza">
        <div className="blob blob-tr"></div>
        <div className="container pos">
          <div className="cab-flex">
            <div>
              <div className="chapeu claro">Igreja em movimento</div>
              <h2 className="titulo" style={{ maxWidth: '24ch', marginBottom: 0 }}>{T.videosTitulo}</h2>
            </div>
            <a href={S.LINKS.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline-claro">Ver tudo no Instagram</a>
          </div>
          <div className="reels-barra">
            <div className="reels-dica">
              <span className="ponto-claro"></span>
              Últimos reels · arraste para o lado
            </div>
            <div className="reels-setas">
              <button onClick={() => rolarReels(-1)} aria-label="Voltar">‹</button>
              <button onClick={() => rolarReels(1)} aria-label="Avançar">›</button>
            </div>
          </div>
          <div className="trilhaReels" ref={refReels}>
            {S.REELS.map((r, i) => (
              <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="reel-card">
                {r.poster && <img src={r.poster} alt={r.titulo} loading="lazy" />}
                <div className="scrim"></div>
                <span className="play">▶</span>
                <div className="rodape">
                  <div className="t">{r.titulo}</div>
                  <div className="m">{r.meta}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="mensagens" className="sec">
        <div className="container">
          <div className="cab-flex">
            <div>
              <div className="chapeu">Mensagens</div>
              <h2 className="titulo" style={{ maxWidth: '22ch' }}>{T.mensagensTitulo}</h2>
              <p className="apoio" style={{ maxWidth: '46ch' }}>{T.mensagensTexto}</p>
            </div>
            {S.LINKS.pregacoes && (
              <a href={S.LINKS.pregacoes} target="_blank" rel="noopener noreferrer" className="btn-ghost">Ver todas as pregações</a>
            )}
          </div>
          <div className="msgs-barra">
            <span className="fotos-dica">Arraste para o lado ou use as setas</span>
            <div className="fotos-setas">
              <button onClick={() => rolarMsgs(-1)} aria-label="Voltar">‹</button>
              <button onClick={() => rolarMsgs(1)} aria-label="Avançar">›</button>
            </div>
          </div>
          <div className="trilhaReels trilhaMsgs" ref={refMsgs}>
            {S.MENSAGENS.map((m, i) => {
              const corpo = (
                <>
                  {m.capa && <img src={m.capa} alt={m.titulo} loading="lazy" />}
                  <div className="scrim"></div>
                  <span className="play">▶</span>
                  <div className="rodape">
                    <div className="t">{m.titulo}</div>
                    <div className="m">{m.meta}</div>
                  </div>
                </>
              )
              return m.url
                ? <a key={i} href={m.url} target="_blank" rel="noopener noreferrer" className="reel-card msg-reel">{corpo}</a>
                : <div key={i} className="reel-card msg-reel msg-sem-link">{corpo}</div>
            })}
          </div>
          <div className="faixa-denominacao">
            <span>Recursos da nossa denominação para estudar durante a semana:</span>
            <a href="https://www.youtube.com/@tvvivapromessa" target="_blank" rel="noopener noreferrer">TV Viva Promessa</a>
            <a href="https://promessistas.org/lb356/" target="_blank" rel="noopener noreferrer">Lições Bíblicas</a>
            <a href="https://promessistas.org/noticias/" target="_blank" rel="noopener noreferrer">Notícias</a>
          </div>
        </div>
      </section>

      <section id="fotos" className="sec sec-alt">
        <div className="container">
          <div className="chapeu">Nossa gente</div>
          <div className="cab-flex" style={{ marginTop: 14 }}>
            <h2 className="titulo" style={{ margin: 0, maxWidth: '22ch' }}>{T.fotosTitulo}</h2>
            <p className="apoio">{T.fotosTexto}</p>
          </div>
          {S.GALERIA[0] && (
            <button type="button" className="galeria-destaque" onClick={() => setFotoAberta(0)}>
              <img src={S.GALERIA[0].src} alt={S.GALERIA[0].alt} loading="lazy" />
            </button>
          )}
          {S.GALERIA.length > 1 && (
            <>
              <div className="fotos-barra">
                <span className="fotos-dica">Toque numa foto para ampliar</span>
                <div className="fotos-setas">
                  <button onClick={() => rolarFotos(-1)} aria-label="Voltar">‹</button>
                  <button onClick={() => rolarFotos(1)} aria-label="Avançar">›</button>
                </div>
              </div>
              <div className="trilhaFotos" ref={refFotos}>
                {S.GALERIA.slice(1).map((f, i) => (
                  <button type="button" key={i} className="foto-thumb" onClick={() => setFotoAberta(i + 1)}>
                    <img src={f.src} alt={f.alt} loading="lazy" />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section id="sobre" className="sec">
        <div className="container duas-col topo-alinhado">
          <div>
            <div className="chapeu">Quem somos</div>
            <h2 className="titulo">{T.sobreTitulo}</h2>
            <p className="par-grande">Em 1º de janeiro de 1988, o Presbítero Paulo Roberto ouviu de Deus: <em className="citacao">“vá para a casa da tua mãe, que a minha luz tem que brilhar naquele lugar.”</em> Daquela sala nasceu a nossa igreja. Trinta e oito anos depois, a missão é a mesma.</p>
            <div className="pilares">
              <div className="pilar"><b>Cuidar</b><span>uns dos outros, de perto</span></div>
              <div className="pilar"><b>Amar</b><span>sem exigir molde</span></div>
              <div className="pilar"><b>Priorizar</b><span>pessoas antes de tudo</span></div>
            </div>
            <p className="fe">Cremos em amar a Deus acima de todas as coisas e proclamar a mensagem de Jesus Cristo sob o poder do Espírito Santo. Fazemos parte de uma <a href="https://promessistas.org/" target="_blank" rel="noopener noreferrer">família de igrejas</a> presente em todo o Brasil desde 1932.</p>
            <Historia />
          </div>
          <div className="sobre-lado">
            <div className="familia-carrossel retrato-carrossel">
              {S.FOTOS_SOBRE.map((f, i) => (
                <div key={i} className="familia-foto" style={{ opacity: i === sobreIdx ? 1 : 0, pointerEvents: i === sobreIdx ? 'auto' : 'none' }}>
                  <img src={f.src} alt="Promessa Lago dos Peixes" loading="lazy" style={{ objectPosition: { topo: 'center top', base: 'center bottom' }[f.pos] || 'center' }} />
                </div>
              ))}
              {S.FOTOS_SOBRE.length > 1 && (
                <div className="familia-controles">
                  <div className="pontos">
                    {S.FOTOS_SOBRE.map((_, i) => (
                      <button key={i} onClick={() => irSobre(i)} aria-label="Ver foto" className={i === sobreIdx ? 'ativo' : ''}></button>
                    ))}
                  </div>
                  <div className="setas">
                    <button onClick={() => irSobre(sobreIdx - 1)} aria-label="Foto anterior">‹</button>
                    <button onClick={() => irSobre(sobreIdx + 1)} aria-label="Próxima foto">›</button>
                  </div>
                </div>
              )}
            </div>
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

      <section id="lideres" className="sec sec-alt">
        <div className="container">
          <div className="chapeu">Conheça nossos líderes</div>
          <div className="cab-flex" style={{ marginTop: 14 }}>
            <h2 className="titulo" style={{ margin: 0, maxWidth: '20ch' }}>Quem caminha com você aqui</h2>
            <p className="apoio">Gente de verdade, com nome e rosto. Se precisar de qualquer coisa, procure qualquer um deles no sábado.</p>
          </div>
          <div className="lideres-grid">
            <div className="familia-carrossel">
              {S.FOTOS_FAMILIA.map((f, i) => (
                <div key={i} className="familia-foto" style={{ opacity: i === familia ? 1 : 0, pointerEvents: i === familia ? 'auto' : 'none' }}>
                  <img src={f.src} alt={f.alt} loading="lazy" style={{ objectPosition: { topo: 'center top', base: 'center bottom' }[f.pos] || 'center' }} />
                </div>
              ))}
              <div className="familia-controles">
                <div className="pontos">
                  {S.FOTOS_FAMILIA.map((_, i) => (
                    <button key={i} onClick={() => irFamilia(i)} aria-label="Ver foto da família pastoral" className={i === familia ? 'ativo' : ''}></button>
                  ))}
                </div>
                <div className="setas">
                  <button onClick={() => irFamilia(familia - 1)} aria-label="Foto anterior">‹</button>
                  <button onClick={() => irFamilia(familia + 1)} aria-label="Próxima foto">›</button>
                </div>
              </div>
            </div>
            <div>
              <div className="mini-chapeu">Família pastoral</div>
              <h3 className="nome-pastor">{T.pastorNome}</h3>
              <div className="selos">
                <span className="selo"><b>Esposa</b>{T.pastorEsposa}</span>
                <span className="selo"><b>Filhos</b>{T.pastorFilhos}</span>
              </div>
              <p>{T.pastorBio1}</p>
              <p style={{ marginTop: 14 }}>{T.pastorBio2}</p>
              <a href={S.LINKS.faleConosco} target="_blank" rel="noopener noreferrer" className="btn-azul" style={{ marginTop: 22 }}>Conversar com o pastor</a>
            </div>
          </div>
        </div>
      </section>

      <section id="ministerios" className="sec">
        <div className="container">
          <div className="chapeu">Como servimos</div>
          <div className="cab-flex" style={{ marginTop: 14 }}>
            <h2 className="titulo" style={{ margin: 0, maxWidth: '20ch' }}>Cada ministério é um jeito de cuidar</h2>
            <p className="apoio" style={{ maxWidth: '38ch' }}>Dos de dentro e dos de fora. Escolha por onde começar — tem lugar para você em todos.</p>
          </div>
          <div className="min-grid">
            {S.MINISTERIOS.map((m) => (
              <div className="min-card" key={m.n + m.nome}>
                <div className="min-head">
                  <span className="min-num">{m.n}</span>
                  <h3>{m.nome}</h3>
                </div>
                <p>{m.desc}</p>
                {m.lider && (
                  <div className="min-lider">
                    {m.foto
                      ? <span className="avatar avatar-foto"><img src={m.foto} alt={m.lider} loading="lazy" /></span>
                      : <span className="avatar">{iniciais(m.lider)}</span>}
                    <span className="quem">
                      <span className="rot">Liderança</span>
                      <span className="nm">{m.lider}</span>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div id="faca-parte" className="faca-parte">
            <div>
              <div className="chapeu">Faça parte</div>
              <h3>Tem um lugar guardado para você servir</h3>
              <p>Não precisa ter experiência nem talento pronto — precisa querer. Preencha o cadastro dizendo com o que você gostaria de ajudar e a liderança do ministério entra em contato com você.</p>
            </div>
            <div className="fp-botoes">
              <a href="#participe" onClick={() => abrirAba('ministerio')} className="fp-azul"><span>Quero me candidatar a um ministério</span><span>→</span></a>
              <a href="#celulas" className="fp-claro"><span>Ver as células e participar</span><span>→</span></a>
              <a href={S.LINKS.faleConosco} target="_blank" rel="noopener noreferrer" className="fp-ghost"><span>Prefiro falar com alguém antes</span><span>→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section id="agenda" className="sec-agenda sec-alt">
        <div className="container duas-col centro-alinhado">
          <div>
            <div className="chapeu">Ritmo da igreja</div>
            <h2 className="titulo agenda-titulo">Sempre tem algo acontecendo aqui</h2>
            <p className="par-medio">Além dos cultos, a semana tem célula nos lares, oração às terças e um encontro por mês com a comunidade. A agenda completa é publicada no Instagram.</p>
          </div>
          <div className="agenda-col">
            <div className="agenda-item">
              <div className="agenda-quando"><div className="q1">Terça</div><div className="q2">19h30</div></div>
              <div className="agenda-div"></div>
              <div className="agenda-oq"><b>Reunião de oração</b><span>Pela igreja e pela vizinhança — todo pedido é levado aqui</span></div>
            </div>
            <div className="agenda-item">
              <div className="agenda-quando"><div className="q1">Semana</div><div className="q2">Células</div></div>
              <div className="agenda-div"></div>
              <div className="agenda-oq">
                <b>Encontros nos lares</b>
                <span>Adultos, jovens e crianças reunidos toda semana para compartilhar a vida e aprender mais sobre Jesus.</span>
                <a href="#celulas">Conheça nossas células →</a>
              </div>
            </div>
            <div className="agenda-item">
              <div className="agenda-quando"><div className="q1">Mensal</div><div className="q2">Café</div></div>
              <div className="agenda-div"></div>
              <div className="agenda-oq"><b>Café e Conexão</b><span>Uma manhã por mês de portas abertas para a comunidade de Lago dos Peixes, em Austin</span></div>
            </div>
          </div>
        </div>
      </section>

      {eventos.length > 0 && (
        <section id="eventos" className="sec">
          <div className="container">
            <div className="cab-flex">
              <div>
                <div className="chapeu">Conheça nossa agenda</div>
                <h2 className="titulo" style={{ maxWidth: '22ch', marginBottom: 0 }}>O que vem por aí na Promessa</h2>
              </div>
              <div className="fotos-setas">
                <button onClick={() => rolarEventos(-1)} aria-label="Voltar">‹</button>
                <button onClick={() => rolarEventos(1)} aria-label="Avançar">›</button>
              </div>
            </div>
            <div className="trilhaEventos" ref={refEventos}>
              {eventos.map((ev, i) => {
                const d = new Date(ev.data + 'T00:00:00')
                const dataTxt = `${String(d.getDate()).padStart(2, '0')} ${MESES_A[d.getMonth()]}`
                const corpo = ev.capa ? (
                  <>
                    <img src={ev.capa} alt={ev.titulo} loading="lazy" />
                    <div className="scrim"></div>
                    <div className="ev-sobre-foto">
                      <div className="ev-data-pill">{dataTxt}{ev.hora ? ` · ${ev.hora}` : ''}</div>
                      <div className="ev-titulo">{ev.titulo}</div>
                      {ev.ministerio && <div className="ev-min">{ev.ministerio}</div>}
                    </div>
                  </>
                ) : (
                  <div className="ev-sem-foto">
                    <div className="ev-data-bloco">
                      <div className="dia">{String(d.getDate()).padStart(2, '0')}</div>
                      <div className="mes">{MESES_A[d.getMonth()]}</div>
                    </div>
                    <img className="ev-logo" src="/logo.png" alt="Promessa Lago dos Peixes" loading="lazy" />
                    <div className="ev-titulo-escuro">{ev.titulo}</div>
                    <div className="ev-detalhes">
                      {DIAS_SEM[d.getDay()]}{ev.hora ? ` · ${ev.hora}` : ''}
                      {ev.ministerio && <span className="ev-min-selo">{ev.ministerio}</span>}
                    </div>
                  </div>
                )
                return ev.link
                  ? <a key={i} href={ev.link} target="_blank" rel="noopener noreferrer" className="evento-card">{corpo}</a>
                  : <div key={i} className="evento-card">{corpo}</div>
              })}
            </div>
          </div>
        </section>
      )}

      <section id="celulas" className="sec sec-alt">
        <div className="container">
          <div className="chapeu">Células nos lares</div>
          <div className="cab-flex" style={{ marginTop: 14 }}>
            <h2 className="titulo" style={{ margin: 0, maxWidth: '20ch' }}>Encontre a célula mais perto de você</h2>
            <p className="apoio" style={{ maxWidth: '42ch' }}>Adultos, jovens e crianças reunidos toda semana para compartilhar a vida e aprender mais sobre Jesus. Chegue sem avisar — você vai ser recebido.</p>
          </div>
          <div className="cel-grid">
            {S.CELULAS.map((c, i) => (
              <div className="cel-card" key={i}>
                <div className="cel-head">
                  <h3>{c.nome}</h3>
                  {c.publico && <span className="cel-publico">{c.publico}</span>}
                </div>
                <div className="cel-linhas">
                  <div><span className="rot">Quando</span><span className="forte">{c.horario}</span></div>
                  <div><span className="rot">Onde</span><span>{c.endereco}</span></div>
                  {c.liderCelula && <div><span className="rot">Líder</span><span>{c.liderCelula}</span></div>}
                  <div><span className="rot">Anfitrião</span><span>{c.lider}</span></div>
                </div>
                <a href={c.mapa} target="_blank" rel="noopener noreferrer" className="cel-mapa">Ver no mapa →</a>
              </div>
            ))}
          </div>
          <div className="cel-cta">
            <a href={S.LINKS.faleConosco} target="_blank" rel="noopener noreferrer" className="btn-azul">Quero participar de uma célula</a>
            <span>Chame no WhatsApp e a gente te apresenta a célula mais perto de você.</span>
          </div>
        </div>
      </section>

      <section id="participe" className="sec sec-alt">
        <div className="container-form">
          <div className="participe-cab">
            <div className="chapeu">Participe</div>
            <h2 className="titulo">Fale com a igreja por aqui</h2>
            <p>Preencha e a mensagem chega direto no e-mail da igreja. Respondemos em até dois dias.</p>
          </div>
          <div className="abas">
            {ABAS.map((a) => (
              <button key={a.k} type="button" onClick={() => { setAba(a.k); setEnvio('') }} className={aba === a.k ? 'ativa' : ''}>{a.rotulo}</button>
            ))}
          </div>
          {envio === 'ok' ? (
            <div className="form-ok">
              <div className="icone">✓</div>
              <h3>Mensagem enviada!</h3>
              <p>{aba === 'oracao'
                ? 'Seu pedido chegou à igreja e será levado na reunião de oração de terça-feira.'
                : 'Seu cadastro chegou ao e-mail da igreja. Entraremos em contato em até dois dias.'}</p>
              <button type="button" onClick={() => setEnvio('')} className="btn-ghost">Enviar outra mensagem</button>
            </div>
          ) : (
            <form onSubmit={enviarForm} className="form-card">
              <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />
              {aba === 'ministerio' && (
                <>
                  <div className="linha-2">
                    {inp('Seu nome', { name: 'Nome', required: true, placeholder: 'Nome completo' })}
                    {inp('WhatsApp', { name: 'WhatsApp', required: true, placeholder: '(21) 90000-0000' })}
                  </div>
                  <label className="campo">
                    <span>Ministério em que quero servir</span>
                    <select name="Ministério" required defaultValue="">
                      <option value="" disabled>Selecione um ministério</option>
                      {opcoesMinisterio.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </label>
                  <label className="campo">
                    <span>Conte um pouco sobre você</span>
                    <textarea name="Mensagem" rows="4" placeholder="Experiência, disponibilidade, o que gosta de fazer…"></textarea>
                  </label>
                </>
              )}
              {aba === 'oracao' && (
                <>
                  <div className="linha-2">
                    {inp('Seu nome (opcional)', { name: 'Nome', placeholder: 'Pode ser anônimo' })}
                    {inp('Contato para retorno (opcional)', { name: 'Contato', placeholder: 'WhatsApp ou e-mail' })}
                  </div>
                  <label className="campo">
                    <span>Seu pedido de oração</span>
                    <textarea name="Pedido" required rows="5" placeholder="Escreva com liberdade. A equipe de intercessão leva o seu pedido nas reuniões de terça."></textarea>
                  </label>
                  <label className="check">
                    <input type="checkbox" name="Pedido confidencial" value="Sim" />
                    <span>Prefiro que o pedido fique só com o pastor e a equipe de intercessão.</span>
                  </label>
                </>
              )}
              <div className="form-rodape">
                <span className="lgpd">Ao enviar, seus dados vão apenas para o e-mail da igreja. Não compartilhamos com ninguém.</span>
                <button type="submit" disabled={envio === 'enviando'}>
                  {envio === 'enviando' ? 'Enviando…' : (aba === 'oracao' ? 'Enviar pedido' : 'Enviar cadastro')}
                </button>
              </div>
              {envio === 'erro' && (
                <p className="form-erro">Não conseguimos enviar agora. Tente de novo em instantes — ou <a href={S.LINKS.faleConosco} target="_blank" rel="noopener noreferrer">fale com a gente no WhatsApp</a>.</p>
              )}
            </form>
          )}
        </div>
      </section>

      <section id="contribua" className="sec sec-cinza">
        <div className="blob blob-bl"></div>
        <div className="container duas-col centro-alinhado pos">
          <div>
            <div className="chapeu claro">Generosidade</div>
            <h2 className="titulo" style={{ maxWidth: '20ch' }}>Contribua com esta obra</h2>
            <p className="par-claro">{T.contribuaTexto}</p>
          </div>
          <div className="pix-card">
            <div className="pix-rotulo">PIX · CNPJ da igreja</div>
            <div className="pix-chave">{T.pixExibicao}</div>
            <button type="button" className="pix-btn" onClick={copiarPix}>
              {pixCopiado ? 'Chave PIX copiada' : 'Copiar chave PIX'}
            </button>
            <a href={S.LINKS.tesouraria} target="_blank" rel="noopener noreferrer" className="pix-tesouraria">Enviar comprovante à tesouraria</a>
            <div className="pix-aviso">
              <span className="seta">↗</span>
              <span>Depois de contribuir, envie o comprovante para a tesouraria — assim o registro da sua contribuição fica certinho.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="sec">
        <div className="container duas-col topo-alinhado">
          <div>
            <div className="chapeu">Venha nos visitar</div>
            <h2 className="titulo" style={{ marginBottom: 22 }}>Onde estamos</h2>
            <div className="contato-cards">
              <div className="card-end">
                <div className="rotulo-mini">Endereço</div>
                <div className="end">{T.endereco}</div>
                <div className="cid">{T.cidade}</div>
                <div className="ref">{T.referencia}</div>
                <div className="selos-acesso">
                  <span>Entrada acessível</span>
                  <span>Banheiros acessíveis</span>
                  <span>Estacionamento na rua</span>
                </div>
                <a href={S.LINKS.maps} target="_blank" rel="noopener noreferrer" className="rota">Abrir rota no Google Maps →</a>
              </div>
              <div className="contato-links">
                <a href={S.LINKS.faleConosco} target="_blank" rel="noopener noreferrer" className="card-link">
                  <div className="rotulo-mini">WhatsApp</div>
                  <div className="v">Fale conosco →</div>
                </a>
                <a href={S.LINKS.email} className="card-link">
                  <div className="rotulo-mini">E-mail</div>
                  <div className="v">Escrever para a igreja →</div>
                </a>
                <a href={S.LINKS.instagram} target="_blank" rel="noopener noreferrer" className="card-link">
                  <div className="rotulo-mini">Instagram</div>
                  <div className="v">Seguir a igreja →</div>
                </a>
              </div>
            </div>
          </div>
          <div className="mapa">
            <iframe
              src={S.LINKS.mapsEmbed}
              title="Mapa — Promessa Lago dos Peixes"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {fotoAberta !== null && S.GALERIA[fotoAberta] && (
        <div className="lightbox" onClick={() => setFotoAberta(null)}>
          <button className="lb-fechar" aria-label="Fechar" onClick={() => setFotoAberta(null)}>✕</button>
          <button className="lb-seta lb-esq" aria-label="Foto anterior" onClick={(e) => { e.stopPropagation(); navegarFoto(-1) }}>‹</button>
          <img src={S.GALERIA[fotoAberta].src} alt={S.GALERIA[fotoAberta].alt} onClick={(e) => e.stopPropagation()} />
          <button className="lb-seta lb-dir" aria-label="Próxima foto" onClick={(e) => { e.stopPropagation(); navegarFoto(1) }}>›</button>
          <div className="lb-contador">{fotoAberta + 1} / {S.GALERIA.length}</div>
        </div>
      )}

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
                {NAV_MOBILE.map(([href, rotulo]) => (
                  <a key={href} href={href}>{rotulo}</a>
                ))}
              </div>
              <div className="foot-col">
                <div className="t">Redes e Links</div>
                <a href={S.LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href={S.LINKS.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href={S.LINKS.youtubeDenominacao} target="_blank" rel="noopener noreferrer">YouTube · TV Viva Promessa</a>
                <a href="https://promessistas.org/" target="_blank" rel="noopener noreferrer">Promessistas Brasil</a>
                <a href="https://instagram.com/promessistas" target="_blank" rel="noopener noreferrer">@promessistas</a>
                <a href={S.LINKS.areaMembros} target="_blank" rel="noopener noreferrer">Área de Membros</a>
              </div>
            </div>
          </div>
          <div className="foot-fim">
            <span>Promessa Lago dos Peixes · CNPJ 30.228.769/0001-22</span>
            <span>{T.endereco} · Austin, Nova Iguaçu / RJ</span>
          </div>
        </div>
      </footer>
    </>
  )
}
