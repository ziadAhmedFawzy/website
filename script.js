document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simple validation - check if name and email are provided
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            alert('Please enter both name and email.');
        } else {
            alert('Form submitted successfully!');
            // You can add further logic here, like sending the form data to a server.
        }
    });
});
