    
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


 /* codigo que funciono */ 
window.addEventListener("load", function() {
  $('.carousel').slick({
      infinite: true,
      slidesToShow: 11,
      slidesToScroll: 5,
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
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      arrows: false, // Remover os botões "Previous" e "Next"
  });

  getCoinValues();
});

setInterval(getCoinValues, 10000);
/* */

const previousValues = {}; // Armazenar os valores anteriores dos tokens

function getCoinValues() {
  // Buscar os preços dos tokens na API do CoinGecko
  const tokens = ['bitcoin', 'ethereum', 'litecoin', 'binancecoin', 'ripple', 'cardano', 'solana', 'dogecoin', 'polygon', 'tron', 'polkadot', 'avalanche'];
  const tokenIds = tokens.join(',');

  fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${tokenIds}&vs_currencies=usd`)
    .then(response => response.json())
    .then(data => {
      // Atualizar os valores dos tokens no carrossel
      for (const token of tokens) {
        const currentValue = data[token].usd;
        const previousValue = previousValues[token];
        const valueSpan = document.getElementById(`${token}-value`);
        const percentageSpan = document.getElementById(`${token}-percentage`);

        valueSpan.textContent = currentValue.toFixed(2);
        if (previousValue !== undefined) {
          const priceChange = currentValue - previousValue;
          const percentageChange = ((currentValue - previousValue) / previousValue) * 100;

          if (priceChange > 0) {
            valueSpan.classList.add('price-up');
            valueSpan.classList.remove('price-down');
            percentageSpan.textContent = `(+${percentageChange.toFixed(2)}%)`;
          } else if (priceChange < 0) {
            valueSpan.classList.add('price-down');
            valueSpan.classList.remove('price-up');
            percentageSpan.textContent = `(${percentageChange.toFixed(2)}%)`;
          } else {
            valueSpan.classList.remove('price-up', 'price-down');
            percentageSpan.textContent = `(0.00%)`;
          }
        }

        previousValues[token] = currentValue;
      }
    })
    .catch(error => {
      console.log('Erro ao obter cotações de criptomoedas:', error);
    });
}




