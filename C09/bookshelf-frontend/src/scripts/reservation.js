import  {notify} from 'react-notify-toast';

async function lend(id, duration) {

    fetch("http://localhost:3001/loans", {
      method: "POST",
      cache: 'no-cache',
      mode: 'cors',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': window.sessionStorage.getItem('token')
      },
      body: JSON.stringify({ username: window.sessionStorage.getItem('username'), id: id, duration: duration})
    }).then(response => {
  
      if (response.status === 403) {
        console.log(JSON.stringify({ username: window.sessionStorage.getItem('username'), id: id, duration: duration}));
        const error= response.json()
        let myColor = { background: '#FF0000', text: "#FFFFFF" };
         
        error.then((erro)=>notify.show( erro.error, "custom", 5000, myColor));
       
      }
  
      if (response.status === 201) {
        let myColor2 = { background: '#008000', text: "#FFFFFF" };
         notify.show('Your loan is complete successfully, enjoy your book', "custom", 5000, myColor2);
        
      }
  
    }).catch(e => alert('Can\'t connect to server'));
  }
  
  async function getLoans(username) {
    const books = await fetch(`http://localhost:3001/loans/personalLoans`, {
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });


    const data = await books.json();
    if (data.statusCode === 404) {
        let myColor = { background: '#FF0000', text: "#FFFFFF" };
         notify.show( data.message, "custom", 5000, myColor);
         return 404;
        
       
      }else{
    return data;
  }
}


  
  export {
    lend,
    getLoans 
  }