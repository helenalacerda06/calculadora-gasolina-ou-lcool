import { useState, FormEvent } from "react";
import './App.css'

import logoImg from './assets/logo.jpeg'


function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [alcoolInput, setAlcoolInput] = useState(0)

  function calcular(event: FormEvent){
    event.preventDefault();

    let calculo = (alcoolInput / gasolinaInput)

    if(calculo <= 0.7){
      alert("Compensa usar Álcool! :)")
    }else{
      alert("Compensa usar gasolina! :)")
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
            onChange={ (e) => setAlcoolInput(Number(e.target.valu))}
          />


          <label>Gasolina (preço por litro):</label>
          <input
            className="input"
            type="number"
            placeholder="4,90"
            min="1"
            step="0.01"
            value={gasolinaInput}
            onChange={ (e) => setGasolinaInput(Number(e.target.valu))}
          />

          <input 
          className="button" 
          type="submit" 
          value="Calculadora" />
        </form>

      </main>
    </div>

  )

}

export default App
