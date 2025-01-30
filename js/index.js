const btn = document.getElementById("nav-btn");
const ul = document.getElementById("ul");
const x = document.getElementById("x");

btn.onclick = () => {
  ul.classList.toggle("show");
  x.style.display = "block";
  btn.style.display = "none";
};

x.onclick = () => {
  ul.classList.toggle("show");
  x.style.display = "none";
  btn.style.display = "block";
};
