// map

const arr1 = ['BMW', 'MERC', 'NEXIA', 'SUZUKI'];
const result1 = arr1.map((item) => item.toLowerCase());
console.log(result1);

// filter
const arr2 = [
    {
        name: 'BMW',
        model: 2022,
    },
    {
        name: 'MERS',
        model: 2012,
    },
    {
        name: 'NEXIA',
        model: 2024,
    },
    {
        name: 'SUZUKI',
        model: 2019,
    },
];

const result2 = arr2.filter((item) => item.model < 2020);
console.log(result2);

// every/some
const arr3 = [2026, 'October', 'August'];
const some1 = arr3.some((item) => typeof item === 'number');
const every1 = arr3.every((item) => typeof item === 'number');
console.log(some1);
console.log(every1);

//reduce
const arr4 = [3, 4, 5, 1, 4, 2];
const result4 = arr4.reduce((prev, curr) => prev + curr, 10);
console.log(result4);
