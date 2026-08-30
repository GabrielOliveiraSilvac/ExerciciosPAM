import { gerandoLinhas, gerandoLinhas2, gerandoLinhas3 } from "./script3.js";
import { buscandoDados } from "./script2.js";


//Usuarios
let dados4 = await buscandoDados('https://fakestoreapi.com/users')

let table4 = document.querySelector('#table4')
for (let i = 0; i < dados4.length; i++) {
    let l = gerandoLinhas3(dados4[i])
    table4.append(l)
    console.log(dados4[i])
    
}