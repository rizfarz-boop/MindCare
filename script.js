// =====================
// NAVBAR TOGGLE
// =====================
const navbarNav = document.querySelector(".navbar-nav");
const menuBtn = document.querySelector("#menu");

if (menuBtn && navbarNav) {
  menuBtn.onclick = () => {
    navbarNav.classList.toggle("active");
  };
}

// =====================
// SEARCH FORM TOGGLE
// =====================
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-button");

if (searchBtn && searchForm) {
  searchBtn.onclick = (e) => {
    e.preventDefault();
    searchForm.classList.toggle("active");
    if (searchBox) searchBox.focus();
  };
}

// =====================
// CLICK OUTSIDE HANDLER
// =====================
document.addEventListener("click", function (e) {

  // Tutup navbar
  if (menuBtn && navbarNav) {
    if (!menuBtn.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  }

  // Tutup search form
  if (searchBtn && searchForm) {
    if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.remove("active");
    }
  }
});

// =====================
// ACTIVE NAV LINK
// =====================
function highlightActiveNav() {
  const links = document.querySelectorAll(".navbar .navbar-nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (
      href === currentPage ||
      (href === "index.html" && currentPage === "")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", highlightActiveNav);
