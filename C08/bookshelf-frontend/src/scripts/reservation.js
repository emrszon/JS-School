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
        alert(response.statusText);
       
      }
  
      if (response.status === 201) {
        alert('Your loan is complete successfully, enjoy your book');
        
        window.location = '/main';
      }
  
    }).catch(e => alert('Can\'t connect to server'));
  }
  
  async function getLoans(username) {
    const books = await fetch(`http://localhost:3001/loans/personaLoans`, {
        headers: {
            'Authorization': window.sessionStorage.getItem('token')
        }
    });
    const data = await books.json();

    return data;
}


  
  export {
    lend 
  }