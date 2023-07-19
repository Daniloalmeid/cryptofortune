/*consumer_key: 'iaRpQX98jD9VHkQqWZcUb2Pe3',
consumer_secret: 'O0BLqzy0fGeNYH7biTSUJo11MndHSCjsRQrUAK3v49zfKUcV73',
access_token: '66725480-vbVWyX3TWGkwAijjVQuDRX6AjNVOZwX5hfthlJF7F',
access_token_secret: 'jVF92oHIxE1gceV98r2u2QzZYdXExvjQt4hoJwCKxxZnc' */




// Importando a biblioteca twit
const Twit = require('twit');

// Configurações de autenticação da API do Twitter
const config = {
    consumer_key: 'iaRpQX98jD9VHkQqWZcUb2Pe3',
    consumer_secret: 'O0BLqzy0fGeNYH7biTSUJo11MndHSCjsRQrUAK3v49zfKUcV73',
    access_token: '66725480-vbVWyX3TWGkwAijjVQuDRX6AjNVOZwX5hfthlJF7F',
    access_token_secret: 'jVF92oHIxE1gceV98r2u2QzZYdXExvjQt4hoJwCKxxZnc',
};

// Criando uma nova instância do Twit com as configurações de autenticação
const twitter = new Twit(config);

// Função para obter as informações do perfil do usuário e o texto de um tweet específico
function getTweetInfo() {
  // ID do tweet que queremos obter
  const tweetId = '1681130334526611457'; // Substitua pelo ID do tweet desejado

  // Fazendo a requisição para a API do Twitter para obter o tweet pelo ID
  twitter.get('statuses/show/:id', { id: tweetId }, (err, data, response) => {
    if (err) {
      console.error('Erro ao buscar o tweet:', err.message);
      return;
    }

    // Exibindo as informações do perfil do usuário
    console.log('Nome do usuário:', data.user.name);
    console.log('Nome de usuário (handle):', data.user.screen_name);
    console.log('Descrição do perfil:', data.user.description);
    console.log('Número de seguidores:', data.user.followers_count);
    console.log('Número de pessoas que o usuário segue:', data.user.friends_count);
    console.log('Número total de tweets do usuário:', data.user.statuses_count);

    // Exibindo as informações do tweet específico
    console.log('Texto do tweet:', data.text);
    console.log('Data de criação do tweet:', data.created_at);
    console.log('Fonte do tweet:', data.source);
    console.log('Número de retweets:', data.retweet_count);
    console.log('Tweet favoritado:', data.favorited);
  });
}

// Chama a função para obter as informações do perfil e do tweet quando o script é executado
getTweetInfo();