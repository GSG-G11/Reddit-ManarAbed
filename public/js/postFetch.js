const postFetch  = (url, data, handelDom) =>{
    fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    .then((result) => result.json())
    .then((json) => {
      handelDom(json)
    }).catch();
}
