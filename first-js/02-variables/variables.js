// Comments : 실행되지 않는 코드, 이해를 돕기 위해 작성.
// 엄격모드 적용 : 초창기 자바스크립트의 단점을 보완하는 설정
// (좀 더 엄격한 검증을 적용함)
'use strict';

// 1. 변수, 열린 상자 만들기
let openBox = "망고";
console.log(openBox);

openBox = "사과";
console.log(openBox);

// 2. 이름이 같은 변수는 생성할 수 없음.
// let openBox = "포도";
openBox = "포도";
console.log(openBox);

// 3. 상수
const closedBox = "쿠키";
console.log(closedBox);

closedBox = "크래커"; // Uncaught TypeError: Assignment to constant variable.
console.log(closedBox);