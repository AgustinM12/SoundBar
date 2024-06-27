import { useAudioUploader } from "../hooks/useAudioUpload.js"

export const LoadAudio = () => {

    const { audioFile, uploadAudio } = useAudioUploader();

    return (

        <div className="relative">
            <h2 className="font-bold text-slate-200 underline pb-2">Cargar Audios locales</h2>
            <input
                type="file"
                onChange={uploadAudio}
                accept=".mp3"
                className="sr-only"
                id="fileUpload"
            />
            <button
                className="rounded-md bg-fuchsia-600 border-2 text-white p-1 hover:bg-fuchsia-800 font-semibold hover:scale-105 transition-all duration-300"
            >
                <label htmlFor="fileUpload" className="hover:cursor-pointer">
                    Cargar archivo
                </label>
            </button>
        </div>
    )
}


