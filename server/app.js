import express from "express"
import morgan from "morgan";
import cors from "cors";
import "dotenv/config"
import path from "node:path";
import { fileURLToPath } from 'node:url';
import {downloadRouter} from "./routes/download.routes.js"
import {readRouter} from "./routes/directory.routes.js"

// * CREACION DE LA RUTA ABSOLUTA
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname + '/public'); 

console.log(__dirname);


const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.static(publicPath))

// * RUTAS
app.use(downloadRouter)
app.use(readRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
