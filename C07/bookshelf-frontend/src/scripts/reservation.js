async function lend(id, duration) {

    fetch("http://localhost:3001/loans", {
      method: "POST",
      cache: 'no-cache',
      mode: 'cors',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': window.sessionStorage.getItem('token')
      },
      body: JSON.stringify({ id: id, duration: duration})
    }).then(response => {
  
      if (response.status === 403) {
        alert('Invalid Username or Password!');
      }
  
      if (response.status === 201) {
        alert('Yyur loan is complete successfully, enjoy your book');
        // const data = response.json();
  
        // data.then(res => {
          
        // });
        window.location = '/main';
      }
  
    }).catch(e => alert('Can\'t connect to server'));
  }
  
 

  
  export {
    lend 
  }