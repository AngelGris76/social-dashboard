const body = document.querySelector(".body");
const control = document.getElementById("darkmodecontrol");

const getTheme = () => {
  let themeStored = localStorage.getItem("theme");
  if (themeStored === "dark") {
    body.classList.add("dark-theme");
    control.checked = true;
  }
};

const setTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

getTheme();

control.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    setTheme("dark");
  } else setTheme("light");
});
