document.addEventListener("DOMContentLoaded", function () {

  const headerBars = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavClose = document.querySelector(".mobile-nav__close");
  const mobileNavOverlay = document.querySelector(".mobile-nav__overlay");
  const mobileNavLink = document.querySelectorAll(".mobile-nav__link");
  const mobileNavResume = document.querySelector(".mobile-nav__resume");
  const body = document.body;
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  
  headerBars.addEventListener("click", () => {
    document.body.style.overflowY = "hidden";

    body.style.marginRight =`${scrollbarWidth}px`
    mobileNav.style.display = "block";
    mobileNavOverlay.style.display = "block";
    headerBars.style.visibility = "hidden";
  });
  
  function closeMenu() {
    document.body.style.overflowY = "auto";
    body.style.marginRight = '0'
  
    mobileNav.style.display = "none";
    mobileNavOverlay.style.display = "none";
    headerBars.style.visibility = "visible";
  }
  
  mobileNavClose.addEventListener("click", closeMenu);
  mobileNavOverlay.addEventListener("click", closeMenu);
  mobileNavResume.addEventListener("click", closeMenu);
  
  mobileNavLink.forEach((eachBtn) => {
    eachBtn.addEventListener("click", closeMenu);
  });
  
  });