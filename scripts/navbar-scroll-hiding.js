let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scroll down
    document.querySelector("header").style.transform = "translateY(-100%)";
  } else {
    // Scroll up
    document.querySelector("header").style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});