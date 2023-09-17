const API_KEY = "b04a4d29fa7cbdec4d7960abf964d46f";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  // fetchTopRated: `/discover/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;