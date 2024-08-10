const navbarEl = document.querySelector(".navbar");

window.addEventListener("scroll", () =>
	window.scrollY >= 50 ? navbarEl.classList.add("bg-dark", "navbar-sticky") : navbarEl.classList.remove("bg-dark", "navbar-sticky")
);
