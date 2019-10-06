# Challenge 06

Backend endpoints

Generate a backend rest service with the necessary endpoints to use in the application.

Integrate MongoDB to save all reservations
Detailed specs:

- Create some JS code to populate MongoDB with books information.
- Create a method to return all books. This method could receive a QUERY parameter to filter the books by bookShelf: Quito, Medellin, Digital, etc….
- Create a method to return the info of 1 book.
- Create a method to lend a Book. This method should validate the book is not lent.
- The backend should Have users.
- Create a login endpoint for a user to authenticate and receive a token
- All the endpoints except Login are secured. Use a JWT approach
- Create a Detailed Readme on how to run the backend

Create at least 3 endpoints to be consumed, use express architecture to mount all services.

## Description

To complete the challenge, these endpoints were mapped.
```bash
#These routes can be used with the HTTP method indicated after the comma
#After a slash '/' the colon ':' indicate the name of a variable

localhost:3000/login, POST

localhost:3000/register, POST

localhost:3000/me, GET

localhost:3000/books, GET

localhost:3000/:id, GET

localhost:3000/cities/:city, GET

localhost:3000/formats/:format, GET

localhost:3000/authors/:author, GET

localhost:3000/categories/:category, GET

localhost:3000/volumes/:title, GET

localhost:3000/loans, POST

localhost:3000/personalLoans, GET

```
## Prerequisites & Installation

### Prerequisites

To execute this project it is necessary to have installed
* Nodejs
* npm
* MongoDB

### Installation

1. Made a fork of this repo
2. Install Nestjs globally executing this command

```bash
$ npm i -g @nestjs/cli
```

3. Then inside the directory "C06/bookshelf-api" run the following command

```bash
$ npm install
```

4. Execute mongo inside project directory and run theese commands

```bash
# To create the database
use booksData
# Create collections
db.createCollection("books")
db.createCollection("users")
db.createCollection("loans")
exit
```

5. Then, in bash  inside the route "C06/bookshelf-api" execute this command

```bash
# To populate the database
$ mongoimport --db booksData --collection books --type json --jsonArray --file ./src/books.json
```

## Running the app

To run the project execute this command
```bash
$ npm run start
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Made with

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="310" alt="Nest Logo" /></a>
  <a href="https://nodejs.org/" target="blank"style="padding:50px"><img src="https://nodejs.org/static/images/logo.svg" width="180" alt="Nest Logo" /></a>
</p>
