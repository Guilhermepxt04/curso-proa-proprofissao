import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Le from './components/Le'
import Conteudo from './components/Conteudo'
import Ld from './components/Ld'
import Footer from './components/Footer'
import Camera from './components/Camera'

export default function App() {

  return (
    <main>
      <Header />
      <Le />
      <Conteudo />
      <Camera />
      <Ld />
      <Footer />
    </ main>
  )
}

