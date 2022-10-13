const addNavListeners = () => {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const clickedButton = e.target;
            // clear out selected button image from all button options:
            const navButtonBgs = document.querySelectorAll('.nav-button-bg');
            navButtonBgs.forEach(background => {
                background.classList.remove('selected-button-bg');
            });
            // then add the background to the just-clicked button:
            const clickedBg = clickedButton.lastChild;
            clickedBg.classList.add('selected-button-bg');
        });
    });
};

export default addNavListeners;