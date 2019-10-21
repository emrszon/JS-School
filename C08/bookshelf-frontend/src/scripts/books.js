import  {notify} from 'react-notify-toast';

async function getAllBooks(num) {
    const books = await fetch('http://localhost:3001/books?page='+num, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });

    const data = await books.json();
     return data;
}

async function getBooks(num, title) {
    const books = await fetch(`http://localhost:3001/books/filterBy?page=${num}&city=${title}`, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });

    const data = await books.json();
     return data;
}

async function getDigitalBooks(num, title) {
    const books = await fetch(`http://localhost:3001/books/filterBy?page=${num}&format=${title}`, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });

    const data = await books.json();
     return data;
}

async function getFilteredBooks(title) {
    const books= await fetch(`http://localhost:3001/books/cities/${title}`, {
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });
     const data = await books.json();
     
     if(data.length===0){
        let myColor = { background: '#FF0000', text: "#FFFFFF" };

         notify.show('this page don\'t exist', "custom", 5000, myColor);
          window.location='/main'
     }
    return data;
}


export {
    getAllBooks,
    getFilteredBooks,
    getBooks,
    getDigitalBooks
}