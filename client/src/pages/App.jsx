import { AudioPlayer } from "../components/LoadAudio"
import { AudioList } from "../components/AudioList"
import { useFetch } from "../hooks/useFetch"
import { AudioDownloader } from "../components/AudioDownloader"

const App = () => {

  const { data, refetch } = useFetch("/readDirectory", "GET")

  return (
    <div>
      <h2>Reproductor de MP3</h2>
      <AudioPlayer />
      <AudioList list={data}/>
      <AudioDownloader refetch={refetch}/>
    </div>
  )
}
export default App
