// Chama a função para buscar os tweets quando a página é carregada
document.addEventListener('DOMContentLoaded', getTweets);

twttr.widgets.createTimeline(
  {
    sourceType: "profile",
    screenName: "danilo_alexandr"
  },
  document.getElementById("twiter2")
);