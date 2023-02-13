'use strict';

// 1. Assignment operator > 우변 값을 좌변에 할당한다.
const strawberry = 200;
const kiwi = 800;
const banana = 500;

// 2. String operator
console.log("🍓딸기 개당 가격: " + strawberry + " 원");
console.log("🥝키위 개당 가격: " + kiwi + " 원");
console.log(`🍌바나나 개당 가격: ${banana} 원`); // using backtick.

// 3. Arithmetic operators
// 🍓 + 🥝 - 🍌 = ?
const result1 = strawberry + kiwi - banana;
console.log(result1);

// 5 x 🍓 ÷ 🍌
const result2 = 5 * strawberry / banana;
console.log(result2);

// 🍌 - 🍓 x 5 + 🥝
const result3 = banana - strawberry * 5 + kiwi;
console.log(result3);

// 7 % 3
const result4 = 7 % 3;
console.log(result4);

// 2 ** 3
const result5 = 2 ** 3;
console.log(result5);

// 4. operator priority
// 100 + 200 / 50 = ?
console.log(100 + 200 / 50);
// 500 / (200 - 150) = ?
console.log(500 / (200 - 150));
// 500 + 2 + "3" = ?
console.log(500 + 2 + "3"); // 500 + 2 => 502, 502 + "3" => "502" + "3" => "5023"
// "3" + 500 + 2 = ?
console.log("3" + 500 + 2 ); // "3" + 500 => "3" + "500" => "3500", "3500" + 2 => "3500" + "2" => "35002"