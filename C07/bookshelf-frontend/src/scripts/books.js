async function getAllBooks() {
    const books = await fetch('http://localhost:3001/books/', {
        method: "GET",
        mode: 'cors',
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });
    
    const data = await books.json();
     return data;
}

async function getBookByID(id) {
    const books = await fetch(`http://localhost:3001/books/${id}`, {
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
    getBookByID,
    getBookByTitle
}