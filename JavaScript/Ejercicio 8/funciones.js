function sin_parametros(){
    return true
}

console.log(sin_parametros())

/// una promesa
setTimeout(function(){
    console.log("Hola soy una promesa");
}, 5000)


/// función generadora de índices pares automáticos
function* generar_indice(){
    let indice = 0;

    while(true) {
        indice++
        if (indice === 20){
            return indice
        }
        yield indice *2
    }
}

const generar = generar_indice();

console.log(generar.next().value)
console.log(generar.next().value)