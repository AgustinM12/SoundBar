import ytdl from "ytdl-core";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from 'node:url';

// * CREACION DE LA RUTA ABSOLUTA
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const audioPath = path.join(__dirname, "../");
// ! NO SE UTILIZA AQUI

export async function downloadAudioService(url, options) {
    try {
        console.log("Empezó la descarga");
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
        const filename = `${title}.mp3`;
        const directory = 'public/audios';

        // * Verificar si el directorio 'audios' existe, si no, crearlo
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
        }

        const filePath = path.join(directory, filename);
        const writeStream = fs.createWriteStream(filePath);

        ytdl(url, options)
            .pipe(writeStream)
            .on('finish', () => {
                console.log(`El archivo ${filename} se ha guardado en: ${filePath}`);
                return filePath;
            });

    } catch (error) {
        console.error('Ocurrió un error en la descarga:', error);
        throw error;
    }
}
