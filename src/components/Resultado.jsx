import { useCallback, useMemo, useRef } from 'react'
import useCotizador from '../hooks/useCotizador'
import {MARCAS, PLANES} from '../constants'

const Resultado = () => {

    const {resultado, datos} = useCotizador()
    const {marca, anio, plan} = datos
    const anioRef = useRef(anio)

    //useMemo
    const [nombreMarca] = useMemo( () => MARCAS.filter(m => m.id === Number(marca)), [resultado])

    //useCallback
    const [nombrePlan] = useCallback(PLANES.filter(p => p.id === Number(plan)), [resultado])

    if(resultado === 0) return null

    return (
        <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
            <h2 className='text-gray-500 font-black text-3xl'>
                Resumen de cotización
            </h2>
            <p className='my-2'>
                <span className='font-bold'>Marca: </span>
                {nombreMarca.nombre}
            </p>
            <p className='my-2'>
                <span className='font-bold'>Plan: </span>
                {nombrePlan.nombre}
            </p>
            <p className='my-2'>
                <span className='font-bold'>Año: </span>
                {anioRef.current}
            </p>
            <p className='my-2 text-2xl'>
                <span className='font-bold'>Cotización: </span>
                {resultado}
            </p>
        </div>
    )
}

export default Resultado