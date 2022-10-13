const addNavListeners = () => {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const clickedButton = e.target;
            // clear out 'selected-button' class from all buttons:
            navButtons.forEach(button => {
                button.classList.remove('selected-button');
            });
            // then add 'selected-button' class to the just-clicked button -- this will change the clicked button text color to red:
            clickedButton.classList.add('selected-button');
            // clear out 'selected-button-bg' class from all button backgrounds:
            const navButtonBgs = document.querySelectorAll('.nav-button-bg');
            navButtonBgs.forEach(background => {
                background.classList.remove('selected-button-bg');
            });
            // then add 'selected-button-bg' class to the just-clicked button background -- this will display the fruit basket behind the just-clicked button:
            const clickedBg = clickedButton.lastChild;
            clickedBg.classList.add('selected-button-bg');
        });
    });
};

export default addNavListeners;