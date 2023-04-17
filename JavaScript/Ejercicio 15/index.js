let nombre = "Kevin"
let apellido = "Aranda"

let obj_persona = {
    nombre: nombre,
    apellido: apellido,
}


sessionStorage.setItem("persona", JSON.stringify(obj_persona))

localStorage.setItem("persona", JSON.stringify(obj_persona))

//expira en dos minutos
const expiracion_cookie = new Date(Date.now() + 2 * 60 * 1000);

// Convertir la fecha de expiración en una cadena UTC
const expiracionUTC = expiracion_cookie.toUTCString();

// Convertir el objeto persona en una cadena JSON
const personaJSON = JSON.stringify(obj_persona);


// Establecer la cookie con la cadena JSON y la fecha de expiración
document.cookie = `persona=${personaJSON}; expires=${expiracionUTC}`;
