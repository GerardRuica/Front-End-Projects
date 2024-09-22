let lastScrollTop = 0;
let disableScrollCheck = false;
const navBar = document.querySelector(".nav-bar");
const links = document.querySelectorAll(".nav-bar a");

window.addEventListener("scroll", function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (disableScrollCheck) return;

  if (window.innerWidth > 768) {
    if (currentScroll > lastScrollTop) {
      navBar.classList.add("hide");
    } else if (currentScroll < lastScrollTop && currentScroll > 0) {
      navBar.classList.remove("hide");
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    if (window.innerWidth > 768) {
      navBar.classList.add("hide");
    }

    disableScrollCheck = true;

    setTimeout(() => {
      disableScrollCheck = false;
    }, 1000);
  });
});
