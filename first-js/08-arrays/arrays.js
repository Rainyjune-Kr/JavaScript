'use strict';

// array
const menus = ["샌드위치", "초밥", "치킨"];
const prices = [11000, 16000, 19000];
console.log(menus);
console.log(prices);

function totalPrice() {
  let sum = 0;
  for (let idx = 0; idx < prices.length; idx++) {
    prices[idx] += 2000;
    sum += prices[idx];
  }

  return sum;
}

console.log(`총합(배달비 포함) : ${totalPrice()} 원`);

menus[3] = "떡볶이";
prices[3] = 3000;

menus[4] = "튀김";
prices[4] = 3000;

//menus[5] = "순대";
//prices[5] = 4000;
menus.push("순대"); // push() 가장 마지막 index + 1 위치에 넣어줌.
prices.push(4000);

console.log(menus);
console.log(prices);

//console.log(menus.pop()); // pop() 가장 마지막 항목을 return 하고 배열에서 제거함.

// array parameter (call by reference)
function printReceipt(menuArr, priceArr) {
  let total = 0;
  console.log("= 주문읍식 목록 =");
  for (let idx = 0; idx < menuArr.length; idx++) {
    console.log(`메뉴명:\t${menuArr[idx]} \t\t 가격: ${priceArr[idx]}`);
    total += priceArr[idx];
  }
  console.log(`총액 : ${total} 원`);
}


printReceipt(menus, prices);