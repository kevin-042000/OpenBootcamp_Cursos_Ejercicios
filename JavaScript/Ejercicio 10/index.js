import chalk from 'chalk'
import {suma, multiplicar} from './controller.js'

//importando modulos
const sum = suma(2, 2)

console.log(sum)


///usando una libreria para cambiar el color del resultado
const mult = chalk.green(multiplicar(5,5))
console.log(mult)