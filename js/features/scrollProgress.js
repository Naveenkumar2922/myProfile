function initScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        let progress = 0;
        if (scrollHeight > 0) {
            progress = (scrollTop / scrollHeight) * 100;
        }
        
        scrollProgress.style.width = progress + '%';
    });
}