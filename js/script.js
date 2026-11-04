
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


// BOOKING FORM

const bookingForm = document.getElementById("bookingForm");

const bookingMessage = document.getElementById("bookingMessage");

const dateInput = document.querySelector('input[name="date"]');


// Prevent selecting past dates

const today = new Date();

const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localToday;


// Handle reservation form

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!bookingForm.reportValidity()) {
        return;
    }

    bookingMessage.textContent =
        "Thank you! Your reservation request has been received in this demo.";

    bookingForm.reset();

});

// VIEW MORE MENU

// VIEW MORE MENU

const moreBtn = document.getElementById("moreBtn");
const hiddenItems = document.querySelectorAll(".hidden-menu");

if (moreBtn) {

    moreBtn.addEventListener("click", function () {

        hiddenItems.forEach(function(item) {
            item.classList.add("show");
        });

        moreBtn.style.display = "none";

    });

}


// RESET MENU WHEN CLICKING NAVIGATION LINKS

const menuSection = document.getElementById("menu");

const navigationLinks = document.querySelectorAll(
    '.navigation a[href^="#"]'
);

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        hiddenItems.forEach(function(item) {
            item.classList.remove("show");
        });

        if (moreBtn) {
            moreBtn.style.display = "inline-block";
        }

    });

});