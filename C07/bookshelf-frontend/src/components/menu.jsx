import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTabletAlt, faUserTag, faBookOpen, faHistory, faBookmark, faHeart, faTags} from '@fortawesome/free-solid-svg-icons'



class Menu extends Component {

  state = {
    activeFilter: ''
  }

  handleClick = (filter) => this.setState({ activeFilter: filter })

  render() {
    return (
        <>
               <div id="mobileSidenav" className="sidenav">
               <a id="closenav" href="javascript:void(0)" className="closebtn">×</a>
               <div className="menuTitle"><span>MAIN</span></div>
               <div className="menuOptionMobile"><FontAwesomeIcon icon={faGlobe} /><span>Quito</span></div>
               <div className="menuOptionMobile"><FontAwesomeIcon icon={faGlobe} /><span>Cartagena</span></div>
               <div className="menuOptionMobile"><FontAwesomeIcon icon={faGlobe} /><span>Medellin</span></div>
               <div className="menuOptionMobile"><FontAwesomeIcon icon={faTabletAlt} /><span>Digital</span></div>
               <div className="menuOptionMobile"><FontAwesomeIcon icon={faUserTag} /><span>Personal Loans</span></div>
               <div className="menuOptionMobile" id="menuOptionMobileselected"><FontAwesomeIcon icon={faTags} /><span>New Releases</span></div>
               <div className="menuTitle"><span>YOUR BOOKS</span></div>
               <div className="menuOptionMobile"><FontAwesomeIcon icon={faBookOpen} /><span>Readings</span></div>
               <div className="menuOptionMobile"><FontAwesomeIcon icon={faHistory} /><span>History</span></div>
               <div className="menuOptionMobile"><FontAwesomeIcon icon={faBookmark} /><span>Read Later</span></div>
               <div className="menuOptionMobile"><FontAwesomeIcon icon={faHeart} /><span>Favorites</span></div>
             </div>
             <div>
               <div className="aside" id="leftbar">
                 <div className="menuTitle"><span>MAIN</span></div>
                 <div className="menuOption"><FontAwesomeIcon icon={faGlobe} /><span>Quito</span></div>
                 <div className="menuOption"><FontAwesomeIcon icon={faGlobe} /><span>Cartagena</span></div>
                 <div className="menuOption"><FontAwesomeIcon icon={faGlobe} /><span>Medellin</span></div>
                 <div className="menuOption"><FontAwesomeIcon icon={faTabletAlt} /><span>Digital</span></div>
                 <div className="menuOption"><FontAwesomeIcon icon={faUserTag} /><span>Personal Loans</span></div>
                 <div className="menuOption" id="menuOptionselected"><FontAwesomeIcon icon={faTags}/><span>New Releases</span></div>
                 <div className="menuTitle"><span>YOUR BOOKS</span></div>
                 <div className="menuOption"><FontAwesomeIcon icon={faBookOpen} /><span>Readings</span></div>
                 <div className="menuOption"><FontAwesomeIcon icon={faHistory}  /><span>History</span></div>
                 <div className="menuOption"><FontAwesomeIcon icon={faBookmark}/><span>Read Later</span></div>
                 <div className="menuOption"><FontAwesomeIcon icon={faHeart}/><span>Favorites</span></div>
               </div>
             </div>
             </>
    )
  }
}

class ClickableFilter extends Component {

  state = {
    filter: ''
    
  }

  selectFilter = (event) => {
    this.setState({ filter: event.target.id });
    this.props.getLocation(event.target.id);
    this.props.setToActive(this.props.locationName);
  }

  deactivate = () => {
    this.props.getLocation('');
    this.props.setToActive('');
  };

  render() {
    return (
      <li id={this.props.locationName} onClick={this.selectFilter} onDoubleClick={this.deactivate} className={this.props.isActive ? 'selected' : ''} >
        <i className={this.props.faIcon} />{this.props.locationName} </li>
    )
  }
}

export default Menu; 