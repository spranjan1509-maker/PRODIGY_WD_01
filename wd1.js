const navbar = document.getElementById("navbar");
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");

/* Change navbar style on scroll */
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Highlight active section
    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            links.forEach(link => link.classList.remove("active"));
            document.querySelector(`a[href="#${id}"]`).classList.add("active");
        }
    });
});

/* Smooth scrolling */
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
