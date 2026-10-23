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
import React from 'react';
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


---------------------------------------------------------------------------------------------------------------

# now Create a project 1 👍
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

________________________________________________________________________________________________________________

# ES7 React/Redux/GraphQL/React-Native snippet
Native Snippets extension: this VS Code extension is used to write React/JavaScript code faster.
Instead of typing a complete piece of code again and again, you type a short keyword, press Tab, and VS Code creates the code for you.

""In React Native, instead of writing the same code again and again, you can type a short snippet keyword,      press Tab, and VS Code automatically generates the code for you. """"""""""

Example 1: React component
Without snippet, you might write:

import React from 'react';
const App = () => {
  return (
    <div>
      Hello
    </div>
  );
};
export default App;

With the extension, you can type: rafce and press Tab.
It can generate something like:

import React from 'react';
const App = () => {
  return (
    <div>App</div>
  );
};
export default App;

So, rafce is just a shortcut for creating a React component.

________________________________________________________________________________________________________________


# Default export and name export
Before starting the props we should be know about the default export and name export.

export means: “I want to make this component/function/variable available in another file.”
Then import is used to bring it into another file

First: What is Export? :
Suppose you have a file:    Student.js
Inside this file:           const name = "Rahul";

Now you want to use name in another file.
So, you send name outside the file. This is called export.
The other file brings it inside. This is called import.

Student.js
   ↓
EXPORT = sending something outside
   ↓
App.js
   ↓
IMPORT = bringing something inside

There are two important types:
1. Default Export
2. Named Export.

--------------------------------------------------------------------------------------------------------------
# Default Export:
The simple meaning of default is: "This is the main thing from my file."

Example:

" const name = "Rahul";
  export default name; "
Here, we are making name a default export.

Now, in another file:          "  import name from "./Student"; "
That's it. name is now available in this file.

Important Poin : With a default export, you can give the imported thing any name as you want.

For example: export default name;
You can import it like this: import name from "./Student";

You can also write: import x from "./Student";

Or: import Rahul from "./Student";

All of these are allowed.

Why? Because it is a default export.
You are basically saying:
"The main thing coming from this file, I will call it Rahul here."

# Example : we have created two file under my project "textutils"
# in module2.js 
let a = "shiva";
let b = "Parvati";
let c = "Rama";
let d = "Sita";

export default a;

# in module1.mjs : 
import ui from './module2.mjs'
console.log(ui);

# then run node module1.mjs and out is : "shiva"
# export default b ; then output is "parvati" 
only changes do in module2,mjs not modify in module1.mjs, that's why it is called default export.

Bring the default exported value from module2.mjs and call it ui in this file."

----------------------------------------------------------------------------------------------------------------

# Named Export : 
Now suppose one file has many things:

"""   const name = "Rahul";
      const age = 20;
      const city = "Delhi";     """

And you want to export all three.
You can write:

"""    export const name = "Rahul";
       export const age = 20;
       export const city = "Delhi";      """
These are called named exports.

Now, in another file:
"""     import { name, age, city } from "./Student";       """

Notice the { }.

{ name, age, city }
  ↑     ↑     ↑
exact names
With named exports, you normally use the same name while importing.


# Example : we have created two file under my project "textutils"
# in module2.js 
let a = "shiva";
let b = "Parvati";
let c = "Rama";
let d = "Sita";

export default b;
export {a};
export {c};
export {d};

or we can write the above export statements in a single line as below
# export { a, c, d } 

# in module1.mjs : 
import dz, {a,c,d} from './module2.mjs'
console.log(dz);               //Parvati
console.log(a);                //shiva
console.log(c);                //Rama
console.log(d);                //Sita

________________________________________________________________________________________________________________

# Props and Props Type in React

Props means Property -> Custom component.
props are used to send data from one component to another component.

Think of props like a gift 🎁.
Parent component = person giving the gift
Child component = person receiving the gift
Props = the gift/data


Props = information/data that we pass from one component to another component.
Think of a component as a blank paper/template.
A blank paper by itself doesn't have anything useful on it.
You can give it some information, like:  "Write Rahul's name on this paper."

That Rahul is like a prop.


# Simple Example:
Suppose we create a component:

function User(props) {
  return <h1>Hello {props.name}</h1>;
}

This component is like a blank paper. It doesn't know whose name to display.

Now in another component:   <User name="Rahul" />

We are giving the component: name = Rahul

So the output will be: Hello Rahul

Here:
User → component
name → prop
"Rahul" → value of the prop
props.name → receives the value inside the component

# Example 2 👍
<User name="Rahul" age={22} city="Delhi"/>

Then:
function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.city}</p>
    </div>
  );
}

# Why do we use Props?
Props help us reuse the same component with different data.

<Student name="Rahul" />
<Student name="Priya" />
<Student name="Aman" />
Same Student component, but different names.

Props are arguments passed into React components.
Props are passed to components via HTML attributes.

________________________________________________________________________________________________________________

# Types of Props : 

1. String 👍
Syntax : PropTypes.string
PropTypes = checks the type of data you are passing.
string = text/words.
So, PropTypes.string means: “This prop should contain text.”

Example:
<Navbar title="TextUtils" />
Here "TextUtils" is a string. 

But: <Navbar title={123} />
Here 123 is a number, not a string ⚠️

So this: 
title: PropTypes.string
mens -> “The title should be text.”
aboutText: PropTypes.string
means: “aboutText should also be text.”

# .isRequired :means “this prop must be provided.”

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Example :
<Navbar title="TextUtils" />
Correct — title is provided and is a string.

<Navbar />
Warning — title is required but you didn't provide it.

" It must be text AND it must be provided."


# default PropType:
defaultProps gives a prop a default value when you don't provide that prop.

Example 👍:
Navbar.defaultProps = {
  title: 'Set Title here',
  aboutText: 'about here'
};


Now if you write: <Navbar />
React will use:
title → Set Title here
aboutText → about here

But if you write: <Navbar title="My App" />
then:
title → My App
aboutText → about here

___________________________________________________________________________________________________________

# how to change the favicon of any app:

1. download any image in any formar like png , jpg
2. to create the favicon, go to "favicon-generator.org website.
3. upload the png file and create the favicon and download.
4. extract the folder and select favicon.ico, favicon-16x16.png, favicon-32x32.png, favicon-96x96.png and paste these at public folder.
5. Now change or replace the orevious logo or image of that application in public folder --> index.html
" <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon-16x16.png" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon-32x32.png" /> "

________________________________________________________________________________________________________

# React Router 

React Router is a library for handling navigation in React applications. It lets you move between pages without reloading the entire website.

Example
Suppose you're building a React app with these pages:

/ — Home
/about — About
/contact — Contact

Without React Router, managing navigation between different pages in a React app becomes harder.

With React Router, you can:
Navigate between pages.
Show different components for different URLs.
Create dynamic pages, like /product/10.
Build multi-page experiences without full page reloads.

" React Router tells React which component to show for a particular URL. "
" Important: React Router is for client-side navigation. Your application can change views without requesting an entirely new HTML page for every navigation. "

# to install the react router:  " npm install react-router-dom "
  |_____ This is an external package.

# to check the whther react version and  react-dom version is similar like v7 or  "react-dom@19.2.8 deduped react@19.2.8 "

# to import react-router in App.js:
import { 
    BrowserRouter, 
    Routes, 
    Route, 
    Link 
    } from 'react-router-dom';

where,In React Router DOM v7, these four components are used for routing in a React application.

1. BrowserRouter: Enables routing in your React application.
It keeps track of the browser's URL and allows navigation between different pages.
Routes are defined inside the BrowserRouter
Wrap Your App with BrowserRouter
Your application must be wrapped with the BrowserRouter component to enable routing:

Example 👍

function App() {
  return (
    <BrowserRouter>
      {/* Your app content */}
    </BrowserRouter>
  );
}


2. Routes: Groups multiple Route components and renders the route that matches the current URL.
Example:
<Routes>
  {/* Define routes here */}
</Routes>

3. Route: Defines which component should be displayed for a particular URL path.
Example:
<Route path="/" element={<Textform />} />
<Route path="/about" element={<About />} />

- path="/" — Displays the Textform component on the home page.
- path="/about" — Displays the About component on the About page.
- element — Specifies which component to render.
Note: The exact prop is not needed in React Router DOM v7.

4. Linl: Navigates from one route to another without reloading the entire page.
You must first import the link, where you want to use the Link at component. Like Navbar.js
" import { Link } from 'react-router-dom'; "   

Example:
<Link to="/">Home</Link>
<Link to="/about">About</Link>

- to="/" — Navigates to the home page.
- to="/about" — Navigates to the About page.

Example : 

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

______________________________________________________________________________________________________________

# Free Building + Hosting React App For free on Github Pages

Remove all router concept when you host your react app on github pages.
visit this site " https://create-react-app.dev/docs/deployment/#github-pages "
where all details are mention how to host your react app on github pages.

1. Step 1: Add homepage to package.json 👍
This step below is important!
If you skip it, your app will not deploy correctly.

Open your package.json and add a homepage field for your project:
"   homepage": "https://myusername.github.io/my-app        ",

2. Step 2: Install gh-pages and add deploy to scripts in package.json
Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.
To publish it at https://myusername.github.io/my-app, run:  "   npm install --save gh-pages   "

3. Step 3: Add the following scripts in your package.json:

  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",

The predeploy script will run automatically before deploy is run.

4. Step 4: Run command " npm run build  "

5. Step 5: Deploy the site by running npm run deploy
Then run:   "    npm run deploy     "

6. Step 6: For a project page, ensure your project’s settings use gh-pages
Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:


# build use 👍
In npm run build, the word build tells npm to execute the build script defined in your package.json file.
What is the purpose of build?
When you develop a React application, your code contains JSX, React components, CSS, and other files. These files need to be prepared for production before deployment.

# "npm run build "
npm run — tells npm to execute a script.
build — the name of the script you want to execute.
react-scripts build — the actual command that builds your React application
does the following:
1. Compiles your code — processes JSX and JavaScript into browser-ready files.
2. Optimizes your application — minifies JavaScript and CSS to reduce file sizes.
3. Creates a build folder — contains the optimized files needed to run your website in production

 _________________________
|Your React source code   |
|Components, App.js, CSS  |
|_________________________|
             |
 ________________________________
|npm run build                   |
|Compiles and optimizes the app  |
|________________________________|
              |
 _________________________________
|build/ folder                    |
|Production-ready website files   |
|_________________________________|
               |
 _____________________________________
|npm run deploy                      |
|Publishes the files to GitHub Pages |
|____________________________________|

______________________________________________________________________________________________________________

# hostion react app without using github pages

1. step 1 : undo all routing concepts, like to do link and to -> a and href.
2. step 2 : remove "homepage": "https://Km-reshma.github.io/React_JS", from package.json.
3. step 3 : uninstall thr github pages use command " npm uninstall gh-pages"
4. step 4 : run command npm run start
5. step 5 : run command npm run build