import React from 'react';
import logo from '.\\img\\logo2.png';
import './App.scss';

export function header() {
    return  <div className="header">
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
            <i className="fas fa-search searchBox" />
            <input className="searchBox" type="search" id="search" placeholder="Search..." />
          </div>
        </div>
        {/* ==============================================
                User sign in Section
             ============================================== */}
        <div id="login">
          <div id="userpadding">
            <div id="user"><span>User name</span>
              <button id="userBtn" className="dropbtn"><i className="fas fa-angle-down" /></button>
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
          <button id="mobileBtn" className="dropbtn"><i className="fas fa-bars" /></button>
          <div id="mobileDropdown" className="dropdown-content">
            <span>User name</span>
            <a href="#profile">Profile</a>
            <a href="#settigns">Settings</a>
            <a href="#signout">Sign Out</a>
          </div>
        </div>
      </div>;
  }


function main() {
      return (
        <div className="main">
          {/* ==============================================
                  Left bar Section
               ============================================== */}
          <div id="mobileSidenav" className="sidenav">
            <a id="closenav" href="javascript:void(0)" className="closebtn">×</a>
            <div className="menuTitle"><span>MAIN</span></div>
            <div className="menuOptionMobile"><i className="fas fa-globe" /><span>Quito</span></div>
            <div className="menuOptionMobile"><i className="fas fa-globe" /><span>Cartagena</span></div>
            <div className="menuOptionMobile"><i className="fas fa-globe" /><span>Medellin</span></div>
            <div className="menuOptionMobile"><i className="fas fa-tablet-alt" /><span>Digital</span></div>
            <div className="menuOptionMobile"><i className="fas fa-user-tag" /><span>Personal Loans</span></div>
            <div className="menuOptionMobile" id="menuOptionMobileselected"><i className="fas fa-tags" /><span>New Releases</span></div>
            <div className="menuTitle"><span>YOUR BOOKS</span></div>
            <div className="menuOptionMobile"><i className="fas fa-book-open" /><span>Readings</span></div>
            <div className="menuOptionMobile"><i className="fas fa-history" /><span>History</span></div>
            <div className="menuOptionMobile"><i className="fas fa-bookmark" /><span>Read Later</span></div>
            <div className="menuOptionMobile"><i className="fas fa-heart" /><span>Favorites</span></div>
          </div>
          <div>
            <div className="aside" id="leftbar">
              <div className="menuTitle"><span>MAIN</span></div>
              <div className="menuOption"><i className="fas fa-globe" /><span>Quito</span></div>
              <div className="menuOption"><i className="fas fa-globe" /><span>Cartagena</span></div>
              <div className="menuOption"><i className="fas fa-globe" /><span>Medellin</span></div>
              <div className="menuOption"><i className="fas fa-tablet-alt" /><span>Digital</span></div>
              <div className="menuOption"><i className="fas fa-user-tag" /><span>Personal Loans</span></div>
              <div className="menuOption" id="menuOptionselected"><i className="fas fa-tags" /><span>New Releases</span></div>
              <div className="menuTitle"><span>YOUR BOOKS</span></div>
              <div className="menuOption"><i className="fas fa-book-open" /><span>Readings</span></div>
              <div className="menuOption"><i className="fas fa-history" /><span>History</span></div>
              <div className="menuOption"><i className="fas fa-bookmark" /><span>Read Later</span></div>
              <div className="menuOption"><i className="fas fa-heart" /><span>Favorites</span></div>
            </div>
          </div>
          {/* ==============================================
                  Main Section
               ============================================== */}
          <div id="bookshelf">
            <div id="bookshelfHeader">
              <div id="bookshelfTitle">New Releases</div>
              <div id="bookshelfFilters">
                <div>Release Date</div>
                <div>|</div>
                <div>Popularity</div>
              </div>
              <div id="bookshlefDisplay">
                <i className="fas fa-th-large" />
                <i className="fas fa-th-list" />
              </div>
            </div>
            <div className="flex-container" id="bookshelfcontent">
              {/*==============================================
                  Books Section
                      ============================================== */}
            </div>
          </div>
          {/* ==============================================
                  Right bar Section
               ============================================== */}
          <div>
            <div className="aside" id="rightbar">
              <div className="rightTitle"><span>MOST READ BOOKS</span></div>
              <div className="rightTop">1. Hooked: How to Build Habit-…</div>
              <div className="rightTop">2. The Inevitable: Understandin…</div>
              <div className="rightTop">3. Lean In: Women, Work, and t…</div>
              <div className="rightTop">4. Building a Business When Th…</div>
              <div className="rightTop">5. How Google Works
              </div>
            </div>
          </div>
        </div>
      );
    }

function App() {
    return <>
    {header()}
    {main()}
    </> ; 
}

export default App;
