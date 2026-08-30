
async function preencherTabela(trs){
    // método para realizar requisições
    let promise = await fetch('./script/bd.json')
    let pessoas = await promise.json()
    console.log(pessoas)
    
    for (let index = 0; index < trs.length; index++){
        let filhos = trs[index].children
    
        filhos = Array.from(filhos)
    
        filhos[0].textContent = pessoas[index].Nome
        filhos[1].textContent = pessoas[index].Idade
        filhos[2].textContent = pessoas[index]["Altura (m)"]
        filhos[3].textContent = pessoas[index]["Peso (kg)"]
    }

    return trs
}

export {preencherTabela}