    
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
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 1000,
      arrows: false, // Remover os botões "Previous" e "Next"
      responsive: [
        {
          breakpoint: 730, // Ponto de corte para tela pequena
          settings: {
            slidesToShow: 2 // Número de slides para tela pequena
          }
        }
      ]
    });

    

  $('.carousel-small').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      arrows: false, // Remover os botões "Previous" e "Next"
  });

  getCoinValues();
});

setInterval(getCoinValues, 10000);


window.addEventListener('scroll', function () {
  const featuredColumn = document.querySelector('.featured');
  const rect = featuredColumn.getBoundingClientRect();
  const offset = window.innerHeight / 2; // Pode ajustar o valor do offset conforme necessário

  if (rect.top < offset && rect.bottom >= offset) {
    featuredColumn.style.transform = `scale(1.1)`; // Ajuste o efeito de destaque aqui
  } else {
    featuredColumn.style.transform = `scale(1)`; // Remova o destaque se a coluna não estiver no centro
  }
});

/*twiter carrocel
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleTwitterLinks() {
  const container = document.getElementById('twitterContainer');
  const divs = container.querySelectorAll('div');
  const divsArray = Array.from(divs);

  shuffleArray(divsArray);

  // Remover todos os elementos atuais do container
  while (container.firstChild) {
      container.removeChild(container.firstChild);
  }

  // Adicionar os elementos embaralhados de volta ao container
  divsArray.forEach(div => {
      container.appendChild(div);
  });
}

// Chamar a função inicialmente e a cada 5 segundos
shuffleTwitterLinks();
setInterval(shuffleTwitterLinks, 5000); 
*/
 // Substitua 'sua-chave-api-aqui' pela sua chave de API da CoinMarketCap
 const apiKey = '79c970ec-adec-47d0-8539-0b2a03a1b660';
 const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

 // Função para obter os dados da API e exibir na página
 function getTopCryptos() {
     $.ajax({
         url:'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
         headers: {
             'X-CMC_PRO_API_KEY': '79c970ec-adec-47d0-8539-0b2a03a1b660',
         },
         method: 'GET',
         dataType: 'json',
         success: function (data) {
             const topCryptos = data.data.slice(0, 10); // Obtem os 10 primeiros ativos
             const cryptoList = $('#cryptoList');
             cryptoList.empty();
             topCryptos.forEach(crypto => {
                 cryptoList.append(`<li>${crypto.name} - ${crypto.symbol} - USD ${crypto.quote.USD.price}</li>`);
             });
         },
         error: function (error) {
             console.error('Erro ao obter dados da API:', error);
         }
     });
 }

 // Chama a função para obter os dados quando a página carregar
 $(document).ready(function () {
     getTopCryptos();
 });

