const selectHamburger = document.querySelector(".hamburguer");
const selectLinks = document.querySelector(".nav-links");

selectHamburger.addEventListener("click", () => {
  selectLinks.classList.toggle("expanded");
});