    
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


/* twiter */
/*
consumer_key = "clZVWlFYNWxLb21HcThXc2pCY3Y6MTpjaQ"
#consumer_secret = "nYy6qQ0RufHBZqBwW2vc-0AyYNB0UuM0OH0baT5zdI048v78Xt"
#access_token = "66725480-OmTNNDM6m114qIAK15OHGAC7ZIT4erS28bfBJG08m"
#access_token_secret = "1WpCSnKoKUMEemvSGUdM4TUE35ZNhJfYITdOmDZO2RWa1"
*/

  // Credenciais da API do Twitter (substitua pelos seus próprios valores)
  const consumerKey = 'clZVWlFYNWxLb21HcThXc2pCY3Y6MTpjaQ';
  const consumerSecret = 'nYy6qQ0RufHBZqBwW2vc-0AyYNB0UuM0OH0baT5zdI048v78Xt';
  const accessToken = '66725480-OmTNNDM6m114qIAK15OHGAC7ZIT4erS28bfBJG08m';
  const accessTokenSecret = '1WpCSnKoKUMEemvSGUdM4TUE35ZNhJfYITdOmDZO2RWa1';


  // Lista de tweetIds que você deseja incorporar (substitua pelos seus próprios valores)
  const tweetIds = [
    '1682006377655422976', // Tweet ID 1
    '1681770379314884610', // Tweet ID 2
    '5678901234567890123'  // Tweet ID 3
    // Adicione mais tweetIds, se necessário
  ];


  // URL da API do Twitter
  const apiUrlBase = 'https://api.twitter.com/2/tweets/';

  // Método para fazer a solicitação à API do Twitter usando jQuery
  function loadTweets() {
    const tweetsContainer = document.getElementById('tweetsContainer');

    tweetIds.forEach(tweetId => {
      const apiUrl = `${apiUrlBase}${tweetId}`;
      $.ajax({
        url: apiUrl,
        type: 'GET',
        headers: {
          'Authorization': `OAuth oauth_consumer_key="${consumerKey}", oauth_token="${accessToken}", oauth_signature_method="HMAC-SHA1"`
        },
        success: function (data) {
          // Extrair informações relevantes do tweet
          const tweetText = data.data.text;
          const authorName = data.includes.users[0].name;
          const authorUsername = data.includes.users[0].username;
          const authorProfileImage = data.includes.users[0].profile_image_url;

          // Formatar o tweet e exibi-lo no contêiner
          const tweetHTML = `
            <div class="tweet-container">
              <img src="${authorProfileImage}" alt="${authorName}" width="50" height="50">
              <strong>${authorName}</strong> (@${authorUsername})<br>
              <p>${tweetText}</p>
            </div>
          `;
          tweetsContainer.innerHTML += tweetHTML;
        },
        error: function (error) {
          console.error('Erro ao carregar o tweet:', error);
        }
      });
    });
  }

  // Carregar os tweets quando a página for carregada
  $(document).ready(loadTweets);



