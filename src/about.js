import Drawing1 from './img/drawing-1.png';

const renderAbout = () => {
    const content = document.querySelector('#content');

    // clear out previous contents of #content div:
    content.textContent = '';
    
    const drawing = document.createElement('img');
    drawing.src = Drawing1;
    drawing.setAttribute('alt','Drawing of a Roman serving platter');
    drawing.classList.add('drawing-one');
    content.appendChild(drawing);

    const aboutText = document.createElement('div');
    content.appendChild(aboutText);
    aboutText.classList.add('about-text');
    const aboutParaOne = document.createElement('p');
    aboutParaOne.classList.add('about-para-1');
    aboutText.appendChild(aboutParaOne);
    aboutParaOne.textContent = 
        `apicius cafe is a rustic roman restaurant inspired by caelius apicius, author of the cookbook DE RE COQUINARIA.`;
    const aboutParaTwo = document.createElement('p');
    aboutParaTwo.classList.add('about-para-2');
    aboutText.appendChild(aboutParaTwo);
    aboutParaTwo.textContent = 
        `our food celebrates the full range of vegetables, grains, meat, and seafood one finds in roman cookery.
        we use fresh spices and seasonings from across the empire to craft truly delicious, authentic dishes.`;
    const aboutParaThree = document.createElement('p');
    aboutParaThree.classList.add('about-para-3');
    aboutText.appendChild(aboutParaThree);
    aboutParaThree.textContent = 
        `we also make liberal use of flavor-enhancing additions such as garum — an umami-rich condiment made from fermented fish
         — and silphium, otherwise known as laser, a plant whose roots produce a truly intoxicating and addictive seasoning.`;
    const aboutParaFour = document.createElement('p');
    aboutParaFour.classList.add('about-para-4');
    aboutText.appendChild(aboutParaFour);
    aboutParaFour.textContent = 
        `thank you for your interest in apicius cafe — we hope to feed you soon. bibe multis annis!`;
};

export default renderAbout;