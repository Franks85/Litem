

LITEM

A test project for lost items services

INSTALLATION

Clone the repository and on terminal:

npm i

CONFIGURATION

To run the project on your machine you have to insert your Mongo settings in config/dev.js file.
example: 

module.exports = {
    mongoURI: "mongodb://your settings here", 
    // To run in your local machine you have to change the line above with your Mongo settings
};

USAGE

Run the dev mode by:

npm run dev
