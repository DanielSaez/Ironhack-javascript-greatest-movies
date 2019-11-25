/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(inputArray){
    let copy = [...inputArray];
    copy.sort( (a, b) =>{
    if (a.year > b.year) return 1;
    else if (a.year < b.year) return -1;
    else if (a.title > b.title) return 1;
    else if (a.title < b.title) return -1;
  }
  )

return copy;

  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    let newList = array.filter(movies => movies.director === 'Steven Spielberg');
    return newList.filter(movies => movies.genre.includes('Drama')).length;
    let newArray = array.filter(movies => movies.director === 'Steven Spielberg');
    return newArray.filter(movies => movies.genre.includes('Drama')).length;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    let newArray = array.map(movies => movies.title);
    let newArraySorted = newArray.sort();
    return newArraySorted.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    let averageRate = 0;
    if (array.length == false) {
        return 0;
    }
    else {
        let ratedMovie = array.reduce((a, b) => {
            if (b.rate) {
                return a + b.rate;
            }
            else {
                return a + 0;
            }
        }, 0)
        averageRate = (ratedMovie / array.length).toFixed(2);
        return Number(averageRate);
    }
}
// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let newArray = array.filter(function (movies) {
        return movies.genre.includes('Drama');
    });
    let newAverage = ratesAverage(newArray);
    return newAverage;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {

    let newArray = [...array];

    let finalArray = newArray.map((differentMovie) => {

        let duration = differentMovie.duration;

        let min = 0;
        let hour = 0;
        let final = 0;
        let temp;
        if (duration.includes('h') && duration.includes('min')) {
            temp = duration.replace('h', ' ').replace('min', ' ').trim();
            let hour = Number(temp.substring(0, temp.indexOf(" ")));
            let min = Number(temp.substring(temp.indexOf(" ") + 1));
            console.log(hour + " " + min)
            final = (hour * 60 + min);

        }
        else if (duration.includes('h')) {
            hour = Number(duration.substring(0, duration.indexOf("h")));
            final = hour * 60;

        }
        else if (duration.includes('min')) {
            min = Number(duration.substring(0, duration.indexOf("min")));
            final = min;
        }

        return {
            title: differentMovie.title,
            year: differentMovie.year,
            director: differentMovie.director,
            duration: final,
            genre: differentMovie.genre,
            rate: differentMovie.rate
        }
    })

    return finalArray;



}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
