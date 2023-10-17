// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    //allDirectors = []
    allDirectors = moviesArray.map(n => n.director)
    return allDirectors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    stevenDramaMovies = moviesArray.filter(n => {
        if (n.director === "Steven Spielberg" && n.genre.includes("Drama")) {
            return true;
        }
        return false;
    })
    return stevenDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const totalScoring = moviesArray.reduce((index, accumulator) => {
        if (accumulator.score) {
            return index + accumulator.score;
        }
        else {
            return index
        }
    }, 0)
    const result = totalScoring / moviesArray.length
    return Math.round(result * 100) / 100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(n => n.genre.includes("Drama"))
    if (dramaMovies.length === 0) {
        return 0
    }
    const dramaAvgScore = dramaMovies.reduce((index, accumulator) => {
        return index + accumulator.score;
    }, 0)
    const result = dramaAvgScore / dramaMovies.length
    return Math.round(result * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = moviesArray.map(n => n)

    //newArray.sort((a, b) => a.year - b.year)
    //newArray.sort((a, b) => a.title - b.title)

    newArray.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year
        }
        return a.title.localeCompare(b.title)
    })

    //console.log(moviesArray);

    return newArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = moviesArray.map(n => n)
    newArray.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })
//convert the newArray string
    return newArray

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
