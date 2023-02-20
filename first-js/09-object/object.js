'use strict';

// Create object
// property > key:value 
const ramen = {
  name: "뽀글이",
  price: 3000
};

const chicken = {
  name:"슈넬치킨",
  price: 5000
};
const coke = {
  name:"코카콜라",
  price: 1000
};
const americano = {
  name:"아메리카노",
  price: 1500
};

console.log(ramen);
console.log(chicken);
console.log(coke);
console.log(americano);

// property handling
ramen.price += 500;
// ramen["price"] += 500;
chicken.price += 500;
// chicken["price"] += 500;
coke.price += 500;
// coke["price"] += 500;
americano.price += 500;
// americano["price"] += 500;

console.log("== 메뉴판(가격인상) ==");
console.log(`${ramen.name} (${ramen.price})`);
console.log(`${chicken.name} (${chicken.price})`);
console.log(`${coke.name} (${coke.price})`);
console.log(`${americano.name} (${americano.price})`);

// for..in > loop properties
const character = {
  name: "배준범",
  level: 40,
  hp: 1200,
  mp: 800,
  skills: ["에너지볼트", "파이어볼", "토네이도"]
};
console.log(character);

for (let key in character) {
  console.log(`${key} : ${character[key]}`);
}

// in operator > exist property?
console.log("name" in character);
console.log("age" in character);

// object array.
const arr = [
  {name:"겜방 3시간", price:3000}, 
  {name:"슈넬치킨", price:5500},
  {name:"코카콜라", price:1000}, 
  {name:"아메리카노", price:1500}
];

//console.log(`${arr[0].name}(${arr[0].price} 원)`);
//console.log(`${arr[1].name}(${arr[1].price} 원)`);
//console.log(`${arr[2].name}(${arr[2].price} 원)`);
//console.log(`${arr[3].name}(${arr[3].price} 원)`);

// for (let i = 0; i < arr.length; i++) {
//   console.log(`${arr[i].name}(${arr[i].price} 원)`)
// }

for (let item of arr) {
  console.log(`${item.name} (${item.price} 원)`)
}

console.log("== 총합 ==");
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i].price;
}
console.log(`${sum} 원`);