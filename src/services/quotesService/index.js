export const quotesService = () => fetch('https://api.quotable.io/random').then((response)=>response.json());