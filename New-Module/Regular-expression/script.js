'use strict';

// /pattern/f

// i - register
// g - global
// m -ko'p qator

// \d - digits
// \w - words
// \s - space

// \D - not digits
// \W - not words

const text = 'Asilbek123';
const regEx = /\d/gi;
console.log(text.match(regEx));

// const firstName = 'Asilbek';
// const regEx = /a/gi;
// console.log(regEx.test(firstName));

// const password = 'pass...';
// const date = '2024:11:11';
//
// console.log(date.replace(/:/g, '-'));
//
// console.log(password.replace(/\./g, '*'));

// console.log(password.replace(/./g, '*'));

// const firstName = 'Asilbek';
//
// const regEx = /a/gi;
//
// console.log(firstName.match(regEx));
