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

npm i -D tailwindcss postcss autopredixer
npx tialwaindcss init -p

{
    //add the following in the tailwind.config.js
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
}

{
    // add the following in main .css file : (index.css)
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
}





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
**mkdir controllers db middlewares models routes utils**
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
