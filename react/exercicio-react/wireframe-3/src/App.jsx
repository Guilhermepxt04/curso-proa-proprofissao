import React from 'react'
import './App.css'
import Header from './assets/components/Header'
import Vermelho from './assets/components/Vermelho'
import Azul from './assets/components/Azul'
import Laranja from './assets/components/Laranja'
import Amarelo from './assets/components/Amarelo'
import Footer from './assets/components/footer'

export default function App() {

  return (
    <>
      <main>
        <Header />
        <Vermelho />
        <Azul />
        <Laranja />
        <Amarelo />
        <Footer />
      </main>
    </>
  )
}

