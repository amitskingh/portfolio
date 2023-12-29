const themes = document.querySelectorAll(".theme__mode");
const covers = document.querySelectorAll(".cover");

let isLight = true;
let lightTheme = document.getElementById("light__theme");
let darkTheme = document.getElementById("dark__theme");

themes.forEach((theme) => {
  theme.addEventListener("click", () => {
    if (isLight) {
      covers.forEach((cover) => {
        cover.style.transform = "translateX(0)";
      });
      isLight = false;
    } else {
      covers.forEach((cover) => {
        cover.style.transform = "translateX(100%)";
      });
      isLight = true;
    }
    darkTheme.disabled = !darkTheme.disabled;
    lightTheme.disabled = !lightTheme.disabled;
  });
});
