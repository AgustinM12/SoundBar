import { useState, useEffect } from "react";
import { serverRoutes } from "../data/env"

const { mainRoute } = serverRoutes;

export function useFetch(url) {

    const route = `${mainRoute}${url}`;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {

            const response = await fetch(route, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();
            setData(result);
            setLoading(false);

        } catch (error) {
            console.error("Error al realizar la petición", error);
        }
    }

    async function refetch() {
        await fetchData();
    };

    useEffect(() => {
        fetchData()
    }, [url]);

    return { data, loading, refetch };
}