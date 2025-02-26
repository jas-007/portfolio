// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.project-card, .skill-category');

const reveal = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', reveal);

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
});

// Dynamic UI Designs gallery
const designs = [
    { image: 'design1.jpg', title: 'Design 1' },
    { image: 'design2.jpg', title: 'Design 2' },
    // Add more designs as needed
];

const designGrid = document.querySelector('.design-grid');
designs.forEach(design => {
    const designElement = document.createElement('div');
    designElement.className = 'design-item';
    designElement.innerHTML = `
        <img src="${design.image}" alt="${design.title}">
        <h3>${design.title}</h3>
    `;
    designGrid.appendChild(designElement);
}); 