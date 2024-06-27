import { useState, useEffect } from 'react';

export const AudioCircle = () => {

    const [inputVisible, setInputVisible] = useState(false)
    const [isVisible, setIsVisible] = useState(false);
    const [wKeyPressed, setWKeyPressed] = useState(false);
    const [aKeyPressed, setAKeyPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'w') {
                setWKeyPressed(true);
            }
            if (event.key === 'a') {
                setAKeyPressed(true);
            }
        };

        const handleKeyUp = (event) => {
            if (event.key === 'w') {
                setWKeyPressed(false);
            }
            if (event.key === 'a') {
                setAKeyPressed(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useEffect(() => {
        setIsVisible(wKeyPressed && aKeyPressed);
    }, [wKeyPressed, aKeyPressed]);

    return (
        <div>
            {isVisible &&
                <div className='text-red-500'>
                    Componente visible
                </div>
            }


            <div>Presiona W + A simultáneamente para mostrar el componente</div>

            <div className='flex flex-col space-y-3 w-fit'>
                <button className='p-1 rounded-md bg-yellow-500 border-2 border-white hover:bg-yellow-800 hover:scale-110 hover:text-white transition-all duration-300 shadow-xl w-fit' onClick={() => setInputVisible(!inputVisible)}>Editar hot-key</button>
                <input type="text" className={`${!inputVisible && "hidden"} rounded-md border-white border-2 bg-transparent animate-pulse`} placeholder='Ingrese sus hot-keys' />
            </div>
        </div>
    );
};
