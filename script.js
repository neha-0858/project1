const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

function donateAlert(){
alert("Thank you for supporting AnimalCare! ❤️");
}