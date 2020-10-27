import React, { useState } from 'react'
import Word from './Components/Word'


export default function App() {
  const [symbol, setSymbol] = useState('')

  window.addEventListener('keydown', function handler(e) {
    if (e.key.match(/[A-zА-яЁё]/) && e.which >= 65 && e.key.length === 1) {
      setSymbol(symbol + e.key)
      this.removeEventListener('keydown', handler)
    }
    if (symbol.length !== 0) {
      if (e.which === 8) {
        setSymbol(symbol.slice(0, -1))
        this.removeEventListener('keydown', handler)
      }
    }
  })

  return (
    <>
      <Word symbol={symbol} />
    </>
  )
}


