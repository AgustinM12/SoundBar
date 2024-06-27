import { LoadAudio } from "../components/LoadAudio"
import { AudioList } from "../components/AudioList"
import { useFetch } from "../hooks/useFetch"
import { AudioDownloader } from "../components/AudioDownloader"
import { AudioPlayer } from "../components/AudioPlayer"
import { AudioCircle } from "../components/AudioCircle"

const App = () => {

  const { data, refetch } = useFetch("/readDirectory", "GET")

  return (
    <main className="p-10 rounded-xl bg-slate-600 border-2 border-red-800 shadow-lg">

      <div className="flex flex-row-reverse items-center justify-around pb-10">
        <h1 className="text-2xl font-bold text-right text-slate-200">Electron SoundBar</h1>

        <div className="justify start">
          <AudioPlayer />
        </div>
      </div>

      {/* //!NAVEGACION */}
      <div className="flex justify-around border-t-2 py-2 space-x-5">
        <button className="bg-neutral-200 rounded-md px-5 flex-1 py-1 hover:scale-105 hover:bg-neutral-500 transition-all duration-300 hover:text-white">INICIO</button>
        <button className="bg-neutral-200 rounded-md px-5 flex-1 py-1 hover:scale-105 hover:bg-neutral-500 transition-all duration-300 hover:text-white">RECORTE DE AUDIO</button>
        <button className="bg-neutral-200 rounded-md px-5 flex-1 py-1 hover:scale-105 hover:bg-neutral-500 transition-all duration-300 hover:text-white">AJUSTES</button>
        <button className="bg-neutral-200 rounded-md px-5 flex-1 py-1 hover:scale-105 hover:bg-neutral-500 transition-all duration-300 hover:text-white">GUIA</button>
      </div>

      <div className="grid grid-cols-5 grid-rows-1 space-x-16 pt-5">

        {/* //! LISTA DE AUDIOS */}
        <div className="col-span-4 space-y-5">
          <AudioList list={data} />
        </div>

        {/* //!DESCARGA Y CARGA DE AUDIOS */}
        <div className="col-span-1 space-y-4">
          <LoadAudio />
          <AudioDownloader refetch={refetch} />
        </div>
      </div>


      {/* //! OVERLAY CIRCLE */}
      {/* <div className="justify-center items-center z-50 absolute">
        <AudioCircle />
      </div> */}



    </main>
  )
}
export default App
