const getFetch  = (url, handelDom) =>{
    fetch(url, { method: 'GET' })
    .then(data => data.json())
    .then((json) => handelDom(json))
    .catch((err) => console.error(err.message));
}

