'use strict';

const firstMetDate = new Date("2022-02-12");
const the100thDate = new Date("2022-11-04");
console.log(firstMetDate);
console.log(firstMetDate.toISOString());
console.log(firstMetDate.toISOString().split("T")[0]);
console.log(the100thDate.toISOString().split("T")[0]);

const ms = the100thDate.getTime() - firstMetDate.getTime(); // time value is mili second
console.log(ms);
const sec = ms / 1000; // second
const min = sec / 60; // minute
const hour = min / 60; // hour
const days = hour / 24; // day

console.log(`${sec}초 => ${hour}시간 => ${days}일`);

const clone = new Date(the100thDate);
clone.setDate(clone.getDate() - 265);
console.log(clone.toISOString().split("T")[0]);

// window.setTimeout()
const btnPick = document.querySelector("#practice-2 .card-body a.btn"); // id=practice-2, class=card-body, class=btn in tag=a

function openRandomBox() {
  const items = [
    { name: "지갑", price: 168000, desc: "컴순이가 지갑을 안들고 다니던데, 이번 기회에 선물해주면 어떨까..?" },
    { name: "향수", price: 82000, desc: "좋은향 싫어하는 여자는 없다! 근데 컴순이 향수 취향을 모르는데.." },
    { name: "아이패드", price: 1200000, desc: "대학생에게 이만한 선물이 있을까? 문제는 가격이라능.." },
    { name: "에어팟", price: 359000, desc: "한번 써보면, 줄이어폰으로 못돌아 간다는 그 아이템..!" },
    { name: "애플워치", price: 359000, desc: "함께 커플로 애플워치를 하고 싶어..!" },
  ];

  const randFloat = Math.random() * items.length;
  const randInt = Math.floor(randFloat);

  const pickedItem = items[randInt];

  const cardTitle = document.querySelector("#practice-2 .card-body h5.card-title");
  const cardPrice = document.querySelector("#practice-2 .card-body h6.card-subtitle");
  const cardText = document.querySelector("#practice-2 .card-body p.card-text");

  cardTitle.innerText = pickedItem.name;
  cardPrice.innerText = `₩ ${pickedItem.price.toLocaleString()}`;
  cardText.innerText = pickedItem.desc;
}

btnPick.addEventListener("click", function(event) {
  
  setTimeout(() => { console.log(3); }, 0); // function(){ ... } > () => { ... }
  setTimeout(() => { console.log(2); }, 1000);
  setTimeout(() => { console.log(1); }, 2000);
  setTimeout(() => { openRandomBox() }, 3000);
});