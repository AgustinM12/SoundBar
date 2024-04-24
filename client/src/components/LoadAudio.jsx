import { useAudioUploader } from "../hooks/useAudioUpload.js"

export const AudioPlayer = () => {
    
    const { audioFile, uploadAudio } = useAudioUploader();

    return (

        <div>
            <h1>Audio Player</h1>
            <input type="file" onChange={uploadAudio} accept=".mp3" />

            {audioFile && (
                <audio controls>
                    <source src={audioFile} type="audio/mp3" />
                </audio>
            )}
        </div>
    )
}


