// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let directors = array.map(x => x.director);
  let result = directors;
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesDirector = array.filter(x => x.director == director);
  return moviesDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  // filtrar por la array por el director para sacar la score y luego usar el reduce para sacar la media.
  let scoreDirector = array.filter(x => x.director == director);
  let averageDirector = scoreDirector.reduce((acc, crr) => acc + crr.score , 0)
  var averageScore = averageDirector/scoreDirector.length;
  return averageScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  // obtenemos los titulos de las peliculas
  let arrTitles = array.map(x => x.title); 
  // ordenamos con sort y la guardamos en una nueva array
  let arrTitlesSort = arrTitles.sort();
  // Hacemos el return de la array nueva añadiendo el slice para que devuelva la array solo con los 20 titulos.
  return arrTitlesSort.slice(0,20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arrPeliculas = array;

  let arrPeliculasSort = arrPeliculas.sort(( a, b )=>{ 
    if(a.year == b.year){
      a.name - b.name
    }
    return a-b;
  });
  return arrPeliculasSort;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
