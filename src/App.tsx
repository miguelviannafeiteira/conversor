import React from 'react'
import './App.css'
import Conversor from './Components/Conversor'

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <Conversor moedaA="USD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="USD" />
      </div>
      <div>
        <Conversor moedaA="CAD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="CAD" />
      </div>
    </div>
  )
}

export default App
