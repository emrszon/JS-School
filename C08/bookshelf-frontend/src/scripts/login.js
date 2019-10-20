import  {notify} from 'react-notify-toast';

async function login(Username, Password) {

    fetch("http://localhost:3001/login", {
      method: "POST",
      cache: 'no-cache',
      mode: 'cors',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: Username, password: Password})
    }).then(response => {
  
      if (response.status === 404) {
        
        let myColor = { background: '#FF0000', text: "#FFFFFF" };
       throw notify.show('Invalid Username or Password!', "custom", 5000, myColor);
        
      }

      if (response.status === 401) {
        let myColor = { background: '#FF0000', text: "#FFFFFF" };
        throw  notify.show('Invalid Username or Password!', "custom", 5000, myColor);
        
      }
  
      if (response.status === 201) {
  
        const data = response.json();
  
        data.then(res => {
          const bearer = `Bearer ${res.access_token}`;
          const expiration= new Date();
          let cookie= "expires=" + expiration + ";";
          window.sessionStorage.setItem('username', Username);
          window.sessionStorage.setItem('token', bearer);
          document.cookie = cookie;
        });
        window.location = '/main';
        
      }
  
    }).catch(e => notify.show('Can\'t connect to server'));
  }
  
  function logout(){
    window.sessionStorage.clear();
    window.location = '/';
  }

  
  export {
    login,
    logout
  }