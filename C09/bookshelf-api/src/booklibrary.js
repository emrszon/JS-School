var fs = require('fs');
var fetch = require('node-fetch');

const format = books =>
  books.map(({ id, volumeInfo }, i) => {
    const {
      title,
      authors,
      publishedDate,
      pageCount,
      categories,
      averageRating,
      description,
      imageLinks,
      industryIdentifiers,
    } = volumeInfo;
    return {
      id,
      title,
      publishedDate,
      pageCount,
      categories,
      averageRating,
      description,
      industryIdentifiers,
      author: authors,
      imageLinks: imageLinks.thumbnail,
      city: ['Cartagena', 'Quito', 'Medellin'][i % 3],
      format: ['Digital', 'Physical'][i % 2],
      copies: 3,
    };
  });

Promise.all(
  ['like', 'love', 'history', 'time', 'moon', 'white'].map(async query => {
    const json = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`,
    ).then(res => res.json());
    return format(json.items);
  }),
).then(allBooks => {
  fs.writeFileSync(
    "books.json",
    JSON.stringify(allBooks.reduce((result, booksArr) => result.concat(booksArr), [])),
  );
});