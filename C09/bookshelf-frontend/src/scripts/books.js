import  {notify} from 'react-notify-toast';

async function getAllBooks(num, search) {
    let books;
    if(search===undefined){
    
  books = await fetch(`http://localhost:3001/books?page=${num}`, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });
    }else{
           books = await fetch(`http://localhost:3001/books?page=${num}&search=${search}`, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });
    }
    
    const data = await books.json();
    return data;

}

async function getBooks(num, title, search) {
    let books;
    if(search===undefined){
        books = await fetch(`http://localhost:3001/books?page=${num}&city=${title}`, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Authorization': window.sessionStorage.getItem('token')
            }
        });
     
    }else {
        books = await fetch(`http://localhost:3001/books?page=${num}&city=${title}&search=${search}`, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });

    }
    const data = await books.json();
     return data;
}

async function getDigitalBooks(num, title, search) {
    let books;
    if(search===undefined){
        books = await fetch(`http://localhost:3001/books?page=${num}&format=${title}`, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Authorization': window.sessionStorage.getItem('token')
            }
        });
}else{
books = await fetch(`http://localhost:3001/books?page=${num}&format=${title}&search=${search}`, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });
}

    const data = await books.json();
     return data;
}

export {
    getAllBooks,
    getBooks,
    getDigitalBooks
}