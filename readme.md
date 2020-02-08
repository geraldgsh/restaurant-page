# Microverse Project Title - Restaurant Page
[Solo Project]
Javascript

### Snapshot

![](https://github.com/geraldgsh/restaurant-page/blob/feature/dist/media/wok-this-way.JPG?raw=true)

### Introduction.
This project comes after the introduction of the ES6 class keyword, ES6 modules, and webpack. The main goal of this project is for the student to show the understanding of the benefits of modularized code as well as the ability to set up a javascript application made of different modules using webpack.

You can find the original project specification at: https://www.theodinproject.com/courses/javascript/lessons/restaurant-page

### Project Setup

1.0. Start the project the same way you began the webpack tutorial project.
```javascript
```

1.1. run <strong>npm init</strong> in your project directory to generate a package.json file.
```sh
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (restaurant-page)
version: (1.0.0)
.
.
```

1.2. run <strong>npm install --save-dev webpack</strong> to install webpack to the node_modules directory of your project.
```sh
$ npm install --save-dev webpack
npm WARN rollback Rolling back node-pre-gyp@0.14.0 failed (this is probably harmless): EINVAL: invalid argument, scandir '/mnt/d/Google_Drive/Microverse/5.Javascript/3.webpack/restaurant-page/node_modules/fsevents/node_modules'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ webpack@4.41.5
updated 1 package and audited 5288 packages in 14.329s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

$ npm fund
restaurant-page@1.0.0
└─┬ webpack@4.41.5
.
.
```

*Quick tip: the node_modules folder can get really big. It is customary to add a .gitignore file to your project so that you don’t have to sync the contents of node_modules to github. The dependencies that are stored there can be installed from your package.json by running <strong>npm install</strong>, so you don’t need to sync them.
```sh
./gitignore

node_modules
```

```sh
$ npm install
npm WARN rollback Rolling back readable-stream@2.3.6 failed (this is probably harmless): EINVAL: invalid argument, lstat '/mnt/d/Google_Drive/Microverse/5.Javascript/3.webpack/restaurant-page/node_modules/fsevents/node_modules'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 34 packages from 55 contributors, removed 30 packages, updated 354 packages and audited 5302 packages in 20.013s  
5 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

3.0 Create a src and dist directory with the following contents:

```bash
├── restaurant-page
|   ├── dist
|   ├── src
|
```

3a. an index.js file in src
```sh
./src/index
.
.
```

3b. an index.html file in dist. Go ahead and link the main.js file in a script tag. main.js is the file that will be generated by webpack.
```html
<!DOCTYPE html>
<html lang="en">
<head>
.
.
</head>
<body>
.
.
  <script src="./main.js"></script>
</body>
```

3c. create a webpack.config.js file that looks just like our file from the tutorial.
```sh
$ npx webpack --config webpack.config.js
Hash: c2585ca209f7eb436688
Version: webpack 4.41.5
Time: 183ms
Built at: 02/05/2020 5:14:09 AM
  Asset       Size  Chunks             Chunk Names
main.js  957 bytes       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js 27 bytes {0} [built]
```

```javascript
./webpack.config.js


const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

2.0. Set up an HTML skeleton inside of dist/index.html with single <div id="content">.
```html
!DOCTYPE html>
<html lang="en">
<head>
  <title>Restaurant Page</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">  
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <link href="css/style.css" rel="stylesheet">
</head>
<body>
  <div id="content"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
  <script>
	  baguetteBox.run('.tz-gallery');
  </script>
  <script src="./main.js"></script>
</body>
```

3.0. Inside of src/index.js write a simple console.log or alert statement and then run webpack. Load up dist/index.html in a browser to make sure everything is working correctly.
```javascript
./src/index.js

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

* Quick tip #2: if you run webpack --watch you will not have to rerun webpack every time you make a change.
```javascript
./package.json

{
  "name": "restaurant-page",
  "version": "1.0.0",
  "description": "Restaurant Page",
  "main": "src/index.js",
  "scripts": {
    "test": "Test",
    "build": "webpack --mode production",
    "watch": "webpack --watch"
  }
```

4.0. Create a bare-bones home page for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is. It’s okay to hard-code these into the HTML for now just to see how they look on the page.
```bash
./src/modules

├── contact.js
├── gallery.js
├── jumbotron.js
├── menu.js
├── socialMedia.js
```

5.0. Now remove those elements from the HTML (so leave only the <html>, <body>, and <div id="content"> tags) and instead create them by using Javascript only, e.g. by appending each new element to the div#contentonce the page is first loaded. Since we’re all set up to write our code in multiple files write this initial page-load function inside of it’s own module and then import and call it inside of index.js.
```sh
$ yarn add file-loader --dev        yarn add v1.21.1
warning package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. To clear this warning, remove package-lock.json.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.11: The platform "linux" is incompatible with this module.
info "fsevents@1.2.11" is an optional dependency and failed compatibility check. Excluding it from installation.        [3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ file-loader@5.0.2
info All dependencies
└─ file-loader@5.0.2
Done in 1.42s.
```

6.0. Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages. Look at #7 on this hongkiat post for visual inspiration.
```javascript
```

6.1. Put the contents of each ‘tab’ inside of it’s own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.
```javascript
./src/modules/menu.js

const homePage = document.getElementById('#home');
const menuPage = document.getElementById('#menu');
const galleryPage = document.getElementById('#gallery');
const contactPage = document.getElementById('#contact');

const togglePage = (event) => {
  if (event.target === homePage) {
    start();
  } else if (event.target === menuPage) {
    filling.innerHTML = '';
    filling.appendChild(menu());
  } else if (event.target === galleryPage) {
    filling.innerHTML = '';
    filling.appendChild(gallery());
  } else {
    filling.innerHTML = '';
    filling.appendChild(contact());
    filling.appendChild(socialMedia());
  }
};
```

6.2. Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.
```javascript
./src/modules/menu.js

homePage.addEventListener('click', togglePage);
menuPage.addEventListener('click', togglePage);
galleryPage.addEventListener('click', togglePage);
contactPage.addEventListener('click', togglePage);
```

7.0. If you are using GitHub pages to host your completed page you need to do a tiny bit more work to get it to show up. After running webpack the full bundled version of your site is available in the dist folder, but GH pages is looking for an index.html in the root directory of your project.

7.1. Simply follow the instructions on this gist. EZPZ!

### Linter Setup

Clone file [content](https://github.com/microverseinc/linters-config/tree/master/javascript) into root directory (except for readme.md)

Install ESLint on Linux environment using the following commands

Install Node Version Manager to update NodeJS + NPM.

```sh
$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

$export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

$[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Run the following command to verify installation;

```sh
$ command -v 
nvm
```

To download, compile, and install the latest release of node, do this.

```sh
nvm install node
```

Source [here](https://github.com/nvm-sh/nvm#installing-and-updating)

Go project folder using WSL environment and initiate NPM with following command

```javascript
npm init
```

Command above will generate a "package.json" file for ESlint work off from.

Install ESlint with following command

```sh
npm install eslint
```

Run the following to configure eslint in project root folder

```sh
eslint --init
```

with the following setup.

`? How would you like to use ESLint?` To check syntax, find problems, and enforce code style

`? What type of modules does your project use?` JavaScript modules (import/export)

`? Which framework does your project use?` None of these

`? Does your project use Typescript` No

`? Where does your code run?` Browser

`? How would you like to define a style for your project?` Use a popular style guide

`? Which style guide do you want to follow?` Airbnb

`? What format do you want your config file to be in?` JSON

`? The config that you've selected requires the following dependencies: Would you like to install them now with npm?` Yes

Start ESlint with this command.

```sh
eslint script.js
```

#### Test Procedure

i. Click "Start New Game". Page should prompt "Names can't be blank".

ii. Fill in names and click "Start New Game". 9 x 9 grid will appear

iii. Play the game. After each turn, page prompt player's name whose turn is next. 

iV. If player wins, there modal aleart appears and announces winner's name. 

V. Click alert's exit button will initiate new round. Winner's wins will increment by one.

Vi. Click "Restart Game" to clear the board.

vii. Click on "End Current Game" to reset players name to blank and wins to 0.

#### Steps to publish Page to Githack

1. Navigate to "dist/index.html" on GitHub Page Repo then copy URL (step #1) as illustrated below

![]()

2. Go to https://raw.githack.com/, paste GitHub directory into input box (step #2) to generate URL (step #3) illustrated below.

![]()

#### Restaurant Page
This is a restaurant app built with Webpack, Bootstrap, JS, CSS & HTML.

### Wiki

Checkout our [wikipage](https://github.com/geraldgsh/restaurant-page/wiki) for more details. 

#### Live Demo
[Demo](https://rawcdn.githack.com/geraldgsh/restaurant-page/1c4fd834fbec34e3545362c9bab5d38f269fc689/dist/index.html)

#### Getting Started
Clone repo and run index.html

#### Prerequisites
Web browser like Chrome, Mozilla or similar.

### Original Project Source
https://www.theodinproject.com/courses/javascript/lessons/restaurant-page

### Github Repo
https://github.com/geraldgsh/restaurant-page


👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh)

Twitter: [geraldgsh](https://github.com/geraldgsh)

Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/restauramt-page/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.