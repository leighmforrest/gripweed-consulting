document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("#hambuger");
  const menu = document.querySelector("#menu");

  hamburger.addEventListener("click", ()=> menu.classList.toggle("hidden"))
});
