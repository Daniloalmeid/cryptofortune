function getCryptoQuotes() {
    const numberOfCryptos = 20; // Número de criptomoedas desejado
    const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${numberOfCryptos}&page=1&sparkline=false`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const cryptoQuotesElement = document.getElementById('crypto-quotes');
  
        data.forEach(crypto => {
          const { name, symbol, current_price } = crypto;
  
          const cryptoQuoteElement = document.createElement('div');
          cryptoQuoteElement.classList.add('crypto-quote');
  
          const cryptoNameElement = document.createElement('span');
          cryptoNameElement.classList.add('crypto-name');
          cryptoNameElement.textContent = `${name} (${symbol.toUpperCase()})`;
  
          const cryptoValueElement = document.createElement('span');
          cryptoValueElement.classList.add('crypto-value');
          cryptoValueElement.textContent = `$${current_price}`;
  
          cryptoQuoteElement.appendChild(cryptoNameElement);
          cryptoQuoteElement.appendChild(cryptoValueElement);
          cryptoQuotesElement.appendChild(cryptoQuoteElement);
        });
      })
      .catch(error => {
        console.log('Erro ao obter cotações de criptomoedas:', error);
      });
  }
  
  window.addEventListener('load', getCryptoQuotes);