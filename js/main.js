/**
 * // String methods

let text = 'Hello World';
const password = '        dawdwa         ';

// Lenght is property
console.log('Uzunligi:', text.length);

// Methods
console.log('#1. Aniq positsiyadagi indexdagi xarf:', text.charAt(2));
console.log('#2. Aniq positsiyadagi indexdagi xarf:', text[1]);
console.log('Xarflarni kotta registerda qilish:', text.toUpperCase());
console.log('Xarflarni kichik registerda qilish:', text.toLowerCase());
console.log('#1. Matni bosh va oxiridan kesish:', text.slice(0, -4));
console.log('#2. Matni bosh va oxiridan kesish:', text.substring(0, 2));
console.log("Ikki tarafdan bo'sh space olib tashlash", password.trim());
console.log('Boshidan space olib tashlash', password.trimStart());
console.log('Oxiridan space olib tashlash', password.trimEnd());

// console.log(text);*/

/**
// // Number methods

const number = 12.6;
const width = '240.42px';

console.log('Eng yaqin sonni oladi:', Math.round(number));
console.log('Sonnu butun qilib beradi:', Math.floor(number));
console.log(
  "String ma'lumot turidan butun sonni qaytarib beradi:",
  parseInt(width)
);
console.log("String ma'lumot turidan son qilib beradi", parseFloat(width));

console.log(number);*/

/** Callback - bitta funksiya ishga tushgandan kn oshla tushadigan funksiya

const firstLog = () => {
  setTimeout(function () {
    console.log(1);
  }, 1000);
};

const secondLog = () => {
  console.log(2);
};

firstLog();
secondLog();*/

/**function greeting(callback) {

  console.log('Salom');
  callback();
}

// function callback() {
//   console.log('Dunyo');
// }

// greeting(callback);

greeting(() => console.log('Dunyo')); */

/**const person = {
  name: 'Asilbek',
  year: 2006,
  job: 'Developer',
  hobbies: {
    sport: 'Football',
    games: 'UFC',
  },
  sayHello: function () {
    console.log('Salom, mening ismim ' + this.name);
  },
};

// const { name, year, job, hobbies: {games, sport}, sayHello } = person; // destructuring
// console.log(sayHello());

// console.log(person);

// person.sayHello();

// console.log(Object.keys(person).length); // objectning faqat keylarini array qilib beradi

// for in - faqat object uchun
// for of - faqat array uchun

// for (let key in person) {
//   console.log(typeof key);
//   console.log(typeof person[key]);
//   if (typeof person[key] === 'object') {
//     for (let i in person[key]) {
//   console.log(`Property ${i} : Value: ${person[key][i]}`);
//     }
//   } else {
// console.log(`Property ${key} : Value: ${person[key]}`);
//   }
// }*/
