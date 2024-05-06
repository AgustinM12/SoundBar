import { useAudioUploader } from "../hooks/useAudioUpload.js"

export const LoadAudio = () => {

    const { audioFile, uploadAudio } = useAudioUploader();

    return (

        <div>
            <h2 className="font-bold text-slate-200 underline">Cargar Audios</h2>
            <input type="file" onChange={uploadAudio} accept=".mp3" className="rounded-xl hover:text-fuchsia-500 animate-pulse"/>

            {audioFile && (
                <audio controls>
                    <source src={audioFile} type="audio/mp3" />
                </audio>
            )}
        </div>
    )
}


