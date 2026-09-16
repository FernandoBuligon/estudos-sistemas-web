import ListaHabilidades from './ListaHabilidades'

type CardPerfilProps = {
  nome: string
  curso: string
  descricao: string
  habilidades: string[]
}

function CardPerfil({ nome, curso, descricao, habilidades }: CardPerfilProps) {
  return (
    <article className="card-perfil">
      <h2>{nome}</h2>
      <p className="curso">{curso}</p>
      <p>{descricao}</p>
      <ListaHabilidades habilidades={habilidades} />
    </article>
  )
}

export default CardPerfil
