 /* crutomoedas*/
/*
 function getCoinValues() {
    const coins = ["bitcoin", "ethereum", "litecoin"];
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(",")}&vs_currencies=usd`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("btc-value").textContent = data.bitcoin.usd;
            document.getElementById("eth-value").textContent = data.ethereum.usd;
            document.getElementById("ltc-value").textContent = data.litecoin.usd;
        })
        .catch(error => console.log(error));
}

window.addEventListener("load", getCoinValues);
setInterval(getCoinValues, 10000); */

function getCoinValues() {
    // Código para obter os valores das criptomoedas em tempo real
    function getCoinValues() {
        const coins = ["bitcoin", "ethereum", "litecoin", "binance coin", "xrp"];
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(",")}&vs_currencies=usd`;
    
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,binancecoin,xrp,cardano,solana,dogecoin,polygon,tron,polkadot,axie-infinity&vs_currencies=usd')
            .then(response => response.json())
            .then(data => {
                document.getElementById("btc-value").textContent = data.bitcoin.usd;
                document.getElementById("eth-value").textContent = data.ethereum.usd;
                document.getElementById("ltc-value").textContent = data.litecoin.usd;
                document.getElementById("bnb-value").textContent = data.binancecoin.usd;
                document.getElementById("xrp-value").textContent = data.xrp.usd;
                document.getElementById("ada-value").textContent = data.cardano.usd;
                document.getElementById("sol-value").textContent = data.solana.usd;
                document.getElementById("doge-value").textContent = data.dogecoin.usd;
                document.getElementById("matic-value").textContent = data.polygon.usd;
                document.getElementById("trx-value").textContent = data.tron.usd;
                document.getElementById("dot-value").textContent = data.polkadot.usd;
                document.getElementById("axax-value").textContent = dataaxie-infinity.usd;
            })
            .catch(error => console.log(error));
    }
    
    window.addEventListener("load", getCoinValues);
    setInterval(getCoinValues, 10000); 
    // Resto do seu código para atualizar os valores das criptomoedas


} 




window.addEventListener("load", function() {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000
    });

    getCoinValues();
});

setInterval(getCoinValues, 10000);

/*window.addEventListener("load", function() {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000
    });

    getCoinValues();
});

setInterval(getCoinValues, 10000); */
  