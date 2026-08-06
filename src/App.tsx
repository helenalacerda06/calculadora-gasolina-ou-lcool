import { useState } from "react";
import './App.css'

import logoImg from './assets/logo.png'


function App() {
  return (
    <div>
      <main className="container">
        <img 
        className="logo"
        src={logoImg}
        alt="Logo da calculadora de gasolina ou alcool"
        />
        <h1 className= "title">Qual melhor opção</h1>
        <form>

      <label>Álcool (preço por litro):</label>
      <input
        className="input"
        type="number"
        placeholder="4,90"
        min="1"
        step="0.01"
        />

            
      <label>Gasolina (preço por litro):</label>
      <input
        className="input"
        type="number"
        placeholder="4,90"
        min="1"
        step="0.01"
        />
        
    </form>
        
      </main>
    </div>
    
  )
  
}

export default App
