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
      // console.log(cover.style.transform);
      isLight = false;
    } else {
      covers.forEach((cover) => {
        cover.style.transform = "translateX(26px)";
      });
      isLight = true;
    }
    darkTheme.disabled = !darkTheme.disabled;
    lightTheme.disabled = !lightTheme.disabled;
  });
});
