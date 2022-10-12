const generateInitialStructure = () => {

    const body = document.querySelector('body');

    // create header section:
    const header = document.createElement('header');
    body.appendChild(header);
    header.textContent = 'apicius cafe';

    // create nav div:
    const nav = document.createElement('div');
    nav.classList.add('nav');
    body.appendChild(nav);

    // create nav buttons & append them to nav:
    const menuButton = document.createElement('div');
    menuButton.classList.add('menu-button');
    menuButton.classList.add('nav-button');
    nav.appendChild(menuButton);
    menuButton.textContent = 'menu';

    const specialsButton = document.createElement('div');
    specialsButton.classList.add('specials-button');
    specialsButton.classList.add('nav-button');
    nav.appendChild(specialsButton);
    specialsButton.textContent = `today's specials`;

    const aboutButton = document.createElement('div');
    aboutButton.classList.add('about-button');
    aboutButton.classList.add('nav-button');
    nav.appendChild(aboutButton);
    aboutButton.textContent = 'about';
    
    // create main content div:
    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);

    // create footer:
    const footer = document.createElement('footer');
    body.appendChild(footer);
    footer.textContent = 'copyright © 2022 | sean stephen brian';

};

export default generateInitialStructure;