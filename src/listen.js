import renderMenu from './menu.js';
import renderSpecials from './specials.js';
import renderAbout from './about.js';
import renderContact from './contact.js';
import { setBodyHeight, setBodyWidth } from './body.js';

const addNavListeners = () => {

    // add header click listener which opens a new tab with the apicius cookbook:
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        window.open('https://www.gutenberg.org/files/29728/29728-h/29728-h.htm', '_blank');
    });

    // add nav button listeners for animation/styling:
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const clickedButton = e.target;
            // clear out 'selected-button' class from all buttons & button backgrounds:
            navButtons.forEach(button => {
                button.classList.remove('selected-button');
            });
            const navButtonBgs = document.querySelectorAll('.nav-button-bg');
            navButtonBgs.forEach(background => {
                background.classList.remove('selected-button');
            });
            // then add 'selected-button' class to the just-clicked button -- this will change the clicked button text color to red:
            clickedButton.classList.add('selected-button');
            // clear out 'selected-button-bg' class from all button backgrounds:
            navButtonBgs.forEach(background => {
                background.classList.remove('selected-button-bg');
            });
            // then add 'selected-button-bg' class to the just-clicked button background -- this will display the fruit basket behind the just-clicked button:
            const clickedBg = clickedButton.lastChild;
            clickedBg.classList.add('selected-button-bg');
        });
    });

    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', () => {
        renderMenu();
    });

    const specialsButton = document.querySelector('.specials-button');
    specialsButton.addEventListener('click', () => {
        renderSpecials();
    });

    const aboutButton = document.querySelector('.about-button');
    aboutButton.addEventListener('click', () => {
        renderAbout();
    });

    const contactButton = document.querySelector('.contact-button');
    contactButton.addEventListener('click', () => {
        renderContact();
    });

    // set initial height/width:
    setBodyHeight();
    setBodyWidth();

    // adjust body height & width whenever the window is resized:
    window.addEventListener('resize', () => {
        setBodyHeight();
        setBodyWidth();
    });

};

export default addNavListeners;