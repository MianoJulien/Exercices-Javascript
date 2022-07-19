let page = document.getElementsByClassName("page");

let title = [
  {
    name: "julien",
    age: 36,
    adresse: "4 rue du 7 septembre",
  },
];

document.body.div.page.innerHTML += title.map(
  (test) => `

<h1 class="name">${test.name}</h1>


`
);
