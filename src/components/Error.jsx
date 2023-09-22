import useCotizador from "../hooks/useCotizador"

const Error = () => {

    const {error} = useCotizador()

    return (
        <div className="bg-red-100 border text-center border-red-400 text-red-700 py-3">
            <p>{error}</p>
        </div>
    )
}

export default Error