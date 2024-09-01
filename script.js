
// defining elements
const sideBarButton = document.querySelector('.side-bar-button');
const closeSideBar = document.querySelector('.close-side-bar');
const sideBarSection = document.querySelector('.side-bar-section');

// show side bar
sideBarButton.addEventListener('click', () =>
    { sideBarSection.style.right = '0'});
closeSideBar.addEventListener('click', () => 
    { sideBarSection.style.right = '-100%'});
