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

# Method 1: Using Vite build tool

Step 1: Navigate to the folder where you want to create the project and open it in terminal

Step 2: In the terminal of the application directory type the following command.
        "npm create vite@latest <<Application_name>>

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

# npm start - start the developer server
# npm run build - Bundles the app into static files for production
# npm test - start the test runner
# npm run enject - Removes this tools & copies .
----------------------------------------------------------------------------------------------------------------


