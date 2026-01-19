
// defining elements
const sideBarButton = document.querySelector('.side-bar-button');
const closeSideBar = document.querySelector('.close-side-bar');
const sideBarSection = document.querySelector('.side-bar-section');

// show side bar
sideBarButton.addEventListener('click', () =>
    { sideBarSection.style.right = '0'});
closeSideBar.addEventListener('click', () => 
    { sideBarSection.style.right = '-100%'});

// scroll spy active indication
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a, .side-bar-section a, .main-heading .contact');

// close sidebar when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideBarSection.style.right = '-100%';
    });
});

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${entry.target.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});
