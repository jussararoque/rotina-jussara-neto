export default function App() {
  return (
    <div style={{padding: 20, fontFamily: 'Arial'}}>
      <h1>🏠 Jussara & Neto</h1>

      <h2>Tarefas da semana</h2>

      <div>
        <h3>Cozinha (Neto)</h3>
        <p>Terça · 19:30</p>
        <label><input type="checkbox"/> Lavar louça</label><br/>
        <label><input type="checkbox"/> Limpar bancada</label><br/>
        <label><input type="checkbox"/> Limpar fogão</label>
      </div>

      <div style={{marginTop:20}}>
        <h3>Planejar refeições (Jussara)</h3>
        <p>Quinta · 20:00</p>
        <label><input type="checkbox"/> Definir jantas</label><br/>
        <label><input type="checkbox"/> Lista de compras</label>
      </div>

      <h2 style={{marginTop:30}}>Faxina mensal</h2>

      <div>
        <h3>1º sábado do mês</h3>
        <label><input type="checkbox"/> Limpar geladeira</label><br/>
        <label><input type="checkbox"/> Organizar armário</label>
      </div>
    </div>
  )
}
