import {calcularIMC, definirIMC} from './opc.js'
import{atualizarTabela, colorirImc, filtro} from './atualizar.js'
import{preencherTabela} from './preencher.js'

let trs = document.querySelectorAll('tbody tr')
let input = document.querySelector('.entrada')

// Preencher Tabela
trs = await preencherTabela(trs)
trs = atualizarTabela(trs, calcularIMC, definirIMC)
trs = colorirImc(trs)
trs = filtro(trs, input)
