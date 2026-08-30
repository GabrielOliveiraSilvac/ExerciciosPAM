import { calcularMedia, definirStatus } from './opc.js'
import { atualizarTabela, calcularStatus } from './atualizar.js'
import { preencherTabela } from './preencher.js'

let trs = document.querySelectorAll('tbody tr')
let input = document.querySelector('.entrada')

// Preencher Tabela
trs = await preencherTabela(trs)
trs = atualizarTabela(trs, calcularMedia, definirStatus)
trs = calcularStatus(trs)
