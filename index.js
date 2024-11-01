let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle the menu icon and navbar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Smooth scrolling effect for navigation links
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let top = window.scrollY;

    section.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Reset menu state on scroll
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active"); 
});

// Handle form submission
let form = document.querySelector('form'); // This selects the first form in the document

form.onsubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    let formData = new FormData(form); // Create a FormData object from the form
    let data = {};
    
    // Convert FormData to a plain object
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log('Form Data Submitted:', data);

    // Optional: Send data to the server
    fetch('submit.php', {
        method: 'POST',
        body: formData // You can send the FormData object directly
    })
    .then(response => response.text()) // Assuming you want a text response
    .then(result => {
        console.log('Success:', result);
        alert('Message sent successfully!'); // Notify user on success
        form.reset(); // Reset the form fields
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while sending your message. Please try again.'); // Notify user on error
    });
};
