
# Challenge 05

For this challenge, we need to create a script that extracts information about different books from the Google Books API. Then add these books to the website made in challenge 03 dynamically using JavaScript.

## Requirements

Install node.js and npm

## How to run

* Run ```npm install``` to install all the dependencies inside the project

* Starting from here we have two possibilities:
    * Run live server from Vscode or

    * Run ```npm run build``` or ```npm run-script build``` to start gulp live server and then open localhost:9000 inside the browser.

## How does it work

* The script "booklibrary.js" can be run individually to obtain 10 books of 3 different themes and obtain certain fields of all available information

* Inside the main page there is a script with a template that is subsequently used in the script "books.js" to create each book using the handlebars library and loading all the information related to them. In addition, the add/remove bookmark button animation is added

* Another script file was used to give functionality to other parts of the website, such as the search field or change the title according to the choice of the menu on the left.

### Some images

![img1](https://github.com/emrszon/JS-School/blob/development/C05/Screenshot_1.png)

![img2](https://github.com/emrszon/JS-School/blob/development/C05/Screenshot_2.png)

![img3](https://github.com/emrszon/JS-School/blob/development/C05/Screenshot_3.png)
