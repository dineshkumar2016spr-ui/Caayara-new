// This file contains JavaScript code for any interactive features on the website, such as smooth scrolling to sections or form validation.

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Form validation example (for contact form)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            if (!name || !email) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    }
});