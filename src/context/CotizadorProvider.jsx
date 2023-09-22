import { createContext, useState } from "react"
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers"

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        anio: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [resultado, setResultado] = useState(0)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        let resultado = 2000

        // Obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.anio)

        // Por cada año hay que restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100

        //Calcula el incremento por marca
        resultado *= calcularMarca(datos.marca)

        // Calcular el incremento por plan
        resultado *= calcularPlan(datos.plan)

        resultado = formatearDinero(resultado)

        setLoading(true)
        setTimeout(() => {
            setResultado(resultado)
            setLoading(false)
        }, 2000)
    }

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                loading
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export { CotizadorProvider }
export default CotizadorContext