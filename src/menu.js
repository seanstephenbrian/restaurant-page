const renderMenu = () => {

    const content = document.querySelector('#content');

    // clear out previous contents of #content div:
    content.textContent = '';

    const menuTitle = document.createElement('h1');
    content.appendChild(menuTitle);
    menuTitle.textContent = 'cafe menu';
    menuTitle.classList.add('menu-title');

    const menuDate = document.createElement('h2');
    content.appendChild(menuDate);
    const today = new Date();
    const day = today.getDate();
    let month = today.getMonth() + 1;
    if (month === 1) {
        month ='january';
    } else if (month === 2) {
        month = 'february';
    } else if (month === 3) {
        month = 'march';
    } else if (month === 4) {
        month = 'april';
    } else if (month === 5) {
        month = 'may';
    } else if (month === 6) {
        month = 'june';
    } else if (month === 7) {
        month = 'july';
    } else if (month === 8) {
        month = 'august';
    } else if (month === 9) {
        month = 'september';
    } else if (month === 10) {
        month = 'october';
    } else if (month === 11) {
        month = 'november';
    } else if (month === 12) {
        month = 'december';
    }
    const year = today.getFullYear();
    menuDate.textContent = `${month} ${day}, ${year}`;
    menuDate.classList.add('menu-date');

    const menuItems = document.createElement('ul');
    menuItems.classList.add('menu-list');
    content.appendChild(menuItems);
    const currentMenu = [
        'gustatio:',
        'farro puls with field vegetables (add cheese or honey for 1 assarius)',
        'boiled eggs, cabbage, & market fish drizzled with olive oil',
        'prima mensa:',
        'roast whole chicken seasoned with laser root, drizzled with olive oil and honey, served atop turnips and lentils',
        'honey-glazed ham stuffed with fresh figs and roasted over coals, served with a wine, black pepper, and garum sauce',
        'hunter-style pork cutlets marinated in oil & spices and cooked in honey-sweetened gravy ',
        'grilled pork belly served with a raisin wine, black pepper, and lovage sauce',
        'secunda mensa:',
        'honey cake with apples, grapes, and hazelnuts',
        'candied dates stuffed with nuts',
        'fried milk-soaked bread drizzled with honey',
        '(wine pairing available for 1 dupondius)'
    ]
    currentMenu.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = item;
        if (item === 'gustatio:' | item === 'prima mensa:' | item === 'secunda mensa:') {
            menuItem.classList.add('course-title');
        } else {
            menuItem.classList.add('menu-item');
        }
        menuItems.appendChild(menuItem);
    });

};

export default renderMenu;