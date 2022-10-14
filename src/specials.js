import printDate from './date.js';

const renderSpecials = () => {
    const content = document.querySelector('#content');

    // clear out previous contents of #content div:
    content.textContent = '';

    const specialsTitle = document.createElement('h1');
    content.appendChild(specialsTitle);
    specialsTitle.textContent = 'current specials';
    specialsTitle.classList.add('page-title');

    const date = document.createElement('h2');
    content.appendChild(date);
    date.textContent = printDate();
    date.classList.add('date');

    const specialsDescription = document.createElement('h2');
    content.appendChild(specialsDescription);
    specialsDescription.classList.add('specials-description');
    specialsDescription.textContent = `below you will find a rotating selection of uniquely roman dishes prepared according to the specifications of caelius apicius.`;

    const specialsList = document.createElement('ul');
    specialsList.classList.add('list');
    content.appendChild(specialsList);
    const currentSpecials = [
        'smoked lucanian sausage: pork seasoned with crushed pepper, cumin, laurel berries and other spices, emulsified with broth and mixed nuts',
        'alexandrine-style pumpkin, boiled then baked with pepper, cumin, coriander, laser root, and vinegar, served with date wine, pine nuts, honey, and vinegar',
        'cardoons dressed with vinegar, olive oil, rue, mint, coriander, fennel seed, and lovage, served with hard-boiled eggs',
        'chickpeas with hard-boiled eggs, green fennel, pepper, and wine sauce',
        'boiled ostrich served with a thick gravy seasoned with pepper, mint, cumin, leeks, celery seed, dates, honey, and raisin wine',
        'half-fried truffles wrapped in pork caul, braised, and served in a wine sauce seasoned with pepper, cumin, laser root, coriander, and wine',
        'wild boar boiled in sea water with fresh laurel, served with salt, mustard, and vinegar',
        'mussels cooked in a broth of leek, cumin, raisin wine, and saba'
    ];
    currentSpecials.forEach(item => {
        const specialItem = document.createElement('li');
        specialItem.textContent = item;
        specialItem.classList.add('special-item');
        specialsList.appendChild(specialItem);
    });

};

export default renderSpecials;