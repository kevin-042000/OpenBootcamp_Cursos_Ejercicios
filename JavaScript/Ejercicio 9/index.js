// gestion de errores
const funcion_error = val => {
    if (typeof val === "string"){
        return  "que bien, es un string"
    }
    throw new Error("El valor debe de ser tipo string");
}

let variable = 5

try {
    const probando_errores = funcion_error(variable)
    console.log(probando_errores)

    console.log("Esta todo bien")
    
} catch (e) {
    console.error( `${e}`)
}