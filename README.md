# restaurant-page
a themed restaurant page dynamically generated with JS & bundled with webpack

live version: https://seanstephenbrian.github.io/restaurant-page/

the concept behind this project was to generate a basic website for an imaginary restaurant
using javascript alone. this also my first project bundled with webpack, which definitely
improved my development workflow by allowing me to see my changes in the browser in real time,
saving me tons of time. besides not touching the HTML at all, the other focus here was to take a
modular approach to the javascript: discrete functions are separated into different javascript files;
these files are imported into each other as necessary, and everything is bundled by webpack into
a final main.js file.

the dynamic rendering of the site with js was fairly straightforward and didn't present too many
difficulties: event listeners trigger functions to re-render the main #content <code>div</code> when the
user clicks one of the buttons in the nav bar. these render functions add paragraphs, lists, and images to
the #content <code>div</code> but do not re-render the header or footer.

styling is done with a separate CSS file, and this is where i really had fun with this project. my last few
designs have either been very clean and professional or more experimental, so i decided to pursue an entirely 
different route this time around and make a themed design. taking inspiration from the ancient roman cookbook
'apicius' (allegedly named after its author), i used custom fonts, a sepia-filtered background image of a medieval
manuscript of the cookbook, and a background overlay (which applies a shadowy gradient to the corners of the page) 
to develop an ancient roman theme. all of the menu content is adapted from the apicius cookbook.

the nav bar is perhaps the most unique feature of the design. the nav background is an image of an ancient roman
mosaic which repeats on the x-axis, allowing the user to seamlessly resize the window. when the visitor clicks one
of the nav links, an image of an ancient roman fresco of a fruit basket appears behind the just-clicked nav element,
visually declaring which 'page' of the site the user is now visiting. i used a <code>::before</code> pseudo-element with
absolute positioning to achieve this effect. there's also a few CSS hover effects enabled at desktop-sized screen widths,
and a hidden link in the header.

here are demo screenshots of the various tabs on the webpage: