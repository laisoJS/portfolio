document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll('.dot');
    const sections = document.querySelectorAll('main, section');
    const stepper = document.querySelector('.stepper');

    function updateActiveDot(activeDot) {
        dots.forEach(dot => dot.classList.remove('active'));
        activeDot.classList.add('active');
    }

    function handleScroll() {
        let current = '';

        // Determine if the user is at the bottom of the page
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if at the bottom of the page
        const atBottom = scrollPosition >= documentHeight - 1;

        if (atBottom) {
            current = sections[sections.length - 1].getAttribute('id'); // Last section ID
        } else {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                const sectionBottom = sectionTop + section.offsetHeight;

                // Check if the middle of the viewport is within the section
                if (window.scrollY + window.innerHeight / 2 >= sectionTop &&
                    window.scrollY + window.innerHeight / 2 <= sectionBottom) {
                    current = section.getAttribute('id');
                }
            });
        }

        // Update the active dot
        dots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.dataset.target === `#${current}`) {
                dot.classList.add('active');
            }
        });
    }

    // Handle dot clicks
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const target = document.querySelector(dot.dataset.target);
            target.scrollIntoView({ behavior: 'smooth' });
            updateActiveDot(dot);
        });
    });

    // Handle scroll events
    window.addEventListener('scroll', handleScroll);

    // Hide stepper on small screens
    const handleResize = () => {
        if (window.innerWidth <= 767) {
            stepper.classList.add('hidden');
        } else {
            stepper.classList.remove('hidden');
        }
    }

    // Initial check
    handleResize();

    // Handle resize events
    window.addEventListener('resize', handleResize);
});
