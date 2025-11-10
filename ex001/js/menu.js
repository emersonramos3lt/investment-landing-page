const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

function openMenu() {
  menuToggle.setAttribute("aria-expanded", "true");
  navMenu.setAttribute("data-visible", "true");
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navMenu.setAttribute("data-visible", "false");
  document.body.classList.remove("no-scroll");
}

function toggleMenu() {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  if (isExpanded) {
    closeMenu();
  } else {
    openMenu();
  }
}

menuToggle.addEventListener("click", toggleMenu);

document.addEventListener("click", (event) => {
  const isMenuOpen = menuToggle.getAttribute("aria-expanded") === "true";

  if (!isMenuOpen) {
    return;
  }

  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    closeMenu();
  }
});
