import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Perfis from './pages/Perfis'
import Sobre from './pages/Sobre'

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/perfis" element={<Perfis />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>

      <footer>
        <p>Atividade de React - 2026</p>
      </footer>
    </>
  )
}

export default App
