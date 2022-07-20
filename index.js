const page = document.querySelector(".page");
const mySpan = document.querySelector(".mySpan");

document.addEventListener("keypress", (e) => {
  mySpan.innerHTML += e.key;
});
