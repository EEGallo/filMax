import { insertCard } from "./funciones.js";


let movies;

async function loadData() {
    const response =await fetch('../data/data.json');
    movies = await response.json();
    showOnScreen(movies);
}

loadData();

function showOnScreen(movies) {
    movies.forEach(insertCard);
}


// Ejecutamos las funciones de carga de películas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Cargamos las películas en el carrusel de películas aclamadas
    fetchMoviesFlex();
});