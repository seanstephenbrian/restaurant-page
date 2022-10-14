import Drawing2 from './img/drawing-2.png';

const renderContact = () => {
    const content = document.querySelector('#content');

    // clear out previous contents of #content div:
    content.textContent = '';

    // make the #content box height small for this section:
    content.setAttribute('style', 'flex: none; margin-top: calc(var(--rvv));');
    
    const drawing = document.createElement('img');
    drawing.src = Drawing2;
    drawing.setAttribute('alt','Drawing of a Roman wine dipper');
    drawing.classList.add('drawing-two');
    content.appendChild(drawing);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    content.appendChild(contactInfo);
    contactInfo.textContent = 'contact us';
};

export default renderContact;