var searchText;
if ((searchText = document.querySelector("#searchText"))) {
  searchText.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode === 16) {
      var text = document.querySelector("#searchText").value;
      console.log(text);
      getMovie(text);
    }
  });

  async function getMovie(text) {
    var res = await fetch(` http://www.omdbapi.com/?s=${text}&apikey=32ba2bd4`);
    var data = await res.json();
    console.log(data);
    var myData = data.Search;
    console.log(myData);
    var output;
    for (let i = 0; i < myData.length; i++) {
      console.log(myData[i].Title);

      var movieData = document.querySelector("#movies");
      output += `
                    <div class="col-md-3 mb-3">
                        <div class"well text-center">
                            <img src="${myData[i].Poster}">
                            <h5>${myData[i].Title}</h5>
                            <a onclick="movieSelected('${myData[i].imdbID}')" class="btn btn-primary" href="#">MOVIE DETAIL</a>
                            </div>
                            </div>
        `;
      movieData.innerHTML = output;
    }
  }
  function movieSelected(id) {
    sessionStorage.setItem("movieId", id);
    window.location = "movie.html";
    return false;
  }
}
getMovies();
console.log("aaaa");
async function getMovies() {
  let movieId = sessionStorage.getItem("movieId");

  var res = await fetch(
    ` http://www.omdbapi.com/?i=${movieId}&apikey=32ba2bd4`
  );
  var data = await res.json();
  console.log(data);
  var movie = data;
  console.log(movie);

  var moviesData = document.querySelector("#movie");
  output = `
        <div class="row">
        <div class="col-md-4">
          <img src="${movie.Poster}" class="thumbnail">
        </div>
        <div class="col-md-8">
          <h2>${movie.Title}</h2>
          <ul class="list-group">
            <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
            <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
            <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
            <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
            <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
            <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
            <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="well">
          <h3>Plot</h3>
          ${movie.Plot}
          <hr>
          <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
          <a href="index.html" class="btn btn-default">Go Back To Search</a>
        </div>
      </div>
            `;
  moviesData.innerHTML = output;
}
