
function atualizarTabela(trs, calcularMedia, definirStatus){
    for (let index = 0; index < trs.length; index++) {
        let filho = trs[index].children

    
        let n1 = parseFloat(filho[1].textContent)
        let n2 = parseFloat(filho[1].textContent)
        let n3 = parseFloat(filho[1].textContent)

        let tdMedia = filho[4]
        let tdStatus = filho[5]

        let media = calcularMedia(n1, n2, n3)
        tdMedia.textContent = media.toFixed(2)
    

        definirStatus(media, tdStatus)
    }
    return trs
}


function calcularStatus(trs){
    trs.forEach(tr => {
        let filhos = tr.children
        let status = filhos[5]
       
        if(status.textContent == 'REPROVADO' || status.textContent == 'INVALIDO'){
            status.style.color = 'red'
            status.style.fontWeight = 'bold'
        } else if(status.textContent == 'RECUPERAÇÃO'){
        status.style.backgroundColor = 'gray'
        status.style.fontSize = '15px'
        } else {  
            status.style.border = '2px dashed rgb(26, 255, 0) '
        }
    })
}

export {atualizarTabela, calcularStatus}