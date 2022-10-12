const generateInitialStructure = (function() {

    const body = document.querySelector('body');

    // create header section:
    const header = document.createElement('header');
    body.appendChild(header);

        header.textContent = 'HEADER';

    // create nav div:
    const nav = document.createElement('div');
    nav.classList.add('nav');
    body.appendChild(nav);

        nav.textContent = 'NAV';

    // create nav buttons & append them to nav:
    const menuButton = document.createElement('div');
    menuButton.classList.add('menu-button');
    menuButton.classList.add('nav-button');
    nav.appendChild(menuButton);

        menuButton.textContent = 'MENU BUTTON';

    const specialsButton = document.createElement('div');
    specialsButton.classList.add('specials-button');
    specialsButton.classList.add('nav-button');
    nav.appendChild(specialsButton);

        specialsButton.textContent = 'SPECIALS BUTTON';

    const aboutButton = document.createElement('div');
    aboutButton.classList.add('about-button');
    aboutButton.classList.add('nav-button');
    nav.appendChild(aboutButton);

        aboutButton.textContent = 'ABOUT BUTTON';
    
    // create main content div:
    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);

        content.textContent = 'CONTENT';

    // create footer:
    const footer = document.createElement('footer');
    body.appendChild(footer);

        footer.textContent = 'FOOTER';

})();

export { generateInitialStructure };