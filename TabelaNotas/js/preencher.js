
async function preencherTabela(trs){
    // método para realizar requisições
    let promise = await fetch('./js/bd.json')
    let alunos = await promise.json()
    console.log(alunos)
    
    for (let index = 0; index < trs.length; index++){
        let filhos = trs[index].children
    
        filhos = Array.from(filhos)
    
        filhos[0].textContent = alunos[index].nome
        filhos[1].textContent = alunos[index].n1
        filhos[2].textContent = alunos[index].n2
        filhos[3].textContent = alunos[index].n3
    }

    return trs
}

export {preencherTabela}