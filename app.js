const URL =
  "https://gist.githubusercontent.com/prof3ssorSt3v3/1944e7ba7ffb62fe771c51764f7977a4/raw/c58a342ab149fbbb9bb19c94e278d64702833270/infinite.json";

document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootmargins: "0px",
    threshold: 0.5
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(document.querySelector("footer"));
  getData();
});

function handleIntersect(entries) {
  if (entries[0].isIntersecting) {
    console.warn("something is intersecting w/ viewport");
    getData();
  }
}
function getData() {
  let main = document.querySelector("main");
  console.log("fetch some JSON DATA");
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.items.forEach(item => {
        let fig = document.createElement("figure");
        let fc = document.createElement("figurecaption");
        let img = document.createElement("img");
        img.src = item.img;
        img.alt = item.name;
        fc.textContent = item.name;
        fig.appendChild(img);
        fig.appendChild(fc);

        main.appendChild(fig);
      });
    });
}
