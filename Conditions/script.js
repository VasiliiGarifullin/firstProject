"use strict";

// eslint-disable-next-line no-constant-condition
if (1) {
	console.log("Ok!");
} else {
	console.log("Error");
}

// const num = 50;

// if (num < 49) {
//     console.log("Error");
// } else if (num > 200) {
//     console.log("Многовато");
// } else {
//     console.log("Молодец, правильный ответ");
// } 

// (num === 50) ? console.log("OK!") : console.log("Error");

const num = "50";

switch (num) {
case "30": 
	console.log("Неверно");
	break;
case "25": 
	console.log("Далеко от истины");
	break;
case "51": 
	console.log("Все ок, ты лучший");
	break;
default:
	console.log("Ничего не подошло");
}