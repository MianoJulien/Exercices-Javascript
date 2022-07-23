const page = document.querySelector(".page");
const mySpan = document.querySelector(".mySpan");
const mySpan2 = document.querySelector(".mySpan2");
page.innerHTML += `<span class="addSpan">couleur aléatoire</span>`;
const addSpan = document.querySelector(".addSpan");
const href = document.querySelector("a");

document.addEventListener("keypress", (e) => {
  if (e.key) {
    mySpan.innerHTML += e.key;
  }
});

function getColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  page.style.background = `rgb(${r},${g},${b})`;
}

function getColor2() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  addSpan.style.color = `rgb(${r},${g},${b})`;
  href.style.color = `rgb(${r},${g},${b})`;
}
setInterval(getColor, 5000);
setInterval(getColor2, 1000);

document.addEventListener("scroll", () => {
  if (srollY > 1) {
    header.style.visibility = "hidden";
  }
});
