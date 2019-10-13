import React, { Component } from 'react';
import logo from '..\\img\\logo2.png';
import userimg from '../img/user.png'
import { logout } from '../scripts/login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';



class Header extends Component {

  state = {
    open: false,
    search: ''
  };

  handleSearch = (event) => {
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
        <div className="header">
        {/* ==============================================
                Logo Section
             ============================================== */}
        <div id="logo">
          <img src={logo} style={{maxWidth: '100%', height: 'auto', maxHeight: 'auto'}} />
          <span>JOBSITY</span>
        </div>
        {/* ==============================================
                Bookshelf and searchbox Section
             ============================================== */}
        <div id="title" style={{maxWidth: '100%', height: 'auto'}} className="flex-container">
          <span>Bookshelf</span>
          <div className="searchContainer">
            <FontAwesomeIcon icon={faSearch}/>
            <input className="searchBox" type="search" id="search" placeholder="Search..." value={this.state.search}/>
          </div>
        </div>
        {/* ==============================================
                User sign in Section
            ============================================== */}
        <div id="login">
          <div id="userpadding">
            <div id="user"><span>{window.sessionStorage.getItem('username')}</span>
              <button id="userBtn" className="dropbtn" onClick={this.toggle.bind(this)}><FontAwesomeIcon icon={faAngleDown}/></button>
              {open && <div id="userDropdown" className="dropdown-content">
                <a href="#profile">Profile</a>
                <a href="#settigns">Settings</a>
                <a onClick={this.handleClick} href="#signout">Sign Out</a>
              </div>}
            </div>
            <div><img src={userimg} />
            </div>
          </div>
        </div>
        <div id="mobile" className="dropdown">
          <button id="mobileBtn" className="dropbtn" onClick={this.toggle.bind(this)}><FontAwesomeIcon icon={faBars}/></button>
          {open && <div id="mobileDropdown" className="dropdown-content">
            <span>User name</span>
            <a href="#profile">Profile</a>
            <a href="#settigns">Settings</a>
            <a href="#signout">Sign Out</a>
          </div>}
        </div>
      </div>
    );
  }
}

export default Header;