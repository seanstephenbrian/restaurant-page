const setBodyHeight = () => {
    const windowHeight = window.innerHeight + "px";
    document.body.style.minHeight = windowHeight;
};

const setBodyWidth = () => {
    const windowWidth = window.innerWidth + "px";
    document.body.style.maxWidth = windowWidth;
};

export { setBodyHeight, setBodyWidth };