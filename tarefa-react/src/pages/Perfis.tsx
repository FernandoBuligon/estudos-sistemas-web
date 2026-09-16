import CardPerfil from '../components/CardPerfil'

function Perfis() {
  return (
    <div className="container">
      <h1>Perfis</h1>
      <p>
        isso eh um paragrafo
      </p>

      <div className="grade-perfis">
        <CardPerfil
          nome="Pessoa 1"
          curso="Sistemas de Informação"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          habilidades={['HTML', 'CSS', 'JavaScript']}
        />

        <CardPerfil
          nome="Pessoa 2"
          curso="Ciência da Computação"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          habilidades={['React', 'TypeScript', 'Git']}
        />

        <CardPerfil
          nome="Pessoa 3"
          curso="Análise de Sistemas"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          habilidades={['Java', 'SQL', 'Git']}
        />
      </div>
    </div>
  )
}

export default Perfis
