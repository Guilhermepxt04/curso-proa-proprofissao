import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Produtos from './components/produtos/Produtos'
import Endereco from './components/endereco/Endereco'
import Contato from './components/contato/Contato'
import Footer from './components/footer/Footer'

export default function App() {

  return (
    <>
      <body>
        <Header />
        <main>
          <Hero />
          <Produtos />
          <Endereco />
          <Contato />
        </main>
        <Footer />
      </body>
    </>
  )
}

