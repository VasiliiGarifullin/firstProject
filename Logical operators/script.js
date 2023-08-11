"use strict";

// let num = 50;
// while (num<55) {
// 	console.log(num);
// 	num++;
// }


// do {
// 	console.log(num);
// 	num++;
// } while (num < 55);

// let num = 50;

// for(let i = 0; i <= 10; i++) {
// 	if(i == 5) {
// 		continue;
// 	}
// 	console.log(i);
// }



// for(let i = 0; i < 7; i++) {
// 	console.log(i);
// 	for(let j = 0; j < 7; j++) {
// 		console.log("*");
		
// 	}
// }

// let result = "";

// const length = 7;

// for(i = 1; i < length; i++) {
// 	for(j = 0; j < i; j++) {
// 		result += "**";
// 	}
// 	result += "\n";
// }
// console.log(result);

const lines = 5;
let result = "";

for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
	for (let j = 0; j < 2 * i + 1; j++) {
		result += "*";
	}
	result += "\n";
}

console.log(result);

 