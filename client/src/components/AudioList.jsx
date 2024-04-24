import { useFetch } from "../hooks/useFetch"
import { serverRoutes } from "../data/env"
const { publicRoute } = serverRoutes;

export const AudioList = ({ list }) => {

    return (
        <>
            <h1>Lista de audios</h1>

            <ul>
                {
                    list.map((audio, index) => {
                        return (
                            <li key={index}>
                                <a href={publicRoute + audio} target="_blank">{audio}</a >
                            </li>
                        )
                    })
                }

            </ul>
        </>
    )
}
