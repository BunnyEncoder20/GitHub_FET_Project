# Development Branch 
This is the Final Evaluation Test Project Project - an E-Commerce Website Main Branch. All developments
should only take place in the Development branch. The changes made will be merged into the Main branch
later on.

# Feature Branches 
This branches are made whenever I work on new feature. until the feature is not completed, these are not 
merged back into the development back into the development branch. Once a feature is completed, it is merged 
into the development branch 


## Client : 
npm create vite@latest .         // initializing the project inside the client folder
npm i 

npm install react-bootstrap bootstrap   // installing react-bootstrap
{
    // add the following line in App.jsx for importing bootstrap : 
    import 'bootstrap/dist/css/bootstrap.min.css';

    // add the following line in the index.html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
}

// PS : 
    1. don't use both bootstrap and tailwindcss in the same project, will cause issues 
    2. remove all the things in index.css, App.css file when using bootstrap components
    3. If you to add more styling/modify, create a component.css in that components's folder and add teh css there




## Server : 
npm init
npm i express ejs body-parser dotenv mongoose

Better way to nodemon : 
1. Installing it globally : npm i nodemon -g
2. To run the server : nodemon fileName.js 
3. npm i -D nodemon - development installation

### To checkout the installed npm packages : 
npm ls --depth=0


### Making the production grade folders for the project : 
---
**New-Item -ItTemType Directory -Path "controller"s", "db", "middlewares", "models",e "routes", "utils"**
Above is a line to create folders (directories) using powershell
1. Controllers - where major functionality kept here
2. db - folder where how to connect to our db is kept 
3. middlewares - code which is middle of comms. eg : get me the request machine cookies to check if they have access to this information from the servers
4. models - where all the data models are kept 
5. routes - the routes to various pages are kept here
6. utils - short for utilities. eg : uploading files,folders or emailing 


### Production level Project tips 
---
1. install Prettier for constant formatting of the code : npm i -D prettier
    - make file : .prettierrc (outside the src folder)
    - add configuration to it like : 
        {
            "singleQoute":false,
            "bracketSpacing":true,
            "tabWidth":2,
            "trailingComma":"es5",
            "semi":true
        }
    - make .prettierignore file (for files on which you don't want prettier to work on )
    - basic files to add inside of this file can be : 
        /.vscode
        /node_modules
        ./dist
        *.env
        .env 
        .env.*
