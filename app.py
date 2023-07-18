import tweepy
from flask import Flask, jsonify

# Substitua essas informações com as suas chaves da API do Twitter
consumer_key = "YZF5jcVAZgyrXPy21PGwFZgm9"
consumer_secret = "UK0bFernDnDCdZBnEOvAAo2v8e9QsivaIUefo5amE6nBUMoPw0"
access_token = "66725480-OmTNNDM6m114qIAK15OHGAC7ZIT4erS28bfBJG08m"
access_token_secret = "1WpCSnKoKUMEemvSGUdM4TUE35ZNhJfYITdOmDZO2RWa1"

# Autenticação com a API do Twitter
def create_api():
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)
    try:
        api.verify_credentials()
        print("Autenticação bem-sucedida!")
        return api
    except tweepy.TweepError as e:
        print("Erro durante a autenticação: ", str(e))

app = Flask(__name__)

# Rota para obter os tweets em formato JSON
@app.route('/get_tweets')
def get_tweets():
    api = create_api()
    user_tweets = api.user_timeline(screen_name="nome_do_usuario", count=5)
    tweets = [{'text': tweet.text} for tweet in user_tweets]
    return jsonify(tweets)

if __name__ == '__main__':
    app.run(debug=True)
    
    # Agora você pode usar o objeto 'api' para interagir com a API do Twitter.
    # Por exemplo, você pode buscar tweets, postar tweets e realizar outras operações.
    # Para buscar tweets da timeline de um usuário específico, você pode usar:
    # user_tweets = api.user_timeline(screen_name="nome_do_usuário", count=10)
    # Para postar um tweet, você pode usar:
    # api.update_status("Seu tweet aqui")

#consumer_key = "66725480-8AodydiRaxkxiGH2OlaqhN93pd8Cw7FD60mVbIZ65"
#consumer_secret = "FwJFxJqyA91V9IhsDyyKxvUcXm2QrbGMdiKTTT0El98qj"
#access_token = "3clkbZNjXNRH8Dg6U2DsEFPwW"
#access_token_secret = "Kd1GQZlvw4sf1yFpuKqI40bsQSZ62ZipZGJmmGhE0w5lo5gpVP"

   
#bearer token AAAAAAAAAAAAAAAAAAAAABhwowEAAAAAJv4GF5IAnkfznznbP1L682djO8E%3DYGgYqd1p3dMHtlnAVDooKyhwEnQe8rN1kdODDpIvuKiBdmuYJN

#Access Token 66725480-OmTNNDM6m114qIAK15OHGAC7ZIT4erS28bfBJG08m

#Access Token Secret 1WpCSnKoKUMEemvSGUdM4TUE35ZNhJfYITdOmDZO2RWa1

#API Key YZF5jcVAZgyrXPy21PGwFZgm9

#API Key Secret UK0bFernDnDCdZBnEOvAAo2v8e9QsivaIUefo5amE6nBUMoPw0

