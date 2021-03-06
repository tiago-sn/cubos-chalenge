const search_movie_by_name =
  "https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher";

const by_genre =
  "https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&sort_by=popularity.desc&page=1&with_genres=99";
// organizado pro popularidade
// gênero: documentário, id: 99

const by_id = "https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>";

const configuration =
  "https://api.themoviedb.org/3/configuration?api_key=<<api_key>>";

const genre_list =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>";
