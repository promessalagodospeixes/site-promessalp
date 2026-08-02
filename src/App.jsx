import { useEffect, useRef, useState } from 'react'
import { PADROES, carregarConfig, carregarEventos, parseHistoria, OPCOES_MINISTERIO_EXTRA } from './config/site.js'

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

// Posição da foto: enquadramento manual (px/py em %) ou atalhos topo/base
function posFoto(f, padrao = 'center') {
  if (f && f.px != null && f.py != null) return `${f.px}% ${f.py}%`
  return { topo: 'center top', base: 'center bottom' }[f?.pos] || padrao
}

function iniciais(nome) {
  return (nome || '?').split(/\s+e\s+|\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase()
}

function Historia({ T }) {
  const blocos = parseHistoria(T.historia)
  return (
    <details className="historia">
      <summary>
        <span>{T.historiaResumo}</span>
        <span className="mais">+</span>
      </summary>
      <div className="hist-corpo">
        {blocos.map((b, i) => {
          if (b.tipo === 'h3') return <h3 key={i}>{b.texto}</h3>
          if (b.tipo === 'quote') return <blockquote key={i}>{b.texto}</blockquote>
          return <p key={i}>{b.texto}</p>
        })}
        <div className="hist-data">
          <div className="g">{T.historiaDataDestaque}</div>
          <div className="s">{T.historiaDataSub}</div>
        </div>
        <p className="hist-fontes">{T.historiaFontes}</p>
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
  const [galIdx, setGalIdx] = useState(0)
  const refMins = useRef(null)
  const [eventos, setEventos] = useState([])
  const refEventos = useRef(null)
  const refMsgs = useRef(null)
  const pixTimer = useRef(null)
  const capaTimer = useRef(null)
  const refReels = useRef(null)
  const refFotos = useRef(null)

  const T = S.TEXTOS

  useEffect(() => {
    // F5 sempre volta ao topo (sem restaurar posição nem âncora antiga)
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    if (window.location.hash) window.history.replaceState(null, '', window.location.pathname)
    window.scrollTo(0, 0)
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
  const irGaleria = (i) => {
    const n = S.GALERIA.length
    const novo = ((i % n) + n) % n
    setGalIdx(novo)
    // rola só a trilha de miniaturas — sem mexer na página (evita "quicadas");
    // pequeno atraso pra rolagem não ser cancelada pela troca da foto grande
    setTimeout(() => {
      const el = refFotos.current
      const alvo = el && el.children[novo]
      // rolagem direta (sem animação): a suave é cancelada pela troca da foto grande
      if (el && alvo) el.scrollLeft = alvo.offsetLeft - el.clientWidth / 2 + alvo.clientWidth / 2
    }, 80)
  }
  const rolarMins = (dir) => {
    const el = refMins.current
    if (el) el.scrollBy({ left: dir * Math.max(280, el.clientWidth * 0.7), behavior: 'smooth' })
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
              <span className="marca-sub brandSub">{T.badge}</span>
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
                backgroundPosition: posFoto(f, 'center 38%'),
                opacity: i === capa ? 1 : 0,
              }}
            ></div>
          ))}
        </div>
        <div className="hero-scrim"></div>
        <div className="hero-in container">
          <h1>{T.heroTitulo} <em>{T.heroDestaque}</em>.</h1>
          <p className="hero-sub">{T.heroSub}</p>
          <div className="hero-cta">
            <a href={S.LINKS.faleConosco} target="_blank" rel="noopener noreferrer" className="btn-azul">Sou novo aqui — falar no WhatsApp</a>
            <a href="#videos" className="btn-vidro">▶ Ver a igreja por dentro</a>
          </div>
          <div className="hero-base hero-so-controles">
            <div className="hero-controles">
              <button onClick={() => irCapa(capa - 1)} aria-label="Foto anterior">‹</button>
              {S.FOTOS_CAPA.length <= 8 ? (
                <div className="pontos">
                  {S.FOTOS_CAPA.map((_, i) => (
                    <button key={i} onClick={() => irCapa(i)} aria-label="Ver foto de capa" className={i === capa ? 'ativo' : ''}></button>
                  ))}
                </div>
              ) : (
                <span className="carrossel-contador claro">{capa + 1} / {S.FOTOS_CAPA.length}</span>
              )}
              <button onClick={() => irCapa(capa + 1)} aria-label="Próxima foto">›</button>
            </div>
          </div>
        </div>
      </section>

      <section className="faixa-horarios">
        <div className="container">
          <div className="fxh-grid">
            {S.HORARIOS.map((h, i) => (
              <div className="fxh-item" key={i}>
                <div className="fxh-dia">{h.dia}</div>
                <div className="fxh-hora">{h.hora}</div>
                <div className="fxh-desc">{h.desc}</div>
              </div>
            ))}
            <div className="fxh-item">
              <div className="fxh-dia">Na semana</div>
              <div className="fxh-hora">Células</div>
              <div className="fxh-desc"><a href="#celulas">a mais próxima →</a></div>
            </div>
          </div>
          <div className="fxh-endereco">
            <span>📍 {T.endereco} — {T.cidade}</span>
            <a href="#contato">Como chegar →</a>
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
            {[[T.passo1t, T.passo1d], [T.passo2t, T.passo2d], [T.passo3t, T.passo3d]].map(([t, d], i) => (
              <div className="passo" key={i}>
                <div className="passo-num">{'0' + (i + 1)}</div>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="sec sec-cinza">
        <div className="blob blob-tr"></div>
        <div className="container pos">
          <div className="cab-flex">
            <div>
              <div className="chapeu claro">{T.videosChapeu}</div>
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
          {S.GALERIA[galIdx] && (
            <button type="button" className="galeria-destaque" onClick={() => setFotoAberta(galIdx)}>
              <img src={S.GALERIA[galIdx].src} alt={S.GALERIA[galIdx].alt} loading="lazy" />
            </button>
          )}
          {S.GALERIA.length > 1 && (
            <>
              <div className="fotos-barra">
                <span className="fotos-dica">Use as setas — a foto grande acompanha · toque nela para ampliar</span>
                <div className="fotos-setas">
                  <button onClick={() => irGaleria(galIdx - 1)} aria-label="Voltar">‹</button>
                  <button onClick={() => irGaleria(galIdx + 1)} aria-label="Avançar">›</button>
                </div>
              </div>
              <div className="trilhaFotos" ref={refFotos}>
                {S.GALERIA.map((f, i) => (
                  <button type="button" key={i} className={'foto-thumb' + (i === galIdx ? ' ativa' : '')} onClick={() => setGalIdx(i)}>
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
            <p className="par-grande">{T.sobreIntro1} <em className="citacao">{T.sobreCitacao}</em> {T.sobreIntro2}</p>
            <div className="pilares">
              <div className="pilar"><b>{T.pilar1a}</b><span>{T.pilar1b}</span></div>
              <div className="pilar"><b>{T.pilar2a}</b><span>{T.pilar2b}</span></div>
              <div className="pilar"><b>{T.pilar3a}</b><span>{T.pilar3b}</span></div>
            </div>
            <p className="fe">{T.feTexto} <a href="https://promessistas.org/" target="_blank" rel="noopener noreferrer">Conheça a nossa família de igrejas →</a></p>
            <Historia T={T} />
          </div>
          <div className="sobre-lado">
            <div className="familia-carrossel retrato-carrossel">
              {S.FOTOS_SOBRE.map((f, i) => (
                <div key={i} className="familia-foto" style={{ opacity: i === sobreIdx ? 1 : 0, pointerEvents: i === sobreIdx ? 'auto' : 'none' }}>
                  <img src={f.src} alt="Promessa Lago dos Peixes" loading="lazy" style={{ objectPosition: posFoto(f) }} />
                </div>
              ))}
              {S.FOTOS_SOBRE.length > 1 && (
                <div className="familia-controles">
                  {S.FOTOS_SOBRE.length <= 8 ? (
                    <div className="pontos">
                      {S.FOTOS_SOBRE.map((_, i) => (
                        <button key={i} onClick={() => irSobre(i)} aria-label="Ver foto" className={i === sobreIdx ? 'ativo' : ''}></button>
                      ))}
                    </div>
                  ) : (
                    <span className="carrossel-contador">{sobreIdx + 1} / {S.FOTOS_SOBRE.length}</span>
                  )}
                  <div className="setas">
                    <button onClick={() => irSobre(sobreIdx - 1)} aria-label="Foto anterior">‹</button>
                    <button onClick={() => irSobre(sobreIdx + 1)} aria-label="Próxima foto">›</button>
                  </div>
                </div>
              )}
            </div>
            <div className="stats">
              <div className="stat cinza">
                <div className="n">{T.stat1Num}</div>
                <div className="d">{T.stat1Texto}</div>
              </div>
              <div className="stat azul">
                <div className="n" style={{ fontSize: T.stat2Num.length > 4 ? 27 : 34 }}>{T.stat2Num}</div>
                <div className="d">{T.stat2Texto}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lideres" className="sec sec-alt">
        <div className="container">
          <div className="chapeu">{T.lideresChapeu}</div>
          <div className="cab-flex" style={{ marginTop: 14 }}>
            <h2 className="titulo" style={{ margin: 0, maxWidth: '20ch' }}>{T.lideresTitulo}</h2>
            <p className="apoio">{T.lideresApoio}</p>
          </div>
          <div className="lideres-grid">
            <div className="familia-carrossel">
              {S.FOTOS_FAMILIA.map((f, i) => (
                <div key={i} className="familia-foto" style={{ opacity: i === familia ? 1 : 0, pointerEvents: i === familia ? 'auto' : 'none' }}>
                  <img src={f.src} alt={f.alt} loading="lazy" style={{ objectPosition: posFoto(f) }} />
                </div>
              ))}
              <div className="familia-controles">
                {S.FOTOS_FAMILIA.length <= 8 ? (
                  <div className="pontos">
                    {S.FOTOS_FAMILIA.map((_, i) => (
                      <button key={i} onClick={() => irFamilia(i)} aria-label="Ver foto da família pastoral" className={i === familia ? 'ativo' : ''}></button>
                    ))}
                  </div>
                ) : (
                  <span className="carrossel-contador">{familia + 1} / {S.FOTOS_FAMILIA.length}</span>
                )}
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
          <div className="chapeu">{T.minChapeu}</div>
          <div className="cab-flex" style={{ marginTop: 14 }}>
            <h2 className="titulo" style={{ margin: 0, maxWidth: '20ch' }}>{T.minTitulo}</h2>
            <p className="apoio" style={{ maxWidth: '38ch' }}>{T.minApoio}</p>
          </div>
          <div className="msgs-barra">
            <span className="fotos-dica">Arraste para o lado ou use as setas</span>
            <div className="fotos-setas">
              <button onClick={() => rolarMins(-1)} aria-label="Voltar">‹</button>
              <button onClick={() => rolarMins(1)} aria-label="Avançar">›</button>
            </div>
          </div>
          <div className="trilhaMins" ref={refMins}>
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
              <h3>{T.facaParteTitulo}</h3>
              <p>{T.facaParteTexto}</p>
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
            <h2 className="titulo agenda-titulo">{T.ritmoTitulo}</h2>
            <p className="par-medio">{T.ritmoTexto}</p>
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
                <div className="chapeu">{T.eventosChapeu}</div>
                <h2 className="titulo" style={{ maxWidth: '22ch', marginBottom: 0 }}>{T.eventosTitulo}</h2>
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
            <h2 className="titulo" style={{ margin: 0, maxWidth: '20ch' }}>{T.celTitulo}</h2>
            <p className="apoio" style={{ maxWidth: '42ch' }}>{T.celApoio}</p>
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
            <h2 className="titulo">{T.partTitulo}</h2>
            <p>{T.partTexto}</p>
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
                    {inp('Seu nome', { name: 'Nome', required: true, placeholder: 'Nome completo', autoComplete: 'name' })}
                    {inp('WhatsApp', { name: 'WhatsApp', required: true, placeholder: '(21) 90000-0000', type: 'tel', inputMode: 'tel', autoComplete: 'tel' })}
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
                    {inp('Seu nome (opcional)', { name: 'Nome', placeholder: 'Pode ser anônimo', autoComplete: 'name' })}
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
            <h2 className="titulo" style={{ maxWidth: '20ch' }}>{T.contribuaTitulo}</h2>
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
            <h2 className="titulo" style={{ marginBottom: 22 }}>{T.contatoTitulo}</h2>
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
