const navBtn = document.querySelector(".btn-mobile-nav");
const sideBar = document.querySelector(".side-bar");

navBtn.addEventListener("click", function () {
  sideBar.classList.toggle("nav-open");
});
