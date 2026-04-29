function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav ul li a");

    if (!sections.length || !navLinks.length) return;

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 2)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("text-gray-600");
            
            // Only add the highlight if it matches the current section
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("text-gray-600");
            }
        });
    });
}