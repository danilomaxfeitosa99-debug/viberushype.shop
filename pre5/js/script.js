document.addEventListener("DOMContentLoaded", function() {
    // Redirect all buttons and clickable images to google.com
    document.querySelectorAll("a.btn, .clickable-image, .logo, .nav-links a, .footer-links a").forEach(element => {
        element.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (href && (href.includes("privacy.html") || href.includes("terms.html"))) {
                return; // Allow legal pages
            }
            e.preventDefault();
            window.location.href = "https://google.com";
        });
    });

    // Form submission redirect
    const contactForm = document.querySelector(".contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            window.location.href = "https://google.com";
        });
    }
});
