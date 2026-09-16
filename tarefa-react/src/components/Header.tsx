import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container cabecalho">
        <NavLink className="logo" to="/">Meu App React</NavLink>

        <nav>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/perfis">Perfis</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
