function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/menu/menu_FILL0_wght400_GRAD0_opsz48.svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "imagens/menu/close.svg"
    }
}

/* cotacao cripto  */
function getCryptoQuotes() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd')
      .then(response => response.json())
      .then(data => {
        const cryptoQuotesElement = document.getElementById('crypto-carousel');
        const cryptocurrencies = Object.keys(data);
  
        cryptocurrencies.forEach(crypto => {
          const quote = data[crypto].usd;
          const slide = document.createElement('div');
          slide.classList.add('crypto-slide');
          slide.textContent = `${crypto}: $${quote}`;
          cryptoQuotesElement.appendChild(slide);
        });
  
        $('#crypto-carousel').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000
        });
      })
      .catch(error => {
        console.log('Erro ao obter cotações de criptomoedas:', error);
      });
  }
  
  $(document).ready(function() {
    getCryptoQuotes();
  });
  
/*
// Função para buscar as cotações das criptomoedas
function getCryptoQuotes() {
    // Fazer a chamada para a API de criptomoedas aqui
    // Exemplo usando a API CoinGecko:
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd')
      .then(response => response.json())
      .then(data => {
        // Manipular os dados da resposta da API e exibir as cotações
        const cryptoQuotesElement = document.getElementById('crypto-quotes');

        for (const crypto in data) {
          const quote = data[crypto].usd;
          const listItem = document.createElement('li');
          listItem.textContent = `${crypto}: $${quote}`;
          cryptoQuotesElement.appendChild(listItem);
        }
      })
      .catch(error => {
        console.log('Erro ao obter cotações de criptomoedas:', error);
      });
  }

  // Chamar a função para buscar as cotações quando a página carregar
  window.addEventListener('load', getCryptoQuotes);*/