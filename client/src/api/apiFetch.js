
import { serverRoutes } from "../data/env"

const { mainRoute } = serverRoutes;

export async function apiFetch(url, method, payload) {
    console.log(payload);

    
    const route = `${mainRoute}${url}`;

    try {
        const response = await fetch(route, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const data = await response.json();

        return { data }

    } catch (error) {
        console.error("Error al realizar la petición", error);
    } 
}