const WHATS_PASTOR = 'https://wa.me/5521970250597'
const AREA_MEMBROS = 'https://gestao.promessalagodospeixes.com.br'
const INSTA = 'https://instagram.com/promessalagodospeixes'
const EMAIL = 'mailto:iaplagodospeixes@gmail.com'
const MAPA_EMBED = 'https://www.google.com/maps?q=Estrada+Austin-Queimados,+250,+Austin,+Nova+Igua%C3%A7u+-+RJ,+26086-295&output=embed'

const MINISTERIOS = [
  { ico: '🎵', nome: 'Louvor', desc: 'Adoração que conduz a igreja à presença de Deus, com equipe vocal e instrumental. Liderança: Pr. Gabriel Pereira, com Eclair Campos (instrumental) e Vitória Vicente (vocal).' },
  { ico: '📖', nome: 'Escola Bíblica', desc: 'Todo sábado às 9h, com classes por faixa etária — da Nave (crianças) à classe de adultos. Palavra ensinada com profundidade e amor.' },
  { ico: '👨‍👩‍👧‍👦', nome: 'Crianças e Família', desc: 'Cremos que as crianças aprendem desde cedo a alegria de congregar. Na Escola Bíblica têm classes próprias; no culto, adoramos todos juntos, em família.' },
  { ico: '🔥', nome: 'Jovens e Adolescentes', desc: 'Classes bíblicas próprias, células durante a semana e um encontro mensal para viver a fé com a galera.' },
  { ico: '🤝', nome: 'Mulheres e Homens', desc: 'Encontros, reuniões e visitas — cuidado com os da fé e atenção especial a quem ainda está conhecendo Cristo.' },
  { ico: '☕', nome: 'Café e Conexão', desc: 'Uma manhã por mês, a igreja abre as portas para um café com a comunidade. Proximidade, escuta e acolhimento.' },
  { ico: '🙏', nome: 'Intercessão', desc: 'Orações semanais às terças-feiras, pela igreja e pela vizinhança. Todo pedido de oração é levado a essas reuniões.' },
  { ico: '🎚️', nome: 'Sonoplastia e Comunicação', desc: 'Técnica, registros e conteúdo: preparando o ambiente do culto e levando a palavra e o acolhimento da igreja pelas mídias.' },
]

function Historia() {
  return (
    <details className="historia">
      <summary>Ler a nossa história completa (desde 1988)</summary>
      <div className="historia-corpo">
        <h3>O início</h3>
        <p>Durante a década de 1980, o Presbítero Paulo Roberto Muniz Botelho e sua esposa, Diaconisa Vilma, congregavam na Igreja Adventista da Promessa em Austin e exerciam o chamado missionário no Rio de Janeiro e nas cidades vizinhas. Em 1º de janeiro de 1983, haviam iniciado um trabalho em Lages, na casa do Presbítero Norival e da irmã Amélia.</p>
        <p>Cinco anos depois, voltando de Lages, o Presbítero Paulo recebeu de Deus, dentro do trem, a seguinte direção:</p>
        <blockquote>“Vá para a casa da tua mãe, que a minha luz tem que brilhar lá naquele lugar.”</blockquote>
        <p>Naquele mesmo dia, acompanhado do irmão Alcindo, dirigiu-se à casa de seus pais, Celina e José Muniz Botelho, na Rua Sogerim, nº 93. Em 1º de janeiro de 1988, em obediência a essa direção, teve início ali o ponto de pregação da Igreja Adventista da Promessa em Lago dos Peixes.</p>
        <h3>Rua Sogerim, 93 (1988–1992)</h3>
        <p>Ao trabalho recém-iniciado somou-se a família de José Fernando Muniz Botelho, com sua esposa Ana Botelho e as filhas Angélica e Cíntia. O trabalho consolidou-se, alcançou mais de quarenta irmãos e passou a ser assessorado ministerialmente pelo pastor e pelo grupo base da IAP em Austin.</p>
        <p>O primeiro batismo aconteceu em 1988, com o irmão José Muniz e a irmã Celina, pais do Presbítero Paulo. Ao longo desses anos houve batismos no Espírito Santo, avivamentos em subidas ao monte e batismos cerimoniais — além de evangelismos, cultos nos lares e tardes de louvor para levantar recursos para um terreno próprio.</p>
        <h3>Rua Antônio Cunha, 202 (a partir de 1992)</h3>
        <p>Em janeiro de 1992, a igreja mudou para um espaço maior, cedido pelo irmão José Fernando. Nesse período, o irmão Luiz Thomé tornou-se o primeiro membro consagrado da igreja, levado ao Diaconato na IAP em Austin. No mesmo ano, de uma visita de amor nasceu também o trabalho em Engenheiro Pedreira.</p>
        <h3>Estrada Austin-Queimados, 250 — o templo</h3>
        <p>Na Estrada Austin-Queimados, nº 250, foi construído o templo, inaugurado por volta de 1998 — endereço em que permanecemos até hoje.</p>
        <h3>O reconhecimento da data de fundação (2026)</h3>
        <p>Em 27 de junho de 2026, em Assembleia Extraordinária convocada pelo Pastor Gabriel Azeredo Pereira, a igreja refletiu sobre o tema <em>“Onde começa uma igreja?”</em> — a igreja nasce de uma experiência com Deus, e não de um edifício (Atos 2.1-4; Mateus 16.18). Pelo mesmo princípio com que a própria Igreja Adventista da Promessa reconhece sua fundação em 24 de janeiro de 1932, a Assembleia Local reconheceu, de forma unânime, a fundação da nossa igreja em 1º de janeiro de 1988.</p>
        <div className="destaque-data">
          <div className="g">1º de janeiro de 1988</div>
          <div className="s">Data de fundação reconhecida em Assembleia Local — 38 anos em 2026</div>
        </div>
        <p style={{fontSize:'13px',color:'var(--cinza)'}}>Fontes: “Histórico da Igreja Adventista da Promessa em Lago dos Peixes” (pesquisa de Rosilene e Eclair, com testemunhos dos pioneiros, 2026) e Ata da Assembleia Extraordinária de 27/06/2026. Consolidação: Pr. Gabriel Azeredo Pereira.</p>
      </div>
    </details>
  )
}

