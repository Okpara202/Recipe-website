const btn = document.getElementById("nav-btn");
const ul = document.getElementById("ul");
const x = document.getElementById("x");
const toTopBtn = document.getElementById("back-to-top");

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

window.onscroll = () => {
  if (window.scrollY > 300) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

toTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
