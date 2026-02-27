// Context this

/*function showThis() {
    console.log(this);
}

showThis();*/

/*const person = {
    firstName: 'Asilbek',
    lastname: 'Karomatov',
    greeting: function () {
        const showThis = () => {
            console.log(this);
        };
        showThis();
        console.log(this);
    },
};

person.greeting();*/

/*function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isHuman = true;
    this.greeting = () => {
        console.log(this);
    };
}

const firstPerson = new Person('Asilbek', 'Ali');
console.log(firstPerson.greeting());*/

/*function greeting(isMarried) {
    console.log(this.name + ' Married: ' + isMarried);
}

const person = {
    name: 'Asilbek Karomatov',
};

greeting.call(person, true);
greeting.apply(person, [false]);*/

/*function calc(number) {
    return this * number;
}

const double = calc.bind(2);
const trouble = calc.bind(3);

console.log(double(12));
console.log(double(24));

console.log(trouble(15));
console.log(trouble(30));*/

// #1.Oddiy funtionsdagi context thiswindow obyektga teng, 'use strict' da esa undefined bo'ladi.
// #2. Context obyektlardagi method - obyektga teng
//     Arrow functiondagi context this - uning yuqorisidagi contextga osilib oladi.
// #3. Context this function constructor ning ichida - yangi obyekt ni ekzamplyar
// #4. call, apply va bind methodlari functionga context this'ni bog'laydi

const btn = document.querySelector('button');

btn.addEventListener('click', function (evt) {
    evt.target.style.background = 'red';
});
