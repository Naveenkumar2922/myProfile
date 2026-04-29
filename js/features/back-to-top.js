function initBackToTop() {
    const backToTopBtn = document.getElementById("back-to-top");
    if (!backToTopBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            // Show the button
            backToTopBtn.classList.remove("hidden");
            backToTopBtn.classList.remove("opacity-0", "translate-y-4");
            backToTopBtn.classList.add("flex", "opacity-100", "translate-y-0");
        } else {
            // Hide the button
            backToTopBtn.classList.add("hidden");
            backToTopBtn.classList.remove("flex", "opacity-100", "translate-y-0");
            backToTopBtn.classList.add("opacity-0", "translate-y-4");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}