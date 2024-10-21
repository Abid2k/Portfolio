document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Check if the section is in view
            if (sectionTop < windowHeight - 50) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    };

    // Debounce function to limit how often revealSection is called
    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func.apply(null, args);
            }, delay);
        };
    };

    window.addEventListener("scroll", debounce(revealSection, 100));

    // Initialize the fade-in effect styles
    sections.forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    // Call the function initially to reveal sections already in view on page load
    revealSection();

});
