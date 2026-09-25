# React_JS
Self Learning and self-notes for React

# React:

1. React was developed by the Facebook Software Engineer 'Jordan Walke'.
2. React is an open source front-end javascript library which is used for building UI(user interfaces) and      component based architecture.
3. React is used to build single page application.
4. React allows us to create reusable UI components.


5. React creates a VIRTUAL DOM in memory
Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
6. React only changes what needs to be changed
React finds out what changes have been made, and changes only what needs to be changed.

We create react app but this is not optimal like:
ReactDom.render(
    <h1>Hello</h1>
    document.getElementById('root')
);

"""" build UIs from and independent pieces.
     like - Header, Navigation, Product-Card, Footer."""""""""""


# Instead of we create app in two ways:

# Method 1: Using create-react-app (Deprecated)

Step 1 : Navigate to your folder, where you want to create a project and open it in terminal.
Step 2 : In the terminal of that application directory type : 
        "npx create-react-app <<Application_Name>>"
Step 3 : Navigate to the newly created folder using the command  
        "cd <<Application_Name>>"
Step 4: A default application will be created with the following project structure and dependencies 
It will install some packages by default which can be seen in the dependencies in package.json file as follows:

"dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
}
Step 5 : To run this application type the following command in terminal
        "npm start"
Step 6 : The following output will be displayed in the browser        


# difference between "npx create-react-app <<Application_Name>>" and "npm install -g create-react-app" : 

1. npx create-react-app <Application_Name>

npx runs the package temporarily.
You don't need to install create-react-app globally.
It is more convenient because you can use it directly.
The package is not permanently installed globally on your system.

2. npm install -g create-react-app

-g means global installation.
create-react-app gets installed globally on your computer.
After that, you can run: "create-react-app my-app"

# Simple way to understand
npx → "I want to use this tool now without permanently installing it."
npm install -g → "Install this tool globally on my computer so I can use it anytime."
Note: Create React App is now deprecated/maintenance mode. For new React projects, modern tools such as Vite are generally preferred.

# Method 2: Using Vite build tool

Step 1: Navigate to the folder where you want to create the project and open it in terminal

Step 2: In the terminal of the application directory type the following command.
        "npm create vite@latest <<Application_name>>"

Step 3: It will ask you a few questions: 
        Select the React Framework and then variant as JavaScript from options 
        Project name: my-app
        Select a framework: React
        Select a variant: JavaScript  

Step 4: Then go into your project and Navigate to the newly created folder using the command.
        "cd my-app"
        now, we can see the basic project structure.

Ttep 5: Install dependencies so Use the below command in terminal to install all required dependencies.
        "npm install"
        After successfully executing this command we can see a new folder named "node_module" in the project folder which contains all the dependencies.

Step 6: Start the development server, To run the application use the following command in terminal.
        "npm run dev"
        You'll get a URL similar to:
        http://localhost:5173/


# simple-
npm create vite@latest <<Application_name>>
cd my-app
npm install
npm run dev

----------------------------------------------------------------------------------------------------------------
For uderstanding 👍
"npx create-react-app my-app " -> when we run the command in terminal then we see many instruction in terminal.

1. creating a new React app in the directory "my-app"
2. Initially react, react dom, react scripts with cra-templates.
3. added 1295 packages
4. 275 packages are looking for funding
   run 'npm fund' for details
5. Successfully created my-app
6. Run several commands

# npm start - start the developer server and compiled successfully (first cd my-app then npm start) , means     application is started, localhost3300
# npm run build - Bundles the app into static files for production
# npm test - start the test runner
# npm run enject - Removes this tools & copies.

_______________________________________________________________________________________________________________

# Component : 
React component names normally start with a capital letter.
A component is a small, independent part of a webpage.
A reusable building block of a React application.
This makes the application easier to create, understand, modify, and maintain.

------------------------------------------------
|                  Header                      |
------------------------------------------------
| Sidebar |             Main Content           |
|         |                                    |
|         |       Product Card                 |
|         |       Product Card                 |
------------------------------------------------
|                  Footer                      |
------------------------------------------------

