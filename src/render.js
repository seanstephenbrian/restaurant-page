const renderMenu = () => {
    const content = document.querySelector('#content');
    content.textContent = 'menu';
};

const renderSpecials = () => {
    const content = document.querySelector('#content');
    content.textContent = 'specials';
};

const renderAbout = () => {
    const content = document.querySelector('#content');
    content.textContent = 'about';
};

const renderContact = () => {
    const content = document.querySelector('#content');
    content.textContent = 'contact';
};

export { renderMenu, renderSpecials, renderAbout, renderContact };