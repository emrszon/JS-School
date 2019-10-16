import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTabletAlt, faUserTag, faBookOpen, faHistory, faBookmark, faHeart, faTags} from '@fortawesome/free-solid-svg-icons'

class MenuMobile extends Component {

  state = {
    activeFilter: '',
    display: this.props.display
}

handleClick = (event) => {
    this.setState({display: '0px'})
  }
  render() {
    return (
        <div>
               <div id="mobileSidenav" className="sidenav" style={{width: this.state.display}}>
               <a id="closenav" onClick={this.handleClick} href="javascript:void(0)" className="closebtn">×</a>
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
        </div>
    )
  }
}

export default MenuMobile; 