import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import Spinner from "./Spinner"
import Resultado from "./Resultado"

const AppSeguro = () => {

  const {resultado, loading} = useCotizador()

  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl font-black">Cotizador de seguros de auto</h1>
        </header>
        <main className="bg-white md:w-2/3 lg:w-2/3 mx-auto shadow rounded-lg p-10"> 
            <Formulario/>
            { loading ? <Spinner/> : <Resultado/> }
        </main>
    </>
  )
}

export default AppSeguro