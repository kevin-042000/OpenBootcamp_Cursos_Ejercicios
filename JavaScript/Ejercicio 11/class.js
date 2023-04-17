class estudiante {
    constructor(nombre){
        this.nombre = nombre
        this.asignaturas = ["Javascript", "Html", "Css"]
}

obtenerDatos() {
    return {
       nombre: this.nombre,
       asignaturas: this.asignaturas
    }  
}
}

const estudiante1 = new estudiante("kevin")

console.log(estudiante1.obtenerDatos())