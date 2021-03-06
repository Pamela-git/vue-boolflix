// variabili chiamata api
const urlMovie = "https://api.themoviedb.org/3/search/movie?";
const urlSerie = "https://api.themoviedb.org/3/search/tv?";
const apiKey = "api_key=54a6d59873b14d17cd7ea35eed688e38&query=";
const filmPopolari = "https://api.themoviedb.org/3/movie/popular?";
const seriePopolari = "https://api.themoviedb.org/3/tv/popular?";

var app = new Vue({
  el: "#root",
  data: {
    star: "starating",
    showIntro: true, //show titolo intro
    urlImg: 'https://image.tmdb.org/t/p/w342', //url fissa immagini
    queryInput: "", //input utente
    libreriaMovie: [], //arrayfilm
    libreriaSerie: [],  //arrayserie
  },
  // chiamate per serie tv e film popolari
  mounted: function() {
    axios.get(filmPopolari + apiKey)
    .then(risposta => {
      let popularFilm = risposta.data.results;
      this.libreriaMovie = popularFilm;
    });

    axios.get(seriePopolari + apiKey)
    .then(risposta => {
      let popularSerie = risposta.data.results;
      this.libreriaSerie = popularSerie;
    });


  },
  methods: {
    //chiamata film con input utente
    ricerca: function() {
      axios.get(urlMovie + apiKey + this.queryInput)
      .then(risposta => {
        let movie = risposta.data.results;
        this.libreriaMovie = movie;
      });
      // chiamata serie con input utente
      axios.get(urlSerie + apiKey + this.queryInput)
      .then(result => {
        let serie = result.data.results;
        this.libreriaSerie = serie;

      });
      // mettere titolo intro non visibile
      this.showIntro = false;
      // azzerare barra ricerca
      this.queryInput = "";

    },

  }

});
