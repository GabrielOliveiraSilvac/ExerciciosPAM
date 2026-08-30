import { gerandoLinhas, gerandoLinhas2, gerandoLinhas3 } from "./script3.js";
import { buscandoDados } from "./script2.js";

//Pedidos no Carrinho
let dados2 = await buscandoDados('https://fakestoreapi.com/carts')

let table2 = document.querySelector('#table2')
for (let i = 0; i < dados2.length; i++) {
    let l = gerandoLinhas(dados2[i])
    table2.append(l)
    console.log(dados2[i])
    
}

