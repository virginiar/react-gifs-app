import { useRef, useState } from "react";

import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  // useRef: Referencia mutable que no causa re-render
  const gifsCache = useRef<Record<string, Gif[]>>({})

  const handleTermClicked = async (term: string) => {
    // console.log(term);

    // Comprobar caché con gifsCache fuera de useGifs
    // if (gifsCache[term]) {
    //   setGifs(gifsCache[term]);
    //   return;
    // }

    // Comprobar caché con gifsCache con useRef
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string) => {
    // 2. Convertir el **query a minúsculas y eliminar espacios** en blanco
    query.trim().toLowerCase();
    // 1. Validar que el query **no esté vacío**
    if (query.length === 0) return;
    // 3. **Evitar búsquedas duplicadas** verificando si el término
    // ya existe en previousTerms ( si existe, no hacer nada )
    if (previousTerms.includes(query)) return;
    // 4. Actualizar previousTerms **agregando el nuevo término al inicio y
    // limitando a 8 elementos** máximo, es decir no puede ser un arreglo de más de 8.
    setPreviousTerms([query, ...previousTerms].splice(0, 8));
    // Efectuar la petición HTTP
    const gifs = await getGifsByQuery(query);
    // console.log(gifs);
    setGifs(gifs);

    // Gestionando caché con variable externa
    // gifsCache[query] = gifs;
    // Gestionando caché con useRef
    gifsCache.current[query] = gifs;
    console.log(gifsCache);
  };;

  return {
    // Values
    gifs,
    previousTerms,

    // Methods
    handleSearch,
    handleTermClicked,
  };
};
