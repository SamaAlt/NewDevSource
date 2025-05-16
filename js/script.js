document.addEventListener('DOMContentLoaded', function() {

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Job application modal
    const applyButtons = document.querySelectorAll('.apply-btn');
    const modal = document.getElementById('applicationModal');
    const modalClose = document.querySelector('.close');
    const positionTitle = document.getElementById('positionTitle');
    const googleFormLink = document.querySelector('#applicationModal a.button_1'); // <== NEW!

    if (applyButtons.length && modal) {
        applyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const position = this.getAttribute('data-position');
                positionTitle.textContent = position;
                modal.style.display = 'block';

                // Optional: Dynamically update the Google Form link (if you want to prefill position)
                // Example: https://forms.gle/yourformid?entry.123456789=Job%20Position%201
                // googleFormLink.href = `https://forms.gle/yourformid?entry.123456789=${encodeURIComponent(position)}`;
            });
        });

        modalClose.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
