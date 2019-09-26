var fs = require('fs');
var fetch = require('node-fetch');

function loadBooks() {
    var url = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';
    var url2 = 'https://www.googleapis.com/books/v1/volumes?q=dross';
    var url3 = 'https://www.googleapis.com/books/v1/volumes?q=science';
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
                    imageLinks: data.items[i].volumeInfo.imageLinks.thumbnail
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
                    imageLinks: data.items[i].volumeInfo.imageLinks.thumbnail
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
                    imageLinks: data.items[i].volumeInfo.imageLinks.thumbnail
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