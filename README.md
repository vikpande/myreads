# Project Overview

A web application made using React library where the user maintains his/her own library of the books. THe library is categrized into 3 different shelfs namely; 

* Currently reading
* Want to read
* Read

The application allows users to search for a book, add it to the library. The keywords for search are limited to the external API calls and the keywords can be seen at the "BooksAPI.js file"

The users can also perform these tasks:

* move the books from one shelf to another ( for e.g. move from "Currently Reading" to "Read". 
* Search for the books based on the predefined keywords ( refer BooksAPI.js as mentioned above)
* Add a new book to the shelfs as and when needed

## Getting Started

The project is bootstrapped with Create React App (https://github.com/facebookincubator/create-react-app)

To run the web app; follow the below steps and in the order requested below:
* clone the Project - git clone https://github.com/vikpande/myreads.git/  
* install the dependencies - "yarn" or do an "npm install" { if you got sometime to grab a coffee ;-) }

Development environment (localhost)

* do a "yarn start" or "npm start" on your terminal 
* do a "yarn start" or "npm start" on your terminal  

Once you run this command, you can view the web application at the following location 
 - http://localhost:3000 

Any edit to the codebase will re-laod the page automatically ( hot reload ; if you will) 
If there are any lint errors, you will be prompted in the console and also in your terminal

* Do a "yarn build" pr "npm run build" on your terminal 

The above command "builds the app" for production and saves it in the build folder locally.
The command also bundles React in production mode and optimizes the build for a good performance.
The build is minified and the filenames include the hashes.

Voila ! Your app is now ready to be deployed!. 

You can now go to the deployment step and skip the following "yarn eject" command.But it might be worth a read to know why its in there. 

WARNING: Before you run the next command on your terminal, please read the instructions:

*  "yarn eject" or "npm run eject"

Instructions :

You don’t have to ever use the above command unless you are curious to create your own configuration files and dependencies.

What happens when you run the abve command ?

Once you run the above "yarn eject" or "npm run eject", it removes the build dependencies from your project. You are then in control of your scripts and create your own custom set up at any time. Run this command if you are not satisfied with the configuration files and the dependencies (Webpack, Babel, ESLint, etc) and want to over write them. If you are not too curious about the dependencies and configuration files and want 
 
Note: this is a one-way operation. Once you eject, you can’t go back!

Welcome back to the Deployment steps. This project is deployed on GitHub pages. Please follow the below steps:

Step 1: Add homepage to package.json . The step below is important! 

Open your package.json and add a homepage field:

  "homepage": "https://vikpande.github.io/myreads/#/",

Step 2: Install gh-pages and add deploy to scripts in package.json

To publish it at https://myusername.github.io/my-app/#/, run:

* "yarn add gh-pages" or "npm install --save gh-pages"

Add the following scripts in your package.json:

  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",

at this moment run the below command to install depdencies: 

* "yarn " or "npm install "

Step 3: Deploy the site by running :

* "yarn deploy" or "npm run deploy"

Step 4: Ensure your project’s settings use gh-pages

Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch
( Go to your Github repo- settings, pages and select "gh-pages branch")

## Contributing

No brainer here . Please create a " pull request" with your proposed / suggested changes and its benefits over the existing fucntionality. 


## Acknowledgments

* This project is a part of my React Nanodegree course. 
* Support from friends and Udacity team 