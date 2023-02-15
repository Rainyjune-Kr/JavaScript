'use strict';

// for

function countUpNumbers() {
  console.log("1부터 10까지 세고 시작한다.");

  for (let cnt = 1; cnt <= 10; cnt++) {
    console.log(cnt);
  }

  console.log("찾는다~");
}

countUpNumbers();

function countUpNumbers2() {
  console.log("1부터 10까지 세고 시작한다.");

  for (let cnt = 1; cnt <= 10; cnt += 2) {
    console.log(cnt);
  }

  console.log("찾는다~");
}

countUpNumbers2();

function countDown() {
  console.log("카운트다운");
  
  for(let cnt = 5; cnt > 0; cnt--) {
    console.log(cnt);
  }

  console.log("발사!");
}

countDown();

// while

function playUpdownGame() {
  console.log("Start");

  let num = Math.trunc(Math.random() * 10 + 1);

  while (true) {
    let inputStr = prompt("랜덤 정수 X(1~10)를 맞춰주세요:");
    let inputNum = parseInt(inputStr);
    if (num === inputNum) {
      console.log(`X = ${num} 정답입니다.`);
      break;
    } else if (inputNum < num) {
      console.log("Up");
    } else {
      console.log("Down");
    }
  }

  console.log("End");
}

//playUpdownGame();

// netsted loop
function printDan(dan) {
  for (let num = 1; num < 10; num++) {
    console.log(`${dan} x ${num} = ${dan*num}`);
  }
}

function printGuguDan() {
  for (let idx = 2; idx < 10; idx++) {
    console.log(printDan(idx));
  }
}

printGuguDan();