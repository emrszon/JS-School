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

localhost:3000/books?(page, search, format and/or city), GET

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
$ yarn install
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
$ yarn start
```

## Use

```bash
#These routes can be used with the HTTP method indicated after the comma
#After a slash '/' the colon ':' indicate the name of a variable

# PUBLIC ENDPOINTS

# this request recive the folowing json format
# { "username": "string", "password": "string" }
localhost:3000/register, POST

# This request receive the folowing json format
# { "username": "string", "password": "string" }
# And return an access key token( valid for 1000s after it generate) to allow use the private endpoints
localhost:3000/login, POST

#PRIVATE ENDPOINTS

#This request return the profile of the user
localhost:3000/me, GET

#This request return all the books or using query strings filtered books
localhost:3000/books, GET

#This request filter the database using the provided id and return one book if exists
localhost:3000/:id, GET


# this request recive the folowing json format
# { "username": "string", "password": "string" }
#and return the loan
localhost:3000/loans, POST

#This request return the loans filtered by username if exists
localhost:3000/personalLoans, GET
```

## Made with

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="310" alt="Nest Logo" /></a>
  <a href="https://nodejs.org/" target="blank"style="padding:50px"><img src="https://nodejs.org/static/images/logo.svg" width="180" alt="Nest Logo" /></a>
</p>
