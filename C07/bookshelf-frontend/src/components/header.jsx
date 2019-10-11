import React, { Component } from 'react';
import logo from '..\\img\\logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'



class Header extends Component {

  state = {
    search: ''
  }

  handleSearch = (event) => {
    this.setState({ search: event.target.value })
    this.props.getSearch(event.target.value)
  }

  render() {
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
            <i FontAwesomeIcon icon={faSearch} />
            <input className="searchBox" type="search" id="search" placeholder="Search..." value={this.state.search}/>
          </div>
        </div>
        {/* ==============================================
                User sign in Section
             ============================================== */}
        <div id="login">
          <div id="userpadding">
            <div id="user"><span>User name</span>
              <button id="userBtn" className="dropbtn"><FontAwesomeIcon icon={faAngleDown}/></button>
              <div id="userDropdown" className="dropdown-content">
                <a href="#profile">Profile</a>
                <a href="#settigns">Settings</a>
                <a href="#signout">Sign Out</a>
              </div>
            </div>
            <div><img src="img/user.png" />
            </div>
          </div>
        </div>
        <div id="mobile" className="dropdown">
          <button id="mobileBtn" className="dropbtn"><FontAwesomeIcon icon={faBars}/></button>
          <div id="mobileDropdown" className="dropdown-content">
            <span>User name</span>
            <a href="#profile">Profile</a>
            <a href="#settigns">Settings</a>
            <a href="#signout">Sign Out</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;