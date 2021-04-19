# Evaluate a News Article with Natural Language Processing.
 The purpose of the project for the Client to enter a URL of article of choice, and using Natural Language Processing(NLP) through a 3rd party Api(here we will use meaningCloud) the article will be evaluated to check some parameters like(Subjectivity, Irony, Confidence..etc), Then return those parameters to the client on his browser.

## Table Of Content:
- [Project Description](#desc)
- [Instructions](#instructions)
- [Technologies Used](#tech)
- [To Run Project](#run)
- [Notes] (#notes)

## <a name="desc">Project Description:</a>
The project consists of 1 page, 2 sections.
* Section 1:
    
    The user will enter URL of his choice to check.

* Section 2:
    The data will be processed throught the meaningCloud API and an output of the following will be displayed:
    <table style="border: 2px solid purple;">
    <tr>
    <td>Score Tag</td>
    <td>Agreement</td>
    </tr>
    <tr>
    <td>Subjectivity</td>
    <td>Confidence</td>
    </tr>
    <tr>
    <td>Irony</td>
    <td>Status Msg</td>
    </tr>
    </table>

## <a name="instructions">Instructions:</a>:

- The Project uses data obtained from [Sentiment Analysis API version 2.1](https://www.meaningcloud.com/), after signing up>>an apiKey was received.

- In building this project i used another Udacity project i made myself in the Webdevelopment Professional Nanodegree.
    - Project Name: Weather Journal API

- The data will be obtained from the APi through post request.
- After receiving the data will update the UI with the fields needed (i used fields mentioned above in the [Project Desc](#desc))

## Testing:
- Created a folder in the root of the project called __test__
- According to rubric 
> Check that the project has Jest installed, that there is an npm script to run Jest, and that the tests all pass. Every src/js file should have at least one test.

I use the "api_fetch.js" file for API so i created a "api_fetch.test.js" file inside the folder.
***(I included all the src/js files in testing.)***
- [Testing Result](https://drive.google.com/file/d/1nMw8qGYAX30qLKx3A5EFmLSvUbtm-IkX/view?usp=sharing)

## <a name="tech">Technologies Used</a>:
- HTML 
- SCSS
- Javascript
- Node.JS
- Webpack
- Libraries such as:
    - Node-sass
- Plugins such as:
    - Clean Webpack Plugin
    - HTML Webpack Plugin
    - Mini CSS Extract Plugin
    - Optimize CSS Assets Webpack Plugin
    - Terser Webpack Plugin
- Loaders such as:
    - Babel
    - Style-Loader
    - CSS-Loader
    - Sass-Loader
- During Testing got the following error(**ReferenceError: regeneratorRuntime is not defined**)
    - [Error Screenshot](https://drive.google.com/file/d/1PRrhkrJaiA7V9a5Nq8QVd6GmXyY3bE9m/view?usp=sharing):

    - [Solution](https://stackoverflow.com/a/57439821/2024590):
        - [babel-polyfill](https://www.npmjs.com/package/regenerator-runtime)
        
    - Note this was solved while modifing my project by removing async func

## <a name="run">To Run Project</a>:
- For Development Env (use 2 consoles at the same time)/runs on (localhost:8080):
    - Console#1:
        - npm run build-dev
    - Console#2 (start express server):
        - npm run start
        
- For Production Env/runs on (localhost:3000):
***Note: If you made any modifications and need to re-build the dist folder start with 1 else do step 2 only)***
1) npm run build-prod
2) npm start

## <a name="notes">Notes:</a>:
- For URL check you recommended using "Regex" so i did some googling to understand how to do it, and i found the following on [stackoverflow](https://stackoverflow.com/questions/30970068/js-regex-url-validation), but i actually did more googling to understand the concept.


- The original package.json file was originally a file by "Mr.Mostafa Bohram" our group Session Lead
He gave us the permission to use it because of the packages version conflicts, but i added more to the original file to be able to run my project.

*** <p style="color:blue">Thanks for your time</p> ***