const about = document.getElementById("about");
const contacts = document.getElementById("contact");
const project = document.getElementById("work");
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

about.style.scrollMarginTop = `${headerHeight}px`
contacts.style.scrollMarginTop = `${headerHeight}px`
project.style.scrollMarginTop = `${headerHeight}px`
