const datos_personales = {
    nombre: "Kevin",
    apelllido: "Aranda",
    edad: 22,
    altura: 1.76,
    desarrolador: true
}

let edad = datos_personales.edad;

//lista de obj
const datos = [{
    nombre: "Kevin",
    apelllido: "Aranda",
    edad: 22,
    altura: 1.76,
    desarrolador: true
},
{
    nombre: "Noe",
    apelllido: "Monje",
    edad: 32,
    altura: 1.60,
    desarrolador: false
},
{
    nombre: "Alexis",
    apelllido: "Moreno",
    edad: 22,
    altura: 1.76,
    desarrolador: false
}]

//ordenar la lista de obj 

datos.sort((a, b) => b.edad - a.edad)


console.log(datos)
