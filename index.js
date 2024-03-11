const HEADER_BUTTON = document.querySelector(".header__button-burger");
const BODY = document.body;
const NAV = document.querySelector(".header__nav");
HEADER_BUTTON.addEventListener("click", () => {
  BODY.classList.toggle("navigation-open");
});
