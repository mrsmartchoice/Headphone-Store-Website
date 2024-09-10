// Select elements
const hamburger = document.querySelector('.hamburger i');
const navMenu = document.querySelector('.navbar');
const socialContainer = document.querySelector('.social-container');
const shopSearch = document.querySelector('.shop-search');

// Function to toggle the hamburger menu and navbar
function toggleNavbar() {
    // Toggle active class for animations
    hamburger.classList.toggle('bx-x');
    hamburger.classList.toggle('bx-menu');
    navMenu.classList.toggle('active');
    socialContainer.classList.toggle('active');
    shopSearch.classList.toggle('active');
}

// Add click event listener to the hamburger menu
hamburger.addEventListener('click', toggleNavbar );


