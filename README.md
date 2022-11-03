# restaurant-page
a themed restaurant page dynamically generated with JS & bundled with webpack

live version: https://seanstephenbrian.github.io/restaurant-page/

the concept behind this project was to use javascript to dynamically generate a basic website for an imaginary restaurant.

the rendering of the site with js didn't present too many difficulties: event listeners trigger functions 
to re-render the main <code>#content</code> <code>div</code> when the user clicks one of the buttons in the nav bar. 
these render functions add paragraphs, lists, and images to the <code>#content</code> <code>div</code> but do not re-render the header or footer.

styling is done in a separate CSS file, and this is where i tried to have a little extra fun. 
taking inspiration from the ancient roman cookbook 'apicius' (allegedly named after its author), i used custom fonts, 
a sepia-filtered background image of a medieval manuscript of the cookbook, and a background overlay 
(which applies a shadowy gradient to the corners of the page) to develop an ancient roman theme. 
all of the menu content is adapted from the apicius cookbook.

i think the nav bar is a somewhat unique feature of the site. the nav background is an image of an ancient roman
mosaic which repeats on the x-axis, allowing a desktop user to seamlessly resize the window. when the visitor clicks one
of the nav links, an image of an ancient roman fresco of a fruit basket appears behind the just-clicked nav element,
visually declaring which 'page' of the site the user is now visiting. i used a <code>::before</code> pseudo-element with
absolute positioning to achieve this effect. there's also a few CSS hover effects enabled at desktop-sized screen widths,
and a secret link to the apicius cookbook in the header :)

here's a couple demo screenshots:

<img src="https://raw.githubusercontent.com/seanstephenbrian/restaurant-page/main/src/img/screenshot-1.jpg" alt="screenshot of the welcome page">

<img src="https://raw.githubusercontent.com/seanstephenbrian/restaurant-page/main/src/img/screenshot-2.jpg" alt="screenshot of the specials page">

extra-wide nav bar with repeating mosaic background image:

<img src="https://raw.githubusercontent.com/seanstephenbrian/restaurant-page/main/src/img/screenshot-3.jpg" alt="screenshot of extra-wide nav bar showing x-repeat">