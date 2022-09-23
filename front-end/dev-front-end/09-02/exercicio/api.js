const url = 'https://api.coincap.io/v2/assets';
const url1 = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json'
const lista = document.getElementById('lista')
const getUsdValueBrl = async() => {
    const request = await fetch(url1);
    const data = await request.json();
    return data.usd.brl;
}
const getCripto = async() => {
    try {
        const request = await fetch(url);
        const data = await request.json();
        for(let x = 0; x < 10; x+= 1) {
            const name = data.data[x].id;
            const simbolo = data.data[x].symbol;
            const valor = Number(data.data[x].priceUsd);
            const element = document.createElement('li');
            const valorEmReal = valor * await getUsdValueBrl();
            element.innerText = `${name} ${simbolo}: ${valorEmReal}RS.`;
            lista.appendChild(element);
        }
    } catch (error) {
        console.log(error);
    }
}

window.onload = () => getCripto();