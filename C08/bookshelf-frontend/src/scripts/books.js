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
    getFilteredBooks
}