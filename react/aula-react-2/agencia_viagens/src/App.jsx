import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Escocia' element={<Escocia />} />
            <Route path='/GrandCanyon' element={<GrandCanyon />} />
            <Route path='/Aruba' element={<Aruba />} />
            <Route path='/MuralhaChina' element={<MuralhaChina />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </>
  )
}

