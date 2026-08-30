function atualizarTabela(trs, calcularIMC, definirIMC){
    for (let index = 0; index < trs.length; index++) {
        let filho = trs[index].children

        let altura = parseFloat(filho[2].textContent)
        let peso = parseFloat(filho[3].textContent)
    
        let tdStatus = filho[5]

        let IMC = calcularIMC(altura, peso)
        let tdIMC = filho[4]
        tdIMC.textContent = IMC.toFixed(2)
        let status = definirIMC(IMC, tdStatus)
    }
    return trs
}

function colorirImc(trs){
    trs.forEach(tr => {
        let filhos = tr.children
        let status = filhos[5]

        if(status.textContent == 'Obesidade Grau III (Mórbida)' || status.textContent == 'Abaixo do Peso'){
            tr.classList.add('n1')
        }
        else if(status.textContent =='Peso Normal'){
            tr.classList.add('n2')
        }
        else{
            tr.classList.add('n3')
        }
    })
    return trs
}

// filtro na tabela
function filtro(trs, input){
    input.addEventListener('input', ()=>{

        //let texto = entrada.value
        let esconder = true

        trs.forEach(tr => {
            tr.visible = true
            let tds = tr.children
            
                    
            if(!tds[5].textContent.includes(input.value)){
                tr.visible = false      
            }
            
            console.log(tr.visible)
            
            if(tr.visible){
                tr.style.display = 'table-row'
            } else {
                tr.style.display = 'none'
            }
        })
        console.log('----')

    })
    return trs
}

export{ atualizarTabela, colorirImc, filtro}