'use strict';

// 1. 함수
// 일련의 코드 묶음
// 입력에 따른 결과 반환
// 함수 호출시, 실행 흐름은 함수 내부로 이동
// 함수 종료시 실행 흐름은 이전 위치로 돌아감.

// Function declaration.
function sayHi(username)
{
  console.log(`안녕하세요, ${username} 입니다.`);
  return undefined;
}

// Function call
sayHi("배준범");
sayHi("배준범2");
sayHi("배준범3");

// return 3 times powered.
function cube(num) {
  return num ** 3;
}

const test = cube(2);
const test2 = cube(3);

console.log(test);
console.log(test2);

// 2. 파라미터, 입력값을 저장하는 변수.
// 필요에 따라 개수 조절 가능.

function createRamen() {
  return "라면";
}

const ramen = createRamen();
console.log(ramen);

function createMandu(ingrediant) {
  return `${ingrediant} 만두`;
}

const mandu1 = createMandu("고기");
const mandu2 = createMandu("김치");

console.log(mandu1);
console.log(mandu2);

function createKimbob(a, b)
{
  return `${a} ${b} 김밥`;
}

const kimbob = createKimbob("참치", "김치");
console.log(kimbob);

// 3. return. 함수 종료와 동시에 값을 반환
// return을 생략하면 undefined를 반환.

function undefinedFunc() {
  console.log("Nothing returned");
  //return undefined;
}

const result = undefinedFunc();
console.log(result);

// Variable's scope. 변수의 활동 범위
function changeParameterX(x)
{
  x = x + 3;
  console.log(`x = ${x}`);
}

let value1 = 30;
changeParameterX(value1);
console.log(value1);

function changeLocalVariableY(n)
{
  let y = n + 1;
  console.log(`y = ${y}`);
}

let value2 = 20;
changeLocalVariableY(value2);
console.log(value2);