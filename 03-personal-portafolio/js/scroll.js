let lastScrollTop = 0; // Guarda la posición del último scroll

window.addEventListener("scroll", function () {
  const navBar = document.querySelector(".nav-bar");
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    navBar.classList.add("hide");
  } else {
    navBar.classList.remove("hide");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
