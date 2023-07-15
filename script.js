

  $(document).ready(function() {
    fetch('https://api.coincap.io/v2/assets?limit=20')
      .then(response => response.json())
      .then(data => {
        const cryptoQuotes = data.data;
  
        const btcValue = cryptoQuotes.find(crypto => crypto.symbol === 'BTC');
        document.getElementById('btc-value').textContent = parseFloat(btcValue.priceUsd).toFixed(2);
  
        const ethValue = cryptoQuotes.find(crypto => crypto.symbol === 'ETH');
        document.getElementById('eth-value').textContent = parseFloat(ethValue.priceUsd).toFixed(2);
  
        const ltcValue = cryptoQuotes.find(crypto => crypto.symbol === 'LTC');
        document.getElementById('ltc-value').textContent = parseFloat(ltcValue.priceUsd).toFixed(2);
  
        const bnbValue = cryptoQuotes.find(crypto => crypto.symbol === 'BNB');
        document.getElementById('bnb-value').textContent = parseFloat(bnbValue.priceUsd).toFixed(2);
  
        const xrpValue = cryptoQuotes.find(crypto => crypto.symbol === 'XRP');
        document.getElementById('xrp-value').textContent = parseFloat(xrpValue.priceUsd).toFixed(2);
  
        const adaValue = cryptoQuotes.find(crypto => crypto.symbol === 'ADA');
        document.getElementById('ada-value').textContent = parseFloat(adaValue.priceUsd).toFixed(2);
  
        const solValue = cryptoQuotes.find(crypto => crypto.symbol === 'SOL');
        document.getElementById('sol-value').textContent = parseFloat(solValue.priceUsd).toFixed(2);
  
        const dogeValue = cryptoQuotes.find(crypto => crypto.symbol === 'DOGE');
        document.getElementById('doge-value').textContent = parseFloat(dogeValue.priceUsd).toFixed(2);
  
        const maticValue = cryptoQuotes.find(crypto => crypto.symbol === 'MATIC');
        document.getElementById('matic-value').textContent = parseFloat(maticValue.priceUsd).toFixed(2);
  
        const trxValue = cryptoQuotes.find(crypto => crypto.symbol === 'TRX');
        document.getElementById('trx-value').textContent = parseFloat(trxValue.priceUsd).toFixed(2);
  
        const dotValue = cryptoQuotes.find(crypto => crypto.symbol === 'DOT');
        document.getElementById('dot-value').textContent = parseFloat(dotValue.priceUsd).toFixed(2);
  
        const avaxValue = cryptoQuotes.find(crypto => crypto.symbol === 'AVAX');
        document.getElementById('avax-value').textContent = parseFloat(avaxValue.priceUsd).toFixed(2);
      })
      .catch(error => {
        console.log('Erro ao obter cotações de criptomoedas:', error);
      });
  });



  /* */

 // Seu JavaScript existente
 function getCoinValues() {
    // Lógica para obter os valores das moedas
} 


 /* codigo que funciono */
window.addEventListener("load", function() {
  $('.carousel').slick({
      infinite: true,
      slidesToShow: 11,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      arrows: false, // Remover os botões "Previous" e "Next"
      responsive: [
        {
          breakpoint: 730, // Ponto de corte para tela pequena
          settings: {
            slidesToShow: 4 // Número de slides para tela pequena
          }
        }
      ]
    });

  $('.carousel-small').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      arrows: false, // Remover os botões "Previous" e "Next"
  });

  getCoinValues();
});

setInterval(getCoinValues, 10000);