export default function App() {
  const copiarPix = () => {
    navigator.clipboard?.writeText('30228769000122').then(() => alert('Chave PIX copiada!')).catch(() => {})
  }
  return (
    <>
      {/* Topo */}
      <header className="topo">
        <div className="wrap topo-in">
          <a href="#inicio"><img src="/logo.png" alt="Promessa Lago dos Peixes" /></a>
          <nav>
            <span className="so-desktop" style={{gap:'22px'}}>
              <a href="#sobre">Sobre nós</a>
              <a href="#cultos">Cultos</a>
              <a href="#ministerios">Ministérios</a>
              <a href="#contribua">Contribua</a>
              <a href="#contato">Contato</a>
            </span>
            <a className="btn-membros" href={AREA_MEMBROS} target="_blank" rel="noopener">Área de Membros</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="inicio">
        <div className="wrap hero-in">
          <div>
            <div className="chapeu">Igreja Adventista da Promessa · Nova Iguaçu/RJ</div>
            <h1>Uma família para cuidar, amar e priorizar pessoas.</h1>
            <p>Somos a Promessa Lago dos Peixes — uma igreja viva, alegre e de portas abertas desde 1988. Aqui você não é visita: é esperado.</p>
            <div className="hero-botoes">
              <a className="botao botao-cheio" href={WHATS_PASTOR} target="_blank" rel="noopener">Sou novo aqui 👋</a>
              <a className="botao botao-borda" href="#cultos">Horários dos cultos</a>
            </div>
          </div>
          <div className="hero-foto">
            <img src="/foto-comunidade.jpg" alt="Momento de oração uns pelos outros na Promessa Lago dos Peixes" />
          </div>
        </div>
      </section>

      {/* Faixa de horários */}
      <div className="horarios" id="cultos">
        <div className="wrap horarios-in">
          <div className="item">
            <div className="dia">Sábado</div>
            <div className="hora">9h</div>
            <div className="desc">Escola Bíblica — classes por idade</div>
          </div>
          <div className="item">
            <div className="dia">Sábado</div>
            <div className="hora">10h30</div>
            <div className="desc">Culto da Família (até 12h)</div>
          </div>
          <div className="item">
            <div className="dia">Domingo</div>
            <div className="hora">18h</div>
            <div className="desc">Culto de Celebração</div>
          </div>
          <div className="item">
            <div className="dia">Durante a semana</div>
            <div className="hora">Células</div>
            <div className="desc">Encontros nos lares · Oração às terças</div>
          </div>
        </div>
      </div>

      {/* Sobre */}
      <section className="sec" id="sobre">
        <div className="wrap">
          <div className="sobre-grid">
            <div>
              <div className="sec-chapeu">Quem somos</div>
              <h2>Uma igreja que nasceu de uma promessa — e de um chamado no trem.</h2>
              <p className="lede">Em 1º de janeiro de 1988, o Presbítero Paulo Roberto ouviu de Deus: <em>“vá para a casa da tua mãe, que a minha luz tem que brilhar naquele lugar”</em>. Daquela sala nasceu a nossa igreja. 38 anos depois, seguimos com a mesma missão:</p>
              <div className="pilares">
                <span className="pilar">Cuidar</span>
                <span className="pilar">Amar</span>
                <span className="pilar">Priorizar pessoas</span>
              </div>
              <p className="lede">Cremos em amar a Deus acima de todas as coisas e proclamar a mensagem de Jesus Cristo sob o poder do Espírito Santo. Fazemos parte da <a href="https://promessistas.org/" target="_blank" rel="noopener">Igreja Adventista da Promessa</a>, presente em todo o Brasil desde 1932.</p>
              <Historia />
            </div>
            <div>
              <div className="sobre-foto">
                <img src="/foto-batismo.jpg" alt="Batismo na Promessa Lago dos Peixes" />
              </div>
              <p style={{fontSize:'13px',color:'var(--cinza)',marginTop:'10px',textAlign:'center'}}>Batismo — vidas nascendo de novo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministérios */}
      <section className="sec areia" id="ministerios">
        <div className="wrap">
          <div className="sec-chapeu">Como servimos</div>
          <h2>Ministérios</h2>
          <p className="lede">Cada ministério é um jeito de cuidar — dos de dentro e dos de fora.</p>
          <div className="min-grid">
            {MINISTERIOS.map(m => (
              <div className="min-card" key={m.nome}>
                <div className="ico">{m.ico}</div>
                <h3>{m.nome}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sou novo aqui + Oração */}
      <section className="sec" id="novo">
        <div className="wrap">
          <div className="duplo">
            <div className="card-cta azul">
              <h3>Sou novo aqui 👋</h3>
              <p>Primeira vez? A gente quer te conhecer! Chama o pastor no WhatsApp — se quiser, oferecemos até uma visita. Venha como está: aqui é família.</p>
              <a className="botao botao-cheio" href={WHATS_PASTOR} target="_blank" rel="noopener">Falar com o Pr. Gabriel</a>
            </div>
            <div className="card-cta">
              <h3>Pedido de oração 🙏</h3>
              <p>Conte com a gente. Envie seu pedido e ele será levado às nossas reuniões de oração, toda terça-feira.</p>
              <a className="botao botao-borda" href={`${EMAIL}?subject=Pedido de oração`}>Enviar pedido de oração</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contribua */}
      <section className="sec areia" id="contribua">
        <div className="wrap">
          <div className="sec-chapeu">Generosidade</div>
          <h2>Contribua com esta obra</h2>
          <p className="lede">Dízimos e ofertas são atos voluntários de amor e adoração. Cada recurso é investido com responsabilidade: no cuidado do templo, nas missões local e externa, no auxílio às necessidades dos irmãos, no apoio à família pastoral e no cuidado de outras igrejas.</p>
          <div className="pix-caixa">
            <div>
              <div className="rotulo">PIX — CNPJ da igreja</div>
              <div className="chave">30.228.769/0001-22</div>
            </div>
            <button className="botao botao-cheio" onClick={copiarPix}>Copiar chave PIX</button>
          </div>
          <div className="aviso-comprovante">
            📄 Após contribuir, envie o comprovante para o WhatsApp da tesouraria — assim o registro da sua contribuição fica certinho.
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="sec" id="contato">
        <div className="wrap">
          <div className="contato-grid">
            <div>
              <div className="sec-chapeu">Venha nos visitar</div>
              <h2>Onde estamos</h2>
              <div className="contato-lista">
                <div className="contato-item">📍 <span><b>Estrada Austin-Queimados, 250</b><br/>Austin, Nova Iguaçu/RJ — CEP 26086-295<br/><span style={{color:'var(--cinza)',fontSize:'13.5px'}}>Referências: Mercado do Beto na esquina · ao lado da Águas do Rio</span></span></div>
                <div className="contato-item">♿ <span>Templo acessível, inclusive os banheiros.</span></div>
                <div className="contato-item">📱 <span><a href={WHATS_PASTOR} target="_blank" rel="noopener">WhatsApp do pastor</a> — (21) 97025-0597</span></div>
                <div className="contato-item">✉️ <span><a href={EMAIL}>iaplagodospeixes@gmail.com</a></span></div>
                <div className="contato-item">📷 <span><a href={INSTA} target="_blank" rel="noopener">@promessalagodospeixes</a> — Instagram, Facebook e Threads</span></div>
              </div>
            </div>
            <div className="mapa">
              <iframe src={MAPA_EMBED} title="Mapa — Promessa Lago dos Peixes" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer>
        <div className="wrap">
          <div className="footer-in">
            <img src="/logo.png" alt="Promessa Lago dos Peixes" />
            <div style={{display:'flex',gap:'20px',flexWrap:'wrap'}}>
              <a href={INSTA} target="_blank" rel="noopener">Instagram</a>
              <a href="https://promessistas.org/" target="_blank" rel="noopener">Promessistas Brasil</a>
              <a href="https://instagram.com/promessistas" target="_blank" rel="noopener">@promessistas</a>
              <a href={AREA_MEMBROS} target="_blank" rel="noopener">Área de Membros</a>
            </div>
          </div>
          <div className="linha-fina">
            Igreja Adventista da Promessa — Lago dos Peixes · Fundada em 1º de janeiro de 1988 · CNPJ 30.228.769/0001-22
          </div>
        </div>
      </footer>
    </>
  )
}
