import Icon from './img/icon.png';

const generateInitialStructure = () => {

    // set favicon:
    const head = document.querySelector('head');
    const favIcon = document.createElement('link');
    head.appendChild(favIcon);
    favIcon.setAttribute('rel', 'icon');
    favIcon.setAttribute('type', 'image/x-icon');
    favIcon.setAttribute('href', Icon)

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
    menuButtonBg.classList.add('nav-button-bg');
    menuButton.appendChild(menuButtonBg);

    const specialsButton = document.createElement('div');
    specialsButton.classList.add('specials-button');
    specialsButton.classList.add('nav-button');
    nav.appendChild(specialsButton);
    specialsButton.textContent = `specials`;
    const specialsButtonBg = document.createElement('div');
    specialsButtonBg.classList.add('specials-button-bg');
    specialsButtonBg.classList.add('nav-button-bg');
    specialsButton.appendChild(specialsButtonBg);


    const aboutButton = document.createElement('div');
    aboutButton.classList.add('about-button');
    aboutButton.classList.add('nav-button');
    nav.appendChild(aboutButton);
    aboutButton.textContent = 'about';
    const aboutButtonBg = document.createElement('div');
    aboutButtonBg.classList.add('menu-button-bg');
    aboutButtonBg.classList.add('nav-button-bg');
    aboutButton.appendChild(aboutButtonBg);

    const contactButton = document.createElement('div');
    contactButton.classList.add('contact-button');
    contactButton.classList.add('nav-button');
    nav.appendChild(contactButton);
    contactButton.textContent = 'contact';
    const contactButtonBg = document.createElement('div');
    contactButtonBg.classList.add('contact-button-bg');
    contactButtonBg.classList.add('nav-button-bg');
    contactButton.appendChild(contactButtonBg);
    
    // create main content div:
    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);
    content.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis euismod ex at dictum. In vel nisi quis augue tristique posuere. Nunc quis vehicula sem. Sed et nibh a lectus laoreet scelerisque quis a libero. Ut eu neque dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque pretium nulla sed elit scelerisque lacinia. Phasellus arcu felis, tristique vitae finibus nec, gravida ut lacus. Nulla et est eget risus cursus fringilla. In hac habitasse platea dictumst. Aenean quam orci, suscipit ut augue a, venenatis fringilla felis. Suspendisse vel facilisis neque. Integer sapien nulla, tristique tempus dictum sit amet, euismod nec ex. Pellentesque tortor quam, commodo et porttitor vel, tristique a arcu. Pellentesque a leo ac nulla vulputate luctus. Aenean cursus nisl quis mi lacinia tincidunt quis ac magna. Sed sagittis nisl laoreet tortor ultricies, ut interdum ligula blandit. Nullam vitae iaculis risus. Pellentesque quis viverra neque. Suspendisse potenti. Aenean lacinia mattis nisl nec imperdiet. Vivamus id viverra justo. Vivamus fermentum commodo est maximus vestibulum. Mauris auctor ac nulla id accumsan. Phasellus malesuada orci ac laoreet varius. Donec in felis est. Aenean ac porttitor magna. Proin ac neque eget ipsum egestas ullamcorper sed nec turpis. Pellentesque leo nisi, consequat et tellus molestie, tempor euismod mi. Ut sit amet justo ultrices, auctor ipsum id, imperdiet tellus. Integer ac elementum eros. Proin viverra, odio vel aliquet sollicitudin, ligula risus pretium odio, quis dictum leo libero eu urna.';

    // create footer:
    const footer = document.createElement('footer');
    body.appendChild(footer);
    footer.textContent = 'copyright © 2022 | sean stephen brian';

};

export default generateInitialStructure;