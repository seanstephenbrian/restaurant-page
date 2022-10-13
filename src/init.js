const generateInitialStructure = () => {

    const body = document.querySelector('body');

    // create overlay to apply filters to background image:
    const bgFilter = document.createElement('div');
    bgFilter.classList.add('bg-filter');
    body.appendChild(bgFilter);

    // create overlay for shadow gradient in screen corners:
    const cornerGradient = document.createElement('div');
    cornerGradient.classList.add('corner-gradient');
    body.appendChild(cornerGradient);

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
    const menuButtonBg = document.createElement('div');
    menuButtonBg.classList.add('menu-button-bg');
    menuButton.appendChild(menuButtonBg);

    const specialsButton = document.createElement('div');
    specialsButton.classList.add('specials-button');
    specialsButton.classList.add('nav-button');
    nav.appendChild(specialsButton);
    specialsButton.textContent = `specials`;
    const specialsButtonBg = document.createElement('div');
    specialsButtonBg.classList.add('specials-button-bg');
    // specialsButtonBg.classList.add('selected-button-bg');
    specialsButton.appendChild(specialsButtonBg);


    const aboutButton = document.createElement('div');
    aboutButton.classList.add('about-button');
    aboutButton.classList.add('nav-button');
    nav.appendChild(aboutButton);
    aboutButton.textContent = 'about';
    const aboutButtonBg = document.createElement('div');
    aboutButtonBg.classList.add('menu-button-bg');
    // aboutButtonBg.classList.add('selected-button-bg');
    aboutButton.appendChild(aboutButtonBg);

    const contactButton = document.createElement('div');
    contactButton.classList.add('contact-button');
    contactButton.classList.add('nav-button');
    nav.appendChild(contactButton);
    contactButton.textContent = 'contact';
    const contactButtonBg = document.createElement('div');
    contactButtonBg.classList.add('contact-button-bg');
    // contactButtonBg.classList.add('selected-button-bg');
    contactButton.appendChild(contactButtonBg);
    
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