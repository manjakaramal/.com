document.addEventListener('DOMContentLoaded', function () {
    // Show the default page ('home')
    showPage('home');
});

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(function (page) {
        page.style.display = 'none';
    });

    // Remove the 'active' class from all menu items
    document.querySelectorAll('.menu-item').forEach(function (menuItem) {
        menuItem.classList.remove('active');
    });

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';

    // Add the 'active' class to the clicked menu item
    document.querySelector(`[onclick="showPage('${pageId}')"]`).classList.add('active');

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// emailjs
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_x3ciah6', 'template_yhfxdx9', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent',
                text: 'Your message has been sent successfully!',
            });
        }, function(error) {
            console.log('FAILED...', error);
            Swal.fire({
                icon: 'error',
                title: 'Failed to Send Message',
                text: 'Failed to send your message. Please try again.',
            });
        });
});