import { useEffect, useState } from 'react'

function Contador() {
  const [contador, setContador] = useState(0)
  const [step, setStep] = useState('1')
  const [minimo, setMinimo] = useState('0')
  const [maximo, setMaximo] = useState('10')

  const valorStep = Number(step)
  const valorMinimo = Number(minimo)
  const valorMaximo = Number(maximo)
  const stepValido = step !== '' && Number.isFinite(valorStep) && valorStep > 0
  const limitesValidos = minimo !== '' && maximo !== '' &&
    Number.isFinite(valorMinimo) && Number.isFinite(valorMaximo) &&
    valorMinimo <= valorMaximo

  useEffect(() => {
    if (limitesValidos) {
      setContador(valor => Math.min(valorMaximo, Math.max(valorMinimo, valor)))
    }
  }, [valorMinimo, valorMaximo, limitesValidos])

  function incrementar() {
    setContador(Math.min(contador + valorStep, valorMaximo))
  }

  function decrementar() {
    setContador(Math.max(contador - valorStep, valorMinimo))
  }

  function resetar() {
    setContador(Math.min(valorMaximo, Math.max(0, valorMinimo)))
  }

  return (
    <section>
      <h1>Contador com limites e step</h1>
      <p>Defina o mínimo, o máximo e o valor de cada passo.</p>

      <div className="campos-contador">
        <label htmlFor="step">Step</label>
        <input id="step" type="number" step="any" value={step}
          onChange={event => setStep(event.target.value)} />

        <label htmlFor="minimo">Mínimo</label>
        <input id="minimo" type="number" step="any" value={minimo}
          onChange={event => setMinimo(event.target.value)} />

        <label htmlFor="maximo">Máximo</label>
        <input id="maximo" type="number" step="any" value={maximo}
          onChange={event => setMaximo(event.target.value)} />
      </div>

      {!stepValido && <p role="alert">O step deve ser maior que 0.</p>}
      {!limitesValidos && (
        <p role="alert">Preencha os limites. O mínimo deve ser menor ou igual ao máximo.</p>
      )}

      <p className="valor-contador" aria-live="polite">Contador: {contador}</p>

      <div className="botoes-contador">
        <button onClick={decrementar}
          disabled={!stepValido || !limitesValidos || contador <= valorMinimo}>
          Decrementar
        </button>
        <button onClick={incrementar}
          disabled={!stepValido || !limitesValidos || contador >= valorMaximo}>
          Incrementar
        </button>
        <button onClick={resetar} disabled={!limitesValidos}>Resetar</button>
      </div>
    </section>
  )
}

export default Contador
