const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });

  burger.classList.toggle("toggle");
});
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  // Perform search operation here
  console.log(`Searching for: ${searchTerm}`);
  searchInput.value = "";
});
