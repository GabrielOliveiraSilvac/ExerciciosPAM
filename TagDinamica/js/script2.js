async function buscandoDados(url) {
    let resp = await fetch(url)
    let dados = await resp.json()
    return dados   
}

export {buscandoDados}