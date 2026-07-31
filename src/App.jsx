export default function App() {
  return (
    <main style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:16,background:'#FAF9F5',color:'#1E2B2A',fontFamily:'Georgia, serif',textAlign:'center',padding:24}}>
      <div style={{fontSize:13,letterSpacing:'.2em',textTransform:'uppercase',color:'#188E87',fontFamily:'system-ui, sans-serif',fontWeight:700}}>Igreja Adventista da Promessa</div>
      <h1 style={{fontSize:'clamp(34px,6vw,58px)',margin:0,lineHeight:1.1}}>Promessa<br/>Lago dos Peixes</h1>
      <p style={{fontFamily:'system-ui, sans-serif',color:'#5C6B6A',maxWidth:420,lineHeight:1.7}}>Nosso novo site está sendo preparado com carinho.</p>
      <p style={{fontFamily:'system-ui, sans-serif',fontSize:14,color:'#5C6B6A'}}>Sábado: Escola Bíblica 9h · Culto 10h30 — Domingo: Culto 18h<br/>Estrada Austin-Queimados, 250 — Austin, Nova Iguaçu/RJ</p>
      <a href='https://instagram.com/promessalagodospeixes' style={{fontFamily:'system-ui, sans-serif',fontWeight:700,color:'#188E87'}}>@promessalagodospeixes</a>
    </main>
  )
}
