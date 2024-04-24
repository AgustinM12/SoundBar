import { useState } from 'react';

export const useAudioUploader = ( initialState = null ) => {

    const [audioFile, setAudioFile] = useState(initialState);

    const uploadAudio = (event) => {
        const audio = event.target.files[0];

        console.log(audio);

        if (audio && audio.type.startsWith('audio/mpeg')) {

            const reader = new FileReader();
            reader.onload = (e) => {
                setAudioFile(e.target.result);
            }
            reader.readAsDataURL(audio);

        } else {
            alert('El archivo debe ser de tipo MP3');
            setAudioFile(null); // Restablecer el estado del archivo de audio
        }
    }

    return { audioFile, uploadAudio };

}
