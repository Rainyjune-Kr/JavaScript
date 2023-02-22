'use strict';

// synchronous function
function sleep(ms) {
  const wakeUpTime = Date.now() + ms;

  while (Date.now() < wakeUpTime) {
    // do nothing.
  }
}

function synchronousSample() {
  sleep(6000);
  console.log("세탁기 돌리기(60분)");

  sleep(1500);
  console.log("재료 손질(15분)");

  sleep(2000);
  console.log("요리하기(20분)");

  sleep(1500);
  console.log("식사하기(15분)");

  sleep(1000);
  console.log("설거지 하기(10분)");
}

// synchronousSample();

// asynchronous function
function asynchronousSample() {
  const start = Date.now();
  setTimeout(() => {
    console.log("세탁기 돌리기(60분)");
  }, 6000);
  setTimeout(() => {
    console.log("재료 손질(15분)");
  }, 1500);
  setTimeout(() => {
    console.log("요리하기(20분)");
  }, 2000);
  setTimeout(() => {
    console.log("식사하기(15분)");
  }, 1500);
  setTimeout(() => {
    console.log("설거지 하기(10분)");
  }, 1000);

  const end = Date.now();

  // setTimeout(callback, delay)
  // addEventListener(event, callback)
  console.log(`총 수행시간 : ${end - start} 분`); // result is 0 => setTimeout function adds the function to work list and back to next job.
}

// asynchronousSample();

// callback
function housework(task, delay, doNext) {
  setTimeout(() => {
    console.log(task);
    doNext(); // callback
  }, delay);
}

function callbackSample() {
  const washStart = Date.now();
  housework("세탁기 돌리기 (60분)", 6000, () => {
    console.log(`세탁 완료까지: ${(Date.now() - washStart)/100}분`);
  });

  const lunchStart = Date.now();
  housework("재료 손질 (15분)", 1500, () => {
    housework("요리하기 (20분)", 2000, () => {
      housework("식사하기 (15분)", 1500, () => {
        housework("설거지하기 (10분)", 1000, () => {
          console.log(`재료 손질부터 설거지 완료까지 ${(Date.now() - lunchStart) / 100} 분`);
        })
      })
    })
  });
}

callbackSample();