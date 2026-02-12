let numberOfSeries;

startApp();

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

setFavouriteSeries();
detectingLevel();
writeGenres();
showDb(seriesDB.private);

function startApp() {
  numberOfSeries = +prompt('Nechta serial ko’rdingiz?', '');

  while (
    numberOfSeries == '' ||
    numberOfSeries == null ||
    isNaN(numberOfSeries)
  ) {
    numberOfSeries = +prompt('Nechta serial ko’rdingiz?', '');
  }
}

function setFavouriteSeries() {
  for (let i = 0; i < 2; i++) {
    const a = prompt(`Oxirgi ko’rgan serialingiz ${i + 1}?`, '');
    const b = prompt(`Nechi baxo berasiz? ${i + 1}`, '');

    if (a !== null && b !== null && a !== '' && b !== '') {
      seriesDB.series[a] = b;
    } else {
      i--;
    }
  }
}

function detectingLevel() {
  if (seriesDB.count < 5) {
    console.log("Kam serial ko'ripsiz");
  } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
    console.log('Siz classik tamoshabin ekansiz');
  } else if (seriesDB.count >= 10) {
    console.log('Siz serialchi zvezda ekansiz');
  }
}

function writeGenres() {
  for (let i = 0; i < 3; i++) {
    const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}?`, '');
    seriesDB.genres[i] = genre;
  }
}

function showDb(isPrivate) {
  if (!isPrivate) {
    console.log(seriesDB);
  } else {
    console.log("Ma'lumot mahfiy saqlanmoqda");
  }
}
