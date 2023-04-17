//lista de compras
let lista_compras = ["arroz", "pan", "pollo", "papas", "tomates"];

//insertar 
lista_compras.push("aceite de girasol");

//eliminar
lista_compras.pop();

//peliculas favoritas obj
let peliculas_fav = [
    {
    titulo: "Hasta el ultimo hombre",
    director: "Mel Gibson",
    fecha: 2016
},
{
    titulo: "Corazones de acero",
    director: "David Ayer",
    fecha: 2014
},
{
    titulo: "rescatando al soldado ryan",
    director: "Saving Private Ryan",
    fecha: 1998
}
]
// filtrar por fecha
let lista_pelis_posterior_2010 = peliculas_fav.filter(peli => peli.fecha > 2010);


// directores
let directores = peliculas_fav.map(director => director.director);

//titulo de las peliculas

let titulos = peliculas_fav.map(titulo => titulo.titulo);

// concadenando listas

let directores_peliculas = directores.concat(titulos);

//usando el factor de propagacion

let dir_pel_factor_propagacion =[...directores, ...titulos];
console.log(dir_pel_factor_propagacion)