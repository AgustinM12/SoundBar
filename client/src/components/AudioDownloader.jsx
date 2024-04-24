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
            <h2>AudioDownloader</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" onChange={onChange} value={value} />
                <button type="submit">Descargar</button>
            </form>
        </>
    )
}


