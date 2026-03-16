const person = {
    firstName: 'Asilbek',
    lastName: 'Karomatov',
    hobbies: {
        sport: 'Football',
        games: 'UFC',
    },
};

const clone = JSON.parse(JSON.stringify(person));

clone.hobbies.sport = 'Box';

console.log(clone);
console.log(person);

/*const objToJson = JSON.stringify(person);

const jsonToObj = JSON.parse(objToJson);

console.log(jsonToObj);*/

// #1. Har doim serverga ma'lumot JSON formatda yuborilishi shart.
// #2. Har doim server JSON formatda ma'lumot qaytaradi.

const sum = document.querySelector('#sum'),
    usd = document.querySelector('#usd');

sum.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', './js/current.json');
    request.setRequestHeader('Content-type', 'application/json');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            usd.value = (+sum.value / data.current.usd).toFixed(2);
        } else {
            usd.value = '';
        }
    });
});
