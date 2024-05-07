import { useState } from 'react';
import { useFetch } from "../hooks/useFetch";
import { serverRoutes } from "../data/env";

const { publicRoute } = serverRoutes;

export const AudioList = ({ list }) => {
    const [selectedAudio, setSelectedAudio] = useState("");

    const handleAudioClick = (audio) => {
        setSelectedAudio(audio);
    };

    return (
        <>
            <h2 className="font-bold text-slate-200 underline">Lista de audios</h2>

            {/* Reproductor de audio */}
            <audio controls autoPlay src={publicRoute + selectedAudio}>
                Your browser does not support the audio element.
            </audio>

            <ul>
                {list.map((audio, index) => (
                    <li key={index}>
                        <a
                            className="text-white cursor-pointer hover:text-fuchsia-500"
                            href="#"
                            onClick={() => handleAudioClick(audio)}
                        >
                            🔹{audio.slice(0, audio.length - 4)}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};
