import ListaHabilidades from '../components/ListaHabilidades'

function Sobre() {
  const habilidades = ['h1', 'h2', 'h3']

  return (
    <div className="container">
      <section>
        <h1>Sobre</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Integer nec odio praesent libero sed cursus ante dapibus.
        </p>

        <h2>Conteúdos utilizados</h2>
        <ListaHabilidades habilidades={habilidades} />
      </section>
    </div>
  )
}

export default Sobre
