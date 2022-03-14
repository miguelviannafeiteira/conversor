import React, { useState } from 'react'
import './Conversor.css'

interface Moedas {
  moedaA: string;
  moedaB: string;
}

const Conversor: React.FC<Moedas> = ({ moedaA, moedaB }) => {
  const [moedaAValor, setMoedaAValor] = useState<string>('')
  const [moedaBValor, setMoedaBValor] = useState<number>(0)

  const converter = () => {
    const dePara = `${moedaA}_${moedaB}`
    const url = `http://free.currencyconverterapi.com/api/v5/convert?q=${dePara}&compact=y&apiKey=7d893feed91e2b93364c`

    fetch(url).then(res => {
      return res.json()
    }).then(json => {
      const cotacao = json[dePara].val
      setMoedaBValor(Number(moedaAValor) * cotacao)
    })
  }

  return (
    <div className="conversor">
      <h2>{moedaA} para {moedaB}</h2>
      <input type="text" onChange={({ target }) => setMoedaAValor(target.value)} />
      <input type="button" value="Converter" onClick={converter} />
      <h2>{moedaBValor.toFixed(2)}</h2>
    </div>
  )
}

export default Conversor
