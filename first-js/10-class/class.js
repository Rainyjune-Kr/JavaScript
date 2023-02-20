'use strict';

// Class
class Dog {
  // Fields
  _name;
  _breed;
  _age;

  constructor(name, breed, age) {
    this._name = name;
    this._breed = breed;
    this._age = age;
  }

  // Methods
  bark() {
    console.log(`[${this._name}] 가 짖습니다.`);
  }
  sit() {
    console.log(`[${this._name}] 가 앉습니다.`);
  }
  lieDown() {
    console.log(`[${this._name}] 가 눕습니다.`);
  }
}

// Constructor > "new" keyword
const mungchi = new Dog("뭉치", "골든리트리버", 4);
const poppy = new Dog("뽀삐", "시고르자브종", 2);
const kongii = new Dog("콩이", "푸들", 1);
console.log(mungchi);
console.log(poppy);
console.log(kongii);

mungchi._age += 1;
poppy._age += 1;
kongii._age += 1;
console.log(`${mungchi._name} (${mungchi._breed}, ${mungchi._age} 세)`);
console.log(`${poppy._name} (${poppy._breed}, ${poppy._age} 세)`);
console.log(`${kongii._name} (${kongii._breed}, ${kongii._age} 세)`);

// for .. in
for (let key in mungchi) {
  console.log(`${key} => ${mungchi[key]}`);
}

// call method
mungchi.bark();
poppy.sit();
kongii.lieDown();