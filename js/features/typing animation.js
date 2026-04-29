function initTypingAnimation() {
    const typingText = document.getElementById("typing-text");
    if (!typingText) return;

    const roles = ["Full-Stack developer", "MERN enthusiast", "Competitive Programmer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50; // faster when deleting
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typingDelay = 2000; // pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingDelay = 500; // pause before typing next
        }

        setTimeout(type, typingDelay);
    }

    // Start typing
    setTimeout(type, 1000);
}