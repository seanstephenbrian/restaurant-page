import Drawing2 from './img/drawing-2.png';

const renderWelcome = () => {

    const content = document.querySelector('#content');

     // make the #content box height small for this tab:
     content.setAttribute('style', 'flex: none; margin-top: calc(var(--rvv));');

     const drawing = document.createElement('img');
     drawing.src = Drawing2;
     drawing.setAttribute('alt','Drawing of a Roman wine dipper');
     drawing.classList.add('drawing-two');
     content.appendChild(drawing);
 
     const welcomeMessage = document.createElement('div');
     welcomeMessage.classList.add('welcome-message');
     content.appendChild(welcomeMessage);
     welcomeMessage.textContent = 'welcome!';

};

export default renderWelcome;