import { useState, FormEvent } from "react";
import './App.css'

import logoImg from './assets/logo.jpeg'

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | Number;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState()
  const [alcoolInput, setAlcoolInput] = useState()
  const [info, setInfo] = useState<InfoProps>()

  function calcular(event: FormEvent) {
    event.preventDefault();

    let calculo = (alcoolInput / gasolinaInput)

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar álcool:)",
        gasolina: gasolinaInput,
        alcool: alcoolInput,
      })
    } else {
      setInfo({
        title: "Compensa usar gasolina:)",
        gasolina: gasolinaInput,
        alcool: alcoolInput,
      })
    }
  }
}

return (
  <div>
    <main className="container">
      <img
        className="logo"
        src={logoImg}
        alt="Logo da calculadora de gasolina ou alcool"
      />
      <h1 className="title">Qual melhor opção</h1>
      <form className="form" onSubmit={calcular}>

        <label>Álcool (preço por litro):</label>
        <input
          className="input"
          type="number"
          placeholder="4,90"
          min="1"
          step="0.01"
          value={alcoolInput}
          onChange={(e) => setAlcoolInput(Number(e.target.value))}
        />


        <label>Gasolina (preço por litro):</label>
        <input
          className="input"
          type="number"
          placeholder="4,90"
          min="1"
          step="0.01"
          value={gasolinaInput}
          onChange={(e) => setGasolinaInput(Number(e.target.value))}
        />

        <input
          className="button"
          type="submit"
          value="Calculadora" />
      </form>

      <section className="result">
        <h2 className="result-title">Compensa usar álcool</h2>

        <span className="span">Álcool R$ 4.30</span>
        <span className="span">Gasolina R$ 5.10</span>
      </section>

    </main>
  </div>

)



export default App
