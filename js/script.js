
// ==================================
// AMALFI BAR & PIZZERIA
// JAVASCRIPT
// ==================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {

    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});



// MENU SHOW AND HIDE

const menuSection = document.getElementById("menu");

// All links that point to the menu
const menuLinks = document.querySelectorAll('a[href="#menu"]');

// Show menu when clicking Menu or Discover Our Menu
menuLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        menuSection.classList.add("menu-visible");

        menuSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Hide menu when navigating to other sections
const allSectionLinks = document.querySelectorAll('a[href^="#"]');

allSectionLinks.forEach(function(link) {

    if (link.getAttribute("href") !== "#menu") {

        link.addEventListener("click", function() {

            menuSection.classList.remove("menu-visible");

        });

    }

});

/*buton order options */
const orderToggle = document.getElementById("orderToggle");
const orderOptions = document.getElementById("orderOptions");
const orderDropdown = document.querySelector(".order-dropdown");

// Open and close menu
orderToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    orderOptions.classList.toggle("show");
});

// Close menu after selecting an option
orderOptions.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
        orderOptions.classList.remove("show");
    }
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    if (!orderDropdown.contains(event.target)) {
        orderOptions.classList.remove("show");
    }
});