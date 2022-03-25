const getFetch  = (url, handelDom) =>{
    fetch(url, { method: 'GET' })
    .then(data => data.json())
    .then(handelDom())
    .catch((err) => {
        throw new Error(err)
    })
}

