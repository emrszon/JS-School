import React, { Component } from 'react';
import logo from '../img/logo2.png';
import userimg from '../img/user.png';
import { logout } from '../scripts/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components'

const Wrapper= styled.div`


  background-color: #fcf8f3;
  border-bottom: 1px solid;
  border-bottom-color: #6ec1e4;
  display: inline-flex;
  font-size: 17px;
  height: 12vw;
  text-align: center;
  width: 100%;

* {
  box-sizing: border-box;
}

#logo {
  align-content: center;
  align-items: center;
  background-color: #fff;
  display: flex;
  flex: 15vw;
  font-family: PlutoSansBlack;
  height: auto;
  justify-content: center;
  width: auto;

  img {
    padding-right: 1vw;
  }

  span {
    display: none;
    font-size: 1.5vw;
  }
}

#title {
  flex: 70vw;
  display: flex;
  text-align: right;
  font-weight: bolder;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;

  span {
    display: flex;
    padding-left: 15px;
    font-family: PlutoSansRegular;
    font-size: 24px;
  }
}

.searchContainer {
  font-family: PlutoSansLight;
  display: flex;
  border: 1px solid #6EC1E4;
  box-sizing: border-box;
  border-radius: 21px 16px 16px 16px;
  overflow: hidden;
  background: white;
  width: 30vw;
  align-items: center;

}

.searchBox {
  border: 0;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  flex: 1;
}

.show {
  display: block;
}

#login {
  display: none;

  #userpadding {
    display: flex;
    width: 15vw;
    padding-top: 15px;
    padding-bottom: 15px;
    justify-content: flex-end;
    align-items: center;
    border-left: 1px solid #979797;
    height: 70%;
  }

  #user {
    display: inline-flex;
    padding-right: 15px;
    position: relative;

    span {
      padding-right: 15px;
    }
  }
}

#mobile {
  position: relative;
  display: flex;
  padding-right: 10px;
  font-size: 30px;
  align-items: center;

  a {
    font-size: 20px;
  }
}

.dropbtn {
  background-color: #FCF8F3;
  padding: 10px;
  font-size: 30px;
  border: none;
  cursor: pointer;
  position: relative;
}

#userBtn {
  background-color: #FCF8F3;
  font-size: 20px;
  padding: 0;
  border: none;
  cursor: pointer;
  position: relative;
}

.dropdown {
  position: absolute;
  display: block;
  z-index: 500;
  bottom: 0;
  left: 0;
}

.dropdown-content {
  position: absolute;
  z-index: 501;
  top: 100%;
  right: 0;
  background-color: #FCF8F3;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  span {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 20px;
  }

  a:hover {
    background-color: #c4baba;
  }
}

.show {
  display: block;
}

@media only screen and (min-width: 250px) {  
  
    height: 18vw;
 

}

@media only screen and (min-width: 600px) {
  height: 9vw;
  
  #logo {
    span {
      display: none;
    }

    img {
      max-width: auto;
      max-height: 6vw;
    }
  }

  
    
  }

@media only screen and (min-width: 900px) {
    height: 80px;
  
    .searchContainer {
      display: flex;
      justify-content: flex-end;
      width: auto;
    }
  
    #logo {
      img {
        padding-right: 10px;
      }
  
      span {
        display: flex;
      }
    }
  
    #login {
      font-family: PlutoSansCondRegular;
      display: flex;
      flex: 15vw;
      align-items: center;
  
      img {
        max-width: 110px;
        max-height: 30px;
        width: auto;
        height: auto;
        float: right;
        padding-right: 20px;
      }
    }
  
    #mobile {
      display: none;
    }
  
}

}

`


class Header extends Component {

  state = {
    open: false,
    search: "",
    display: 'none'
  };

  handleSearch = (event) => {
    this.props.getSearch(event.target.value)
    this.setState({ search: '0px' })
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value })
    this.props.getSearch(event.target.value)
  }

  handleClick = (event) => {
    logout();
    event.preventDefault();
  }

  toggle() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }



  render() {
    const { open } = this.state;
    return (
      <Wrapper>
        {/* ==============================================
                Logo Section
             ============================================== */}
        <div id="logo">
          <img src={logo} alt="" style={{ maxWidth: '100%', height: 'auto', maxHeight: 'auto' }} onClick={this.handleSearch} value={this.state.search} />
          <span>JOBSITY</span>
        </div>
        {/* ==============================================
                Bookshelf and searchbox Section
             ============================================== */}
        <div id="title" style={{ maxWidth: '100%', height: 'auto' }} className="flex-container">
          <span>Bookshelf</span>
          <div className="searchContainer">
            <FontAwesomeIcon icon={faSearch} />
            <input className="searchBox" type="search" id="search" placeholder="Search..." onChange={this.handleChange.bind(this)} value={this.state.search} />

          </div>
        </div>
        {/* ==============================================
                User sign in Section
            ============================================== */}
        <div id="login">
          <div id="userpadding">
            <div id="user"><span>{window.sessionStorage.getItem('username')}</span>
              <button id="userBtn" className="dropbtn" onClick={this.toggle.bind(this)}><FontAwesomeIcon icon={faAngleDown} /></button>
              {open && <div id="userDropdown" className="dropdown-content">
                <a href="#profile">Profile</a>
                <a href="#settigns">Settings</a>
                <a onClick={this.handleClick} href="#signout">Sign Out</a>
              </div>}
            </div>
            <div><img src={userimg} alt="" />
            </div>
          </div>
        </div>
        <div id="mobile" className="dropdown">
          <button id="mobileBtn" className="dropbtn" onClick={this.toggle.bind(this)}><FontAwesomeIcon icon={faBars} /></button>
          {open && <div id="mobileDropdown" className="dropdown-content">
            <span>{window.sessionStorage.getItem('username')}</span>
            <a href="#profile">Profile</a>
            <a href="#settigns">Settings</a>
            <a href="#signout">Sign Out</a>
          </div>}
        </div>
      </Wrapper>
    );
  }
}

export default Header;
