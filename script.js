"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
       personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?" ,"" );
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?" ,"" );
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("последний из просмотренных фильмов" ,""),
                b = prompt("На сколько оцените его?" ,"");
                
            if (a != '' && b != '' && a.length > 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
            console.log('Error');
            //  i--;
            }  
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('мало');
        } else if(personalMovieDB >= 10 && personalMovieDB < 30) {
            console.log('класс');
        } else if(personalMovieDB >= 30) {
            console.log('киноман');
        } else {
            console.log('ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
         if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
         } else {
            personalMovieDB.privat = true;
         }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый любимый жанр под номером ${i} `);

            if (genre === '' || genre == null) {
                console.log('некорректно');
                i--;
            } else{
                personalMovieDB.genres[i-1] = genre;
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log (`Любимый жанр ${i + 1} - это ${item}`);
                
            });
            
    }
    },
};









// a != null && b != null &&

