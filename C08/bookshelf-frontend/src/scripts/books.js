import  {notify} from 'react-notify-toast';

async function getAllBooks() {
    const books = await fetch('http://localhost:3001/books?page=2', {
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
    const books= fetch(`http://localhost:3001/books/cities/${title}`, {
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });
     const data = await books.json();

     if(data.length===0){
        let myColor = { background: '#FF0000', text: "#FFFFFF" };
        throw  notify.show('Invalid Username or Password!', "custom", 5000, myColor);
          
     }
    return data;
}


export {
    getAllBooks,
    getFilteredBooks
}