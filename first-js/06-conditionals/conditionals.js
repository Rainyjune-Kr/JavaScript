'use strict';

// if, if-else, else-if

function orderBevarage(isAttractive) {
  if (isAttractive == "yes") {
    console.log("라떼 주세요💕");
  } else if (isAttractive == "not yet") {
    console.log("레모네이드 주세요 🍋");
  } else {
    console.log("아이스 아메리카노, 얼음 팍팍..🧊")
  }
}

orderBevarage("yes");
orderBevarage("no");
orderBevarage("not yet");

// comparison
function calculateBusFare(age = 20) {
  let fare = 0;

  if (age > 18) {
    fare = 1200;
  } else if (age > 12) {
    fare = 720;
  } else {
    fare = 450;
  }

  return fare;
}

console.log(`20세 => ${calculateBusFare()} 원`);
console.log(`17세 => ${calculateBusFare(17)} 원`);
console.log(`11세 => ${calculateBusFare(11)} 원`);

// boolean
function calculateAwesomeTier(looking, talking, rich) {
  let tier = null;
  
  if (looking >= 90 && talking >= 90 && rich >= 90) {
    tier = "S";
  } else if (looking + talking >= 160 && rich >= 90) {
    tier = "A";
  } else if (looking > 90 || talking > 90 || rich > 90) {
    tier = "B";
  } else {
    tier = "C";
  }

  return tier;
}

console.log(`${calculateAwesomeTier(92, 90, 94)} 등급`);
console.log(`${calculateAwesomeTier(85, 84, 91)} 등급`);
console.log(`${calculateAwesomeTier(77, 92, 73)} 등급`);
console.log(`${calculateAwesomeTier(80, 88, 79)} 등급`);

// switch
function calculateSeason(month) {
  let season = null;

  switch (month) {
    case 12:
    case 1:
    case 2:
      season = "겨울이라능☃️";
      break;
    case 3:
    case 4:
    case 5:
      season = "봄이라능🌱";
      break;
    case 6:
    case 7:
    case 8:
      season = "여름이라능🏖️";
      break;
    case 9:
    case 10:
    case 11:
      season = "가을이라능🍃";
      break;
    default :
    season = "잘못된 값이라능";
  }

  return season;
}

console.log(`12월의 계절은 ${calculateSeason(12)}`);

// Ternary
function calcDriverLicense(score) {
  const result = score >= 80 ? "pass" : "fail";
  return result;
}

console.log(calcDriverLicense(100));
console.log(calcDriverLicense(79));