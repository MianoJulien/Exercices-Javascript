const page = document.querySelector(".page");
const mySpan = document.querySelector(".mySpan");
const mySpan2 = document.querySelector(".mySpan2");

document.addEventListener("keypress", (e) => {
  if (e.key) {
    mySpan.innerHTML += e.key;
  }
});
