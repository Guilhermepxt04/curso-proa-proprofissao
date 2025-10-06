import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Escocia from './components/Escocia'
import Aruba from './components/Aruba'
import GrandCanyon from './components/GrandCanyon'
import MuralhaChina from './components/MuralhaChina'


export default function App() {

  return (
    <>
      <main>
        <Header />
        <Home />
        <Escocia />
        <Aruba />
        <GrandCanyon />
        <MuralhaChina />
        <Footer />
      </main>
    </>
  )
}

