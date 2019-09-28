var Handlebars = require('handlebars')
var url = './books.json';

export function loadcontent() {
    fetch(url)
        .then((resp) => resp.json())
        .then(data => {

            for (var i = 0; i < 30; i++) {

                var source = document.getElementById("book-template").innerHTML;
                var template = Handlebars.compile(source);

                var unknownAuthor = isauthor(data[i].author);
                var rating = rateNoRate(data[i].averageRating);
                var context = {
                    id: data[i].id,
                    title: data[i].title,
                    author: unknownAuthor,
                    averageRating: rating,
                    imageLinks: data[i].imageLinks
                };
                var html = template(context)
                $("#bookshelfcontent").append(html);

            }
            for (var i = 0; i < 30; i++) {
                var source = document.getElementById("bookInfo-template").innerHTML;
                var template = Handlebars.compile(source);
                var unknownAuthor = isauthor(data[i].author);
                var rating = rateNoRate(data[i].averageRating);
                var isDescription = isdescription(data[i].description);
                var isCategory = isCategories(data[i].categories);
                var date = isPublishDate(data[i].publishedDate);
                var pages = isPageCount(data[i].pageCount);
                var context = {
                    id: data[i].id + "info",
                    title: data[i].title,
                    author: unknownAuthor,
                    averageRating: rating,
                    publishedDate: date,
                    pageCount: pages,
                    categories: isCategory,
                    description: isDescription
                };
                var html = template(context)
                $(".main").append(html);

            }
            onClickInfo();
        });

}

function isauthor(author) {
    if (author === undefined) {
        return 'Unknown';
    }
    return author;
}

function isdescription(description) {
    if (description === undefined) {
        return 'No avaliable';
    }
    return description;
}

function isCategories(categories) {
    if (categories === undefined) {
        return 'Unknown';
    }
    return categories;
}

function isPublishDate(date) {
    if (date === undefined) {
        return '';
    }
    return date;
}

function isPageCount(pages) {
    if (pages === undefined) {
        return 'Unknown # of ';
    }
    return pages;
}

function rateNoRate(rate) {
    if (rate === undefined) {
        return 'No Rating';
    }

    const initialStars = 5;
    const star = rate;
    const voidStar = initialStars - star;

    let fulfilledStarsCode = "";
    let voidStarsCode = "";

    for (let i = 0; i < star; i++) {
        fulfilledStarsCode += "<i class=\"fas fa-star\"></i>";
    }
    for (let i = 0; i < voidStar; i++) {
        voidStarsCode += "<i class=\"far fa-star\"></i>";
    }
    const starsCode = fulfilledStarsCode + voidStarsCode;
    return starsCode;
}

export function onClickInfo() {
    var books = document.getElementsByClassName("books");
    for (var i = 0; i < books.length; i++) {

        tippy('#' + books.item(i).id, {
            placement: 'right',
            trigger: 'click',
            arrow: true,
            touchHold: true,
            delay: [150, 100],
            animation: 'scale',
            html: '#' + books.item(i).id + "info"
        })
    }
}