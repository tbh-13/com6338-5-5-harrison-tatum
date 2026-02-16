var hamburgerMenu = document.querySelector(".hamburger-menu");
var hamburgerBtn = document.querySelector(".hamburger-btn");

// toggle menu and manage ARIA
function toggleMenu() {
    menuOpened = hamburgerMenu.classList.toggle("show-menu");
    hamburgerBtn.setAttribute("aria-expanded", menuOpened);
}

hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
});

function closeMenu() {
    hamburgerMenu.classList.remove("show-menu");
    hamburgerBtn.focus();
    hamburgerMenu.setAttribute("aria-expanded", "false");
}

// closeBtn.onclick = closeMenu;

// close menu when clicking outside of it
document.addEventListener("click", (e) => {
   var menuOpened =hamburgerMenu.classList.contains("show-menu")
   var clickedWithinMenu = hamburgerMenu.contains(e.target);
   var clickedBtn = hamburgerBtn.contains(e.target);

   if (menuOpened && !clickedWithinMenu && !clickedBtn) {
       closeMenu(); 
   }
});

// close menu if esc or tab is pressed
document.onkeyup = function(e) {
    var menuOpened = hamburgerMenu.classList.contains("show-menu");
    if (e.key === "Escape" && menuOpened) {
        closeMenu();
    }
    if (e.key === "Tab" && menuOpened && !hamburgerMenu.contains(document.activeElement)) {
        closeMenu();
    }
};