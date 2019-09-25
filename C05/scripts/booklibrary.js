let url = 'https://www.googleapis.com/books/v1/volumes?q=star+wars';
let apibooks = await fetch(url);

let books = await apibooks.json();

for (var i = 0; i < books.length; i++) {

}