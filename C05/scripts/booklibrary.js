var fs = require('fs');
var fetch = require('node-fetch');

function loadBooks() {
    var url = 'https://www.googleapis.com/books/v1/volumes?q=like';
    var url2 = 'https://www.googleapis.com/books/v1/volumes?q=love';
    var url3 = 'https://www.googleapis.com/books/v1/volumes?q=history';
    var url4 = 'https://www.googleapis.com/books/v1/volumes?q=time';
    var url5 = 'https://www.googleapis.com/books/v1/volumes?q=moon';
    var url6 = 'https://www.googleapis.com/books/v1/volumes?q=white';
    let apibooks = [];

    fetch(url)
        .then((resp) => resp.json())
        .then(data => {
            for (var i = 0; i < 10; i++) {
                let books = {
                    id: data.items[i].id,
                    title: data.items[i].volumeInfo.title,
                    author: data.items[i].volumeInfo.authors,
                    publishedDate: data.items[i].volumeInfo.publishedDate,
                    pageCount: data.items[i].volumeInfo.pageCount,
                    categories: data.items[i].volumeInfo.categories,
                    averageRating: data.items[i].volumeInfo.averageRating,
                    description: data.items[i].volumeInfo.description,
                    imageLinks: data.items[i].volumeInfo.imageLinks.thumbnail,
                    industryIdentifiers: data.items[i].volumeInfo.industryIdentifiers,
                    city: "Cartagena",
                    format: "Digital" 
                }
                apibooks.push(books);
            }
            fs.writeFile("books.json", JSON.stringify(apibooks), err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            });
        });

    fetch(url2)
        .then((resp) => resp.json())
        .then(data => {
            for (var i = 0; i < 10; i++) {
                let books = {
                    id: data.items[i].id,
                    title: data.items[i].volumeInfo.title,
                    author: data.items[i].volumeInfo.authors,
                    publishedDate: data.items[i].volumeInfo.publishedDate,
                    pageCount: data.items[i].volumeInfo.pageCount,
                    categories: data.items[i].volumeInfo.categories,
                    averageRating: data.items[i].volumeInfo.averageRating,
                    description: data.items[i].volumeInfo.description,
                    imageLinks: data.items[i].volumeInfo.imageLinks.thumbnail,
                    industryIdentifiers: data.items[i].volumeInfo.industryIdentifiers,
                    city: "Cartagena",
                    format: "Physical" 
                }

                apibooks.push(books);
            }
            fs.writeFile("books.json", JSON.stringify(apibooks), err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            });
        });

    fetch(url3)
        .then((resp) => resp.json())
        .then(data => {
            for (var i = 0; i < 10; i++) {
                let books = {
                    id: data.items[i].id,
                    title: data.items[i].volumeInfo.title,
                    author: data.items[i].volumeInfo.authors,
                    publishedDate: data.items[i].volumeInfo.publishedDate,
                    pageCount: data.items[i].volumeInfo.pageCount,
                    categories: data.items[i].volumeInfo.categories,
                    averageRating: data.items[i].volumeInfo.averageRating,
                    description: data.items[i].volumeInfo.description,
                    imageLinks: data.items[i].volumeInfo.imageLinks.thumbnail,
                    industryIdentifiers: data.items[i].volumeInfo.industryIdentifiers,
                    city: "Quito",
                    format: "Physical" 
                }

                apibooks.push(books);
            }
            fs.writeFile("books.json", JSON.stringify(apibooks), err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            });
        });
        fetch(url4)
        .then((resp) => resp.json())
        .then(data => {
            for (var i = 0; i < 10; i++) {
                let books = {
                    id: data.items[i].id,
                    title: data.items[i].volumeInfo.title,
                    author: data.items[i].volumeInfo.authors,
                    publishedDate: data.items[i].volumeInfo.publishedDate,
                    pageCount: data.items[i].volumeInfo.pageCount,
                    categories: data.items[i].volumeInfo.categories,
                    averageRating: data.items[i].volumeInfo.averageRating,
                    description: data.items[i].volumeInfo.description,
                    imageLinks: data.items[i].volumeInfo.imageLinks.thumbnail,
                    industryIdentifiers: data.items[i].volumeInfo.industryIdentifiers,
                    city: "Quito",
                    format: "Digital" 
                }

                apibooks.push(books);
            }
            fs.writeFile("books.json", JSON.stringify(apibooks), err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            });
        });
        fetch(url5)
        .then((resp) => resp.json())
        .then(data => {
            for (var i = 0; i < 10; i++) {
                let books = {
                    id: data.items[i].id,
                    title: data.items[i].volumeInfo.title,
                    author: data.items[i].volumeInfo.authors,
                    publishedDate: data.items[i].volumeInfo.publishedDate,
                    pageCount: data.items[i].volumeInfo.pageCount,
                    categories: data.items[i].volumeInfo.categories,
                    averageRating: data.items[i].volumeInfo.averageRating,
                    description: data.items[i].volumeInfo.description,
                    imageLinks: data.items[i].volumeInfo.imageLinks.thumbnail,
                    industryIdentifiers: data.items[i].volumeInfo.industryIdentifiers,
                    city: "Medellin",
                    format: "Digital" 
                }

                apibooks.push(books);
            }
            fs.writeFile("books.json", JSON.stringify(apibooks), err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            });
        });
        fetch(url6)
        .then((resp) => resp.json())
        .then(data => {
            for (var i = 0; i < 10; i++) {
                let books = {
                    id: data.items[i].id,
                    title: data.items[i].volumeInfo.title,
                    author: data.items[i].volumeInfo.authors,
                    publishedDate: data.items[i].volumeInfo.publishedDate,
                    pageCount: data.items[i].volumeInfo.pageCount,
                    categories: data.items[i].volumeInfo.categories,
                    averageRating: data.items[i].volumeInfo.averageRating,
                    description: data.items[i].volumeInfo.description,
                    imageLinks: data.items[i].volumeInfo.imageLinks.thumbnail,
                    industryIdentifiers: data.items[i].volumeInfo.industryIdentifiers,
                    city: "Medellin",
                    format: "Physical" 
                }

                apibooks.push(books);
            }
            fs.writeFile("books.json", JSON.stringify(apibooks), err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            });
        });
}

loadBooks();