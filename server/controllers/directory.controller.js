import fs from "fs-extra"
import { log } from "node:console";
import path from "node:path";
import { fileURLToPath } from 'node:url'

// * CREACION DE LA RUTA ABSOLUTA
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const audioPath = path.join(__dirname, "../public/audios");

export async function readDirectory(req, res) {
    try {

        const files = await fs.readdir(audioPath);
        const mp3Files = files.filter(file => file.endsWith('.mp3'));
        return res.status(200).json(mp3Files);
    } catch (error) {
        console.error("Error al leer los archivos del directorio", error);
    }
}
