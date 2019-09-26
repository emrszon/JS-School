var Handlebars = require('handlebars')
var url = './books.json';

export function loadcontent() {
    fetch(url)
        .then((resp) => resp.json())
        .then(data => {

            for (var i = 0; i < 30; i++) {

                //let books = 
                var source = document.getElementById("book-template").innerHTML;
                var template = Handlebars.compile(source);
                var context = {
                    id: data[i].id,
                    title: data[i].title,
                    author: data[i].authors,
                    //publishedDate: data[i].publishedDate,
                    //pageCount: data[i].pageCount,
                    //categories: data[i].categories,
                    //averageRating: data[i].averageRating,
                    //description: data[i].description,
                    imageLinks: data[i].imageLinks
                };
                var html = template(context)
                $("#bookshelfcontent").append(html);
            }
        });
}