const navToggler = document.querySelector(".toggler");
const navCollapse = document.querySelector(".navbar-collapse");
const navClose = document.querySelector(".close");

navToggler.addEventListener("click", () => {
  if (navToggler.className !== "") {
    navToggler.style.display = "none";
    navClose.style.display = "block";
    navCollapse.classList.add("navShow");
  }
});

navClose.addEventListener("click", () => {
  if (navClose.className !== "") {
    navToggler.style.display = "block";
    navClose.style.display = "none";
    navCollapse.classList.remove("navShow");
  }
});
