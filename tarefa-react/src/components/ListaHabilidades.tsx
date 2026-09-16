type ListaHabilidadesProps = {
  habilidades: string[]
}

function ListaHabilidades({ habilidades }: ListaHabilidadesProps) {
  return (
    <ul className="lista-habilidades">
      {habilidades.map((habilidade) => (
        <li key={habilidade}>{habilidade}</li>
      ))}
    </ul>
  )
}

export default ListaHabilidades
