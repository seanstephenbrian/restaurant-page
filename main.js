/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const generateInitialStructure = (function() {\n\n    const body = document.querySelector('body');\n\n    // create header section:\n    const header = document.createElement('header');\n    body.appendChild(header);\n\n        header.textContent = 'HEADER';\n\n    // create nav div:\n    const nav = document.createElement('div');\n    nav.classList.add('nav');\n    body.appendChild(nav);\n\n        nav.textContent = 'NAV';\n\n    // create nav buttons & append them to nav:\n    const menuButton = document.createElement('div');\n    menuButton.classList.add('menu-button');\n    menuButton.classList.add('nav-button');\n    nav.appendChild(menuButton);\n\n        menuButton.textContent = 'MENU BUTTON';\n\n    const specialsButton = document.createElement('div');\n    specialsButton.classList.add('specials-button');\n    specialsButton.classList.add('nav-button');\n    nav.appendChild(specialsButton);\n\n        specialsButton.textContent = 'SPECIALS BUTTON';\n\n    const aboutButton = document.createElement('div');\n    aboutButton.classList.add('about-button');\n    aboutButton.classList.add('nav-button');\n    nav.appendChild(aboutButton);\n\n        aboutButton.textContent = 'ABOUT BUTTON';\n    \n    // create main content div:\n    const content = document.createElement('div');\n    content.id = 'content';\n    body.appendChild(content);\n\n        content.textContent = 'CONTENT';\n\n    // create footer:\n    const footer = document.createElement('footer');\n    body.appendChild(footer);\n\n        footer.textContent = 'FOOTER';\n\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;