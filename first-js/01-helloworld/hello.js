// 1. Get Button
const btn = document.querySelector("button");

// 2. Click event on Button
btn.addEventListener("click", helloMbti);

// 3. Define event
function helloMbti() {
  const heading = document.querySelector("h1");
  const mbti = prompt("Please input your MBTI");
  heading.append(" Hello " + mbti);
}