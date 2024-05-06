import { LoadAudio } from "../components/LoadAudio"
import { AudioList } from "../components/AudioList"
import { useFetch } from "../hooks/useFetch"
import { AudioDownloader } from "../components/AudioDownloader"

const App = () => {

  const { data, refetch } = useFetch("/readDirectory", "GET")

  return (
    <div className="p-5 rounded-xl overflow-hidden bg-slate-600 border-2 border-red-800 shadow-lg w-fit h-fit">
      <h1 className="font-bold text-center text-slate-200">SoundBar</h1>
      <LoadAudio />
      <AudioList list={data} />
      <AudioDownloader refetch={refetch} />
    </div>
  )
}
export default App
