import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTabletAlt, faUserTag, faBookOpen, faHistory, faBookmark, faHeart, faTags } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class MenuMobile extends Component {

  state = {
    activeFilter: 'menuOptionMobileselected',
    display: this.props.display,
    toggle: true
  }

  handleClick = (event) => {
    this.setState({ display: '0px' })
  }

  render() {
    return (
      <div>

        <div id="mobileSidenav" className="sidenav" style={{ width: this.state.display }}>
          <button id="closenav" onClick={this.handleClick} className="closebtn">×</button>
          <div className="menuTitle"><span>MAIN</span></div>
          <NavLink to="/main/Quito" activeClassName="menuOptionMobileselected" className="menuOptionMobile"><FontAwesomeIcon icon={faGlobe} /><span>Quito</span></NavLink>
          <NavLink to={"/main/Cartagena"} activeClassName="menuOptionMobileselected" className="menuOptionMobile"><FontAwesomeIcon icon={faGlobe} /><span>Cartagena</span></NavLink>
          <NavLink to="/main/Medellin" activeClassName="menuOptionMobileselected" className="menuOptionMobile"><FontAwesomeIcon icon={faGlobe} /><span>Medellin</span></NavLink>
          <NavLink to="/main/Digital" activeClassName="menuOptionMobileselected" className="menuOptionMobile"><FontAwesomeIcon icon={faTabletAlt} /><span>Digital</span></NavLink>
          <NavLink to="/main/PersonalLoans" activeClassName="menuOptionMobileselected" className="menuOptionMobile"><FontAwesomeIcon icon={faUserTag} /><span>Personal Loans</span></NavLink>
          <NavLink to="/main/" exact activeClassName="menuOptionMobileselected" className="menuOptionMobile"><FontAwesomeIcon icon={faTags} /><span>New Releases</span></NavLink>
          <div className="menuTitle"><span>YOUR BOOKS</span></div>
          <div className="menuOptionMobile"><FontAwesomeIcon icon={faBookOpen} /><span>Readings</span></div>
          <div className="menuOptionMobile"><FontAwesomeIcon icon={faHistory} /><span>History</span></div>
          <div className="menuOptionMobile"><FontAwesomeIcon icon={faBookmark} /><span>Read Later</span></div>
          <div className="menuOptionMobile"><FontAwesomeIcon icon={faHeart} /><span>Favorites</span></div>

        </div>

      </div>
    )
  }
}

export default withRouter(MenuMobile); 
