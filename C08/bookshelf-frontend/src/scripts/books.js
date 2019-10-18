async function getAllBooks() {
    const books = await fetch('http://localhost:3001/books?page=1', {
        method: "GET",
        mode: 'cors',
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });
    
    const data = await books.json();
     return data;
}

async function getBookByTitle(title) {
    const books = await fetch(`http://localhost:3001/books/volumes/${title}`, {
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });
    const data = await books.json();

    return data;
}


export {
    getAllBooks,
    getBookByTitle
}