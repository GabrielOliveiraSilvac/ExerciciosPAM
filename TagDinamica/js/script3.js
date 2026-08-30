function gerandoHtml(textoTag){
    let novaTag = document.createElement(textoTag)
    return novaTag
}

function gerandoLinhas(dados){
    let tr = gerandoHtml('tr')
    let td1 = gerandoHtml('td')
    let td2 = gerandoHtml('td')
    let td3 = gerandoHtml('td')

    td1.textContent = dados.id
    td2.textContent = dados.date
    td3.textContent = dados.products[0].quantity

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    return tr
}

function gerandoLinhas2(dados){
    let tr = gerandoHtml('tr')
    let td1 = gerandoHtml('td')
    let td2 = gerandoHtml('td')
    let td3 = gerandoHtml('td')

    td1.textContent = dados.id
    td2.textContent = dados.title
    td3.textContent = dados.price

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    return tr
}

function gerandoLinhas3(dados){
    let tr = gerandoHtml('tr')
    let td1 = gerandoHtml('td')
    let td2 = gerandoHtml('td')
    let td3 = gerandoHtml('td')
    let td4 = gerandoHtml('td')

    td1.textContent = dados.id
    td2.textContent = dados.email
    td3.textContent = dados.username
    td4.textContent = dados.password

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    return tr
}

export {gerandoLinhas, gerandoLinhas2, gerandoLinhas3}