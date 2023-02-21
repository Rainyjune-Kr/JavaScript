'use strict';

// document objects
console.log(document);
console.log(document.title); // head.title
console.log(document.URL);

// change title
document.title = "동적 웹페이지 만들기";

// get DOM object
// document.getElement()
// document.querySelector() > recommended

// get h1 tag and change vlaue
// const h1 = document.getElementById("heading");
const h1 = document.querySelector("#heading");
h1.innerText = "DOM Object & Event Handling"

// event handling
// 1. targeting
const btnBell = document.querySelector("#order-bell");

// 2. listening
// 3. handling
btnBell.addEventListener("click", function(event) {
  alert("띵동~");
});

const chk = document.querySelector("#answer-c");
chk.addEventListener("change", function(event){
  const checkBox = event.target;
  const listItem = checkBox.parentNode;
  if (checkBox.checked) {
    listItem.classList.add("text-primary");
  } else {
    listItem.classList.remove("text-primary");
  }
});

const menuCart = [];
const orderList = document.querySelector("#order-list");

// use querySelector
const btnJjajang = document.querySelector("#practice-3 button:nth-child(1)");
const btnJjamBbong = document.querySelector("#practice-3 button:nth-child(2)");
const btnFriedRice = document.querySelector("#practice-3 button:nth-child(3)");
const Tangsuyuk = document.querySelector("#practice-3 button:nth-child(4)");

btnJjajang.addEventListener("click", function(event){
  const btn = event.target;

  const menuName = btn.innerText;

  menuCart.push(menuName);

  orderList.innerText = `>> [${menuCart}] 이 주문되었습니다`;
});

// use querySelectorAll
const btnMenus = document.querySelectorAll("#practice-3 button");
for (let i = 0; i < btnMenus.length; i++) {
  btnMenus[i].addEventListener("click", function(event){
    const btn = event.target;
  
    const menuName = btn.innerText;
  
    menuCart.push(menuName);
  
    orderList.innerText = `>> [${menuCart}] 이 주문되었습니다`;
  });
}



