'use strict';

// 1. number
const birthYear = 1986; // integer
console.log(birthYear);

const weight = 75.24; // fload
console.log(weight);

// 2. string
const nickname = "배준범";
const starSign = '전갈자리';
const bloodType = `Rh+ AB형`;
console.log(nickname);
console.log(starSign);
console.log(bloodType);

// 3. typeof
console.log(typeof 1234);
console.log(typeof "1234");
console.log(typeof starSign);

// 4. boolean
console.log(typeof true);
console.log(typeof false);
const hungry = true;
console.log(hungry);

// 5. undefined vs null
let dinner; // not initialized.
console.log(typeof dinner);

dinner = "Pizza🍕"; // assign string value
console.log(typeof dinner);

dinner = null; // assign null
console.log(typeof dinner);