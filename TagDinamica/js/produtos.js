import { gerandoLinhas, gerandoLinhas2, gerandoLinhas3 } from "./script3.js";
import { buscandoDados } from "./script2.js";

//Produtos
let dados3 = await buscandoDados('https://fakestoreapi.com/products') 

let table3 = document.querySelector('#table3')
for (let i = 0; i < dados3.length; i++) {
    let l = gerandoLinhas2(dados3[i])
    table3.append(l)
    console.log(dados3[i])
    
}