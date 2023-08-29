"use strict";

function calc(a, b) {
	return (a+b);
}

console.log(calc(4, 5));

function ret() {
	let num = 50;
	return num;
}

const another = ret();
console.log(another);

logger();

const logger = function fun() {
	console.log("Hello");
};

let c = "Антон";

function sayHello (userName) {
	return userName;
}

console.log(sayHello(c));

let num = 5;
// Место для второй задачи
function returnNeighboringNumbers(argument) {
	return let d = [--num, ++num, ++num];
}
console.log(returnNeighboringNumbers());

let num1 = 50, num2 = 3;

function getMathResult(base, repeat) {
	for(let i = 0; i < repeat; i++) {
		console.log(base + "---");
		base += base;
	}
	return base1;
}

console.log(getMathResult(num1, num2));

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);

let num = [1, 2, 3, 4, 5, 6];

function SumNumbers () {
    for (let i = 0; i <= 5; i++) {
        let sum = num[i] + num[i++];        
        }
        return sum;
}

console.log(SumNumbers ());


let num = [1, 2, 3, 4, 5, 6];

let sum = num[0] + num[1] + num[2] + num[3] + num[4] + num[5];

function SumNumbers (amount) {
    console.log(sum);
    return sum;
}

SumNumbers();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i <= 5; i++) {


let num = [1, 2, 3, 4, 5, 6];

function SumNumbers (amount) {
    let sum = num[0] + num[1] + num[2] + num[3] + num[4] + num[5];
    console.log(sum);
    return sum;
}

SumNumbers();


let num = [1, 2, 3, 4, 5, 6];

let sum = 0;
function SumNumbers () {
        for(let i = 0; i < num.length; i++) {
            sum += num[i]
        }
        console.log(sum);
        return sum;
}

SumNumbers();