const headerBars = document.querySelector(".header__bars");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavClose = document.querySelector(".mobile-nav__close");
const mobileNavOverlay = document.querySelector(".mobile-nav__overlay");
const mobileNavLink = document.querySelectorAll(".mobile-nav__link");
const mobileNavResume = document.querySelector(".mobile-nav__resume");
const mobileNavButton = document.querySelectorAll(".mobile-nav__button");

headerBars.addEventListener("click", () => {
  document.body.style.overflow = "hidden";

  mobileNav.style.display = "block";
  mobileNavOverlay.style.display = "block";
});

function closeMenu() {
  document.body.style.overflow = "auto";

  mobileNav.style.display = "none";
  mobileNavOverlay.style.display = "none";
}

mobileNavClose.addEventListener("click", closeMenu);
mobileNavOverlay.addEventListener("click", closeMenu);
mobileNavResume.addEventListener("click", closeMenu);
mobileNavButton.forEach((eachBtn) => {
  eachBtn.addEventListener("click", closeMenu);
});
mobileNavLink.forEach((eachBtn) => {
  eachBtn.addEventListener("click", closeMenu);
});
