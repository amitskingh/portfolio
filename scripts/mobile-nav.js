document.addEventListener("DOMContentLoaded", function () {

const headerBars = document.querySelector(".header__bars");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavClose = document.querySelector(".mobile-nav__close");
const mobileNavOverlay = document.querySelector(".mobile-nav__overlay");
const mobileNavLink = document.querySelectorAll(".mobile-nav__link");
const mobileNavResume = document.querySelector(".mobile-nav__resume");
const mobileNavButton = document.querySelectorAll(".mobile-nav__button");
const containers = document.querySelectorAll('.container')
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
const initialMarginRight = getComputedStyle(containers[0]).marginRight
console.log(scrollbarWidth);
console.log(initialMarginRight);

headerBars.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  // containers.forEach(container => {
  //   container.style.marginRight = `${initialMarginRight + scrollbarWidth}`
  //   container.style.marginLeft = `${'auto'}`
  // });
  // console.log(getComputedStyle(containers[0]).marginRight);
  
  mobileNav.style.display = "block";
  mobileNavOverlay.style.display = "block";
  headerBars.style.visibility = "hidden";
});

function closeMenu() {
  document.body.style.overflowY = "auto";
  // containers.forEach(container => {
  //   container.style.marginRight = `auto`
  // });
  // console.log(getComputedStyle(containers[0]).marginRight);

  mobileNav.style.display = "none";
  mobileNavOverlay.style.display = "none";
  headerBars.style.visibility = "visible";
}

mobileNavClose.addEventListener("click", closeMenu);
mobileNavOverlay.addEventListener("click", closeMenu);
mobileNavResume.addEventListener("click", closeMenu);
// mobileNavButton.forEach((eachBtn) => {
//   eachBtn.addEventListener("click", closeMenu);
// });
mobileNavLink.forEach((eachBtn) => {
  eachBtn.addEventListener("click", closeMenu);
});

});