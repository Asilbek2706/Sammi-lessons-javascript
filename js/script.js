document.addEventListener("DOMContentLoaded", () => {
    // const seriesDB = {
//   count: 0,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
//   start: function () {
//     seriesDB.count = +prompt('Nechta serial ko’rdingiz?', '')
//
//     while (
//         seriesDB.count === '' ||
//         seriesDB.count == null ||
//         isNaN(seriesDB.count)
//         ) {
//       seriesDB.count = +prompt('Nechta serial ko’rdingiz?', '')
//     }
//   },
//   setSeries: function () {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt(`Oxirgi ko’rgan serialingiz ${i + 1}?`, '')
//       const b = prompt(`Nechi baxo berasiz? ${i + 1}`, '')
//
//       if (a !== null && b !== null && a !== '' && b !== '') {
//         seriesDB.series[a] = b
//       } else {
//         i--
//       }
//     }
//   },
//   detectingLevel: function () {
//     if (seriesDB.count < 5) {
//       console.log("Kam serial ko'ripsiz")
//     } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//       console.log('Siz classik tamoshabin ekansiz')
//     } else if (seriesDB.count >= 10) {
//       console.log('Siz serialchi zvezda ekansiz')
//     }
//   },
//   visibleDB: function () {
//     if (seriesDB.private) {
//       seriesDB.private = false
//     } else {
//       seriesDB.private = true
//     }
//   },
//   showDB: function () {
//     if (!seriesDB.private) {
//       console.log(seriesDB)
//     } else {
//       console.log("Ma'lumot mahfiy saqlanmoqda")
//     }
//   },
//   writeGenres: function () {
//     let genres = prompt(
//         "Yaxshi ko'rgan janringizni vergul yordamida yozing!",
//         ''
//     )
//
//     while (genres === '' || genres == null) {
//       genres = prompt("Yaxshi ko'rgan janringizni vergul yordamida yozing!", '')
//     }
//
//     if (genres) {
//       seriesDB.genres = genres.split(', ')
//       seriesDB.genres.sort()
//     }
//   },
// }

    const advs = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        wrapper = document.querySelector('.promo__bg'),
        seriesList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        input = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector("[type='checkbox']");

    const seriesDB = {
        series: [
            'Omar',
            'The Final Legacy',
            'Ertugrul',
            'Magnificent Century',
            'The Great Seljuks: Guardians...',
        ]
    }

    addForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newValue = input.value
        const favourite = checkbox.checked

        if (newValue){

            if (newValue.length > 18) {
                newValue = `${newValue.slice(0, 18)}...`
            }

            if (favourite) {
                console.log("Sevimli serial qo'\shildi")
            }

            seriesDB.series.push(newValue)
            setList()
            sort()
            event.target.reset()
        }
    })

    advs.forEach(item => {
        item.remove()
    })

    genre.textContent = 'Comedy'

    wrapper.style.backgroundImage = 'url(../img/1.png)'

    function sort() {
        seriesDB.series.sort()
    }

    function setList() {
        seriesList.innerHTML = ''
        sort()

        seriesDB.series.forEach((item, index) => {
            seriesList.innerHTML += `
                <li class="promo__interactive-item">
                    ${index + 1}. ${item}
                    <div class="delete"></div>
                </li>
            `
        })
        document.querySelectorAll(".delete").forEach((trashBtn, index) => {
            trashBtn.addEventListener('click', () => {
                trashBtn.parentElement.remove()
                seriesDB.series.splice(index, 1)

                setList()
            })
        })
    }
    sort()
    setList()
})