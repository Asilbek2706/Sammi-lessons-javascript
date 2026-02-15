const seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    seriesDB.count = +prompt('Nechta serial ko’rdingiz?', '')

    while (
        seriesDB.count === '' ||
        seriesDB.count == null ||
        isNaN(seriesDB.count)
        ) {
      seriesDB.count = +prompt('Nechta serial ko’rdingiz?', '')
    }
  },
  setSeries: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt(`Oxirgi ko’rgan serialingiz ${i + 1}?`, '')
      const b = prompt(`Nechi baxo berasiz? ${i + 1}`, '')

      if (a !== null && b !== null && a !== '' && b !== '') {
        seriesDB.series[a] = b
      } else {
        i--
      }
    }
  },
  detectingLevel: function () {
    if (seriesDB.count < 5) {
      console.log("Kam serial ko'ripsiz")
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
      console.log('Siz classik tamoshabin ekansiz')
    } else if (seriesDB.count >= 10) {
      console.log('Siz serialchi zvezda ekansiz')
    }
  },
  visibleDB: function () {
    if (seriesDB.private) {
      seriesDB.private = false
    } else {
      seriesDB.private = true
    }
  },
  showDB: function () {
    if (!seriesDB.private) {
      console.log(seriesDB)
    } else {
      console.log("Ma'lumot mahfiy saqlanmoqda")
    }
  },
  writeGenres: function () {
    let genres = prompt(
        "Yaxshi ko'rgan janringizni vergul yordamida yozing!",
        ''
    )

    while (genres === '' || genres == null) {
      genres = prompt("Yaxshi ko'rgan janringizni vergul yordamida yozing!", '')
    }

    if (genres) {
      seriesDB.genres = genres.split(', ')
      seriesDB.genres.sort()
    }
  },
}