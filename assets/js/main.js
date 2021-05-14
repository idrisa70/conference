const mobileMenu = document.querySelector(".menu-list");
const mobileMenuOpen = document.getElementById("m-menu-btn");

mobileMenuOpen.addEventListener("click", () => {
  console.log("object");
  mobileMenu.classList.toggle("active");
});
