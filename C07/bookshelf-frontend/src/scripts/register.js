async function register(Username, Password) {

    fetch("http://localhost:3001/register", {
      method: "POST",
      cache: 'no-cache',
      mode: 'cors',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: Username, password: Password})
    }).then(response => {
  
      if (response.status === 401) {
        alert('Invalid Username, this username is already in use');
      }
  
      if (response.status === 201) {
  
        const data = response.json();
  
        data.then(res => {
          const bearer = `Bearer ${res.token}`;
          console.log(bearer);
          window.sessionStorage.setItem('token', bearer)
        });
        window.location = '/'
      }
  
    }).catch(e => alert('Can\'t connect to server'));
  }
  
  export {
    register 
  }