import { useForm } from "../hooks/useForm"
import { apiFetch } from "../api/apiFetch"
import { useState } from "react"

export const AudioDownloader = ({ refetch }) => {

    const { value, onChange, reset } = useForm()

    const payload = {
        url: value
    }

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {

        if (value !== "") {

            e.preventDefault()
            setLoading(true)
            const { data } = await apiFetch("/download", "POST", payload)

            if (!data?.error) {
                alert("Descarga exitosa")
                refetch()
            }

            setLoading(false)
            reset()
        } else {
            alert("Debe proporcionar una URL valida")
        }
    }

    return (
        <div>
            <h2 className="font-bold text-slate-200 underline pb-3">Descargar Audios de YT</h2>

            <form onSubmit={handleSubmit} >
                <div className="flex space-x-2">
                    <input type="text" onChange={onChange} value={value} placeholder=" URL de YouTube" className="rounded shadow-xl py-1.5" />

                    <button type="submit" disabled={loading} className="font-semibold p-1 bg-fuchsia-600 rounded-md shadow-xl hover:bg-fuchsia-800 text-white hover:scale-105 transition-transform duration-300 border-2 border-white">{loading ? "Cargando..." : "Descargar"}</button>
                </div>

            </form>
        </div>
    )
}