Each part can be a separate React component:

App
├── Header
├── Sidebar
├── MainContent
│    ├── ProductCard
│    └── ProductCard
└── Footer

# Types of component
1. Class based component - Today, Functional Components are commonly used.
2. Function based component -A functional component is simply a JavaScript function that returns JSX.

# Example 
function Welcome() {
    return <h1>Hello World!</h1>;
}

export default Welcome;

# Explanation
function Welcome() : creates a component called Welcome.
return <h1>Hello World!</h1> : returns what should appear on the webpage.

________________________________________________________________________________________________________________

# folder in React app: 

If you use Create React App
When you run: " npx create-react-app my-app "
you get a structure roughly like this:

my-app/
│
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

# Main folders : There are 3 important automatically created folders:

1. node_modules → Contains installed all packages and libraries, when you create a react app.
                  It contains all the packages and libraries needed by your React project.
                  When you run npm install, these packages are downloaded here.
                  Don't edit this folder manually.
                  It can be very large.

2. public → Contains public/static files. but in this folder "index.html" is important to use this.
    1. index.html: The HTML page where React is loaded.

3. src → Contains the main React source code. we use only three files: 
    1. App.js: this is a component.
    2. index.js: this is a entry point.
    3. App.css: (not imp) all css is written here, or we avoid or delete this while using the import "bootstap css".

src/
├── App.js -> Your main React component.
└── index.js -> Connects your React application to the HTML page.

node_modules can contain a very large number of files and folders, so we normally don't count everything inside it manually.


# some other : where we dont use to modify

1. .gitignore: 
This file tells Git which files/folders should not be uploaded or tracked.
For example, node_modules is usually included in .gitignore.
.gitignore = Files that Git should ignore

2. package.json:
It contains information about your project, dependencies (packages) used by your project.
It contains commands/scripts like npm run dev.
package.json = Project information + packages + commands

3. package-lock.json:
It records the exact versions of the packages installed in your project.
It helps make sure the same package versions are installed on different computers.
package-lock.json = Exact package/version record

4. README.md: Project information/instructions
It is a documentation file.
It explains things about the project, such as:
What the project is
How to install it
How to run it

________________________________________________________________________________________________________________




# JSX : JAVASCRIPT XML

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
"write your jsx code inside any function based component you use short format like : div.blank then automatically with the help of emmet setting in vs code you use this "div.blank"  then convert-> 
" <div className = "blank> </div> "

same as:
li.name -> <li className = "name">

"basically React is used 'Webpack' "

# Example of JSX: 

function App() {
    const name = "Rahul";

    return (
        <>
            <h1>Hello {name}</h1>
            <p>Welcome to React</p>
        </>
    );
}

Here we can use:
HTML-like elements → <h1>, <p>, <div>
JavaScript → {name}
So JSX combines UI + JavaScript logic in a convenient way.


# Compiled in Bebel: above code is compiled through the Bebel.
#                    Babel is a JavaScript compiler/transpiler.
#                    It main job is to convert modern JS, JSX code into JavaScript that browsers can understand.
#                    Bebel Compiles JSX down to "React.createElement()"  calls. "
                     
#                    Example 1 :
                     const element =(
                        <h1 className = "greeting"> 
                        Hello World!
                        </h1>
                     )

#                    # this code is compiled through the babel like
                       const element = React.createElement(
                        'h1',
                        {className: 'greeting'},
                        'Hello World!'
                       );

                       this code is too complex thats why we write the code in jsx format which is easy to understand
                       

# Exanmple 2 : We write JSX:

function App() {
    return <h1>Hello</h1>;
}
The browser does not directly understand JSX.

# Babel converts it into JavaScript like:

React.createElement("h1", null, "Hello");

Then the browser can work with it.





# Webpack : 
Webpack is a module bundler. It takes your JavaScript, JSX, CSS, images, etc. and processes them so the browser can use your application.

1. Older React projects created with Create React App commonly used Webpack internally.
React Code
   ↓
