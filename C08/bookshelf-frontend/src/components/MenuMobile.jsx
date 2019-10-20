import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTabletAlt, faUserTag, faBookOpen, faHistory, faBookmark, faHeart, faTags} from '@fortawesome/free-solid-svg-icons';


class MenuMobile extends Component {

  state = {
    activeFilter: '',
    display: this.props.display
}

handleClick = (event) => {
    this.setState({display: '0px'})
  }
  
getClickMenu= (event) => {
  
  let cookie = event.target
  this.props.getLocation(event.target)
  console.log(cookie)
  //window.location='/main/'+event.target.val;
}
  render() {
    return (
        <div>
               <ul id="mobileSidenav" className="sidenav" style={{width: this.state.display}}>
               <button id="closenav" onClick={this.handleClick} className="closebtn">×</button>
               <div className="menuTitle"><span>MAIN</span></div>
               <a href="/main/Quito"><div className="menuOptionMobile"><FontAwesomeIcon icon={faGlobe}/><span>Quito</span></div></a>
               <a href="/main/Cartagena"><div className="menuOptionMobile"><FontAwesomeIcon icon={faGlobe} /><span>Cartagena</span></div></a>
               <a href="/main/Medellin"><div className="menuOptionMobile"><FontAwesomeIcon icon={faGlobe} /><span>Medellin</span></div></a>
               <a href="/main/Digital"><div className="menuOptionMobile"><FontAwesomeIcon icon={faTabletAlt} /><span>Digital</span></div></a>
               <a href="/main/PersonalLoans"><div className="menuOptionMobile"><FontAwesomeIcon icon={faUserTag} /><span>Personal Loans</span></div></a>
               <a href="/main/NewReleases"><div className="menuOptionMobile" id="menuOptionMobileselected"><FontAwesomeIcon icon={faTags} /><span>New Releases</span></div></a>
               <div className="menuTitle"><span>YOUR BOOKS</span></div>
               <a href="/main/Readings"><div className="menuOptionMobile"><FontAwesomeIcon icon={faBookOpen} /><span>Readings</span></div></a>
               <a href="/main/History"><div className="menuOptionMobile"><FontAwesomeIcon icon={faHistory} /><span>History</span></div></a>
               <a href="/main/ReadLater"><div className="menuOptionMobile"><FontAwesomeIcon icon={faBookmark} /><span>Read Later</span></div></a>
               <a href="/main/Favorites"><div className="menuOptionMobile"><FontAwesomeIcon icon={faHeart} /><span>Favorites</span></div></a>
             </ul>
        </div>
    )
  }
}

export default MenuMobile; 
