const getFetch  = (url, data, handelDom) =>{
    fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    .then(data => data.json())
    .then(handelDom())
    .catch((err) => {
        throw new Error(err)
    })
}
module.exports = getFetch