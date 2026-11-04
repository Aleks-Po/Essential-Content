const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-navigation");
const menuIcon = menuButton.querySelector("i");
const navigationLinks = document.querySelectorAll(".main-navigation a")


function openMenu() {
	navigation.classList.add("menu-open");
	document.body.classList.add("menu-is-open");
	menuButton.setAttribute("aria-expanded", "true");

	menuIcon.classList.remove("fa-bars");
	menuButton.classList.add("fa-xmark");

	const firstNavigationLink = navigation.querySelector(".nav-list a");
	firstNavigationLink.focus();
}


function closeMenu() {
	navigation.classList.remove("menu-open");
  document.body.classList.remove("menu-is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuIcon.classList.add("fa-bars");
  menuIcon.classList.remove("fa-xmark");
}


function toggleMenu() {
  const menuIsOpen = navigation.classList.contains("menu-open");
	if (menuIsOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}


menuButton.addEventListener("click", toggleMenu);


document.addEventListener("keydown",
	function (event) {
		if (
			event.key === "Escape" &&
			navigation.classList.contains("menu-open")
		) {
			closeMenu();
			menuButton.focus();
		}
  }
);



navigationLinks.forEach(
  function (link) {
    link.addEventListener("click", closeMenu);
  }
);