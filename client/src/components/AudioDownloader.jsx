import { useForm } from "../hooks/useForm"
import { apiFetch } from "../api/apiFetch"

export const AudioDownloader = ({ refetch }) => {

    const { value, onChange, reset } = useForm()

    const payload = {
        url: value
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        const { data } = await apiFetch("/download", "POST", payload)

        if (!data?.error) {
            alert("Descarga exitosa")
            refetch()
        }

        reset()
    }

    return (
        <>
            <h2 className="font-bold text-slate-200 underline">Descargar Audios de YT</h2>

            <form onSubmit={handleSubmit} className="space-x-2">
                <input type="text" onChange={onChange} value={value} className="rounded shadow-xl"/>
                <button type="submit" className="p-1 bg-fuchsia-600 rounded-md shadow-xl">Descargar</button>
            </form>
        </>
    )
}


