import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTabletAlt, faUserTag, faBookOpen, faHistory, faBookmark, faHeart, faTags} from '@fortawesome/free-solid-svg-icons'



class Menu extends Component {

  state = {
    open: false,
    activeFilter: ''
  }

  handleClick = (filter) => this.setState({ activeFilter: filter })

  toggle() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }
  render() {
    return (
        
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
    )
  }
}

export default Menu; 
