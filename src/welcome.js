import WelcomeDrawing from './img/welcome-drawing.png';

const renderWelcome = () => {

    const content = document.querySelector('#content');

     // make the #content box height small for this tab:
     content.setAttribute('style', 'flex: none; margin-top: calc(var(--rvv));');

     const drawing = document.createElement('img');
     drawing.src = WelcomeDrawing;
     drawing.setAttribute('alt','Drawing of a Roman casa di forno - a bakery and flour mill');
     drawing.classList.add('welcome-drawing');
     content.appendChild(drawing);
 
     const welcomeMessage = document.createElement('div');
     welcomeMessage.classList.add('welcome-message');
     content.appendChild(welcomeMessage);
     welcomeMessage.textContent = 'welcome! please click any of the links above to learn more about apicius cafe.';

};

export default renderWelcome;