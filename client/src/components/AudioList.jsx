import { useState } from 'react';
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
                    <li className='flex justify-between' key={index}>
                        <a
                            className="text-white cursor-pointer hover:text-fuchsia-500"
                            href="#"
                            onClick={() => handleAudioClick(audio)}
                        >
                            🔹{audio.slice(0, audio.length - 4)}
                        </a>

                        <div className='flex space-x-2'>

                            <button className='p-1 rounded-md transition-all duration-300 hover:scale-110 hover:bg-blue-800 bg-blue-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>
                            </button>


                            <button className='p-1 rounded-md transition-all duration-300 hover:scale-110 hover:bg-yellow-800 bg-yellow-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                            </button>
                            <button className='p-1 rounded-md transition-all duration-300 hover:scale-110 hover:bg-red-800 bg-red-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            </button>
                        </div>
                    </li>

                ))}
            </ul>
        </>
    );
};