Webpack
   ↓
Browser-ready files


2. Vite: Modern React projects commonly use Vite instead of Webpack.
React Code
   ↓
Vite
   ↓
Browser
Vite is generally faster and is commonly used for new React projects.



# JSX FRAGMENT : 
JSX Fragment is used to group multiple JSX elements without adding an extra HTML element like extra (<div>)
<> </>  → Fragment
        → Groups multiple elements
        → Does NOT create an extra HTML tag like<div>

Problem 👎--------------------------------------------------------------
In React, a component normally needs one parent element:
function App() {
    return (
        <h1>Hello</h1>
        <p>Welcome</p>
    );
}

❌ This gives an error because there are two elements at the same level.


Using Fragment 👍---------------------------------------------------------
We can use:

function App() {
    return (
        <>
            <h1>Hello</h1>
            <p>Welcome</p>
        </>
    );
}

Here:
<>
   ...
</>

is a Fragment.
It allows us to group multiple elements without creating an extra <div>.

________________________________________________________________________________________________________________

# How Basic Website Works

# MultiPage Website (Non-Single Page Website):
MPA means a website has many pages.
When you click on a new page, the browser loads a new page from the server.

An MPA is a traditional website where each major action/navigation loads a new HTML page from the server.
Example: Traditional e-commerce websites, news websites, many older web application.

Working:
1. Browser sends a request to the server.
2. Server processes the request.
3. Server generates/gets the HTML page.
4. Server sends the HTML, CSS, and JavaScript to the browser.
5. Browser displays the page.
6. You click About.
7. Browser sends another request to the server.
8. Server returns a new HTML page.
9. Browser loads the new page.

Example: Login → Dashboard:

Login Page
    ↓
Submit login
    ↓
Server
    ↓
New Dashboard HTML
    ↓
Dashboard Page
The server sends a new page after login.



# Single-Page Application
SPA means the website loads one main page first.
When you click something, the page does not fully reload. JavaScript changes the content on the screen.

A SPA loads one main HTML page initially and then uses JavaScript to dynamically change what the user sees.
Popular SPA technologies include React, Angular, and Vue.

Suppose you visit:

Initially:
1. Browser requests the application.
2. Server sends the main HTML file.
3. Browser downloads JavaScript, CSS, etc.
4. JavaScript starts the application.
5. User clicks Products.
6. Instead of requesting an entirely new HTML page, JavaScript changes the displayed content.
7. The application may request only the required data from the backend API.

Login Screen
    ↓
JavaScript sends login request
    ↓
API
    ↓
JSON response
    ↓
JavaScript updates UI
    ↓
Dashboard appears
The browser doesn't necessarily perform a full page reload.

________________________________________________________________________________________________________________

# Bootsrap:
Bootstrap is a CSS framework that helps you make websites quickly and easily.
It is a CSS framework (with JavaScript components too).
Means we does not need to write too much css or js.
It gives you ready-made styles and components, so you don't have to write all CSS from scratch.
What Bootstrap provides: Buttons, Forms, Navbar, Cards, Tables, Grid System etc.

# how to add bootsrap css in your app:

Bootstrap's Docs --> Quick Start --> Go to Bootstrap css --> copy the link -> and paste it index.html(public folder) above the <tilte> tag.

# how to add bootsrap js in your app:

Bootstrap's Docs --> Quick Start --> Go to Bootstrap js --> copy the link -> and paste it index.html(public folder) <body> tag.

@ we delete the index.css, bzc we use bootstrap.

## now Create a project 1 👍
Project name : TextUtentils
function of this project: no. of words count, Remove extra spaces, Capitalization, Lower to Upper case

So, basically we create a text-box with button.
now we use Navbar component from Bootstrap Framwork.

Create a Folder in src -> component folder -> Navbar File or component.
convert all class -> className
        all tab   -> tabIndex
        all for   -> HTMLFor
        href="#"  -> href="/"
        and apply all closing tag.

In my project We convert Navbar ->textUtentils
contain only Home, About and remove all remining navigation link.



