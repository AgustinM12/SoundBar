import { useFetch } from "../hooks/useFetch"
import { serverRoutes } from "../data/env"
const { publicRoute } = serverRoutes;

export const AudioList = ({ list }) => {

    return (
        <>
            <h2 className="font-bold text-slate-200 underline">Lista de audios</h2>

            <ul>
                {
                    list.map((audio, index) => {
                        return (
                            <li key={index}>
                                <a 
                                className="text-white cursor-pointer hover:text-fuchsia-500"
                                href={publicRoute + audio} target="_blank">
                                    🔹{audio.slice(0, audio.length-4)}</a >
                            </li>
                        )
                    })
                }

            </ul>
        </>
    )
}
