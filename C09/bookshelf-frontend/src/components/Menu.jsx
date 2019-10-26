import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTabletAlt, faUserTag, faBookOpen, faHistory, faBookmark, faHeart, faTags } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Leftbar = styled.div`
display: flex;
flex-direction: column;
color: #FCF8F3;
display: flex;
  flex-direction: column;
background-color: #231F20;

text-align: left;
font-size: 14px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
overflow: hidden;
text-overflow: ellipsis;
height: 100vh;
width: 15vw;
@media only screen and (min-width: 900px) {
  display: ${window.innerWidth <= 900 ? "none" : "flex"}
 }

.menuOption {
  display: inline-flex;
  flex-direction: row;
  font-family: PlutoSansCondRegular;
  font-size: 14px;
  padding-top: 30px;
  color: #6EC1E4;
  align-content: center;
  padding-left: 30px;

  span {
    padding-left: 20px;
  }
}
a{
  text-decoration: none;
}

.menuOptionselected {
  display: inline-flex;
  flex-direction: row;
  font-family: PlutoSansCondRegular;
  font-size: 14px;
  padding-top: 30px;
  align-content: center;
  padding-left: 30px;
  padding-bottom: 5px;
  color: white;

  span {
    padding-left: 20px;
  }
}

.menuTitle {
  font-family: PlutoSansRegular;
  font-size: 13px;
  padding-top: 40px;
  padding-left: 30px;
}
`

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
    const navLinks = [
      { icon: faGlobe, to: "/main/Quito", label: "Quito" },
      { icon: faGlobe, to: "/main/Cartagena", label: "Cartagena" },
      { icon: faGlobe, to: "/main/Medellin", label: "Medellin" },
      { icon: faTabletAlt, to: "/main/Digital", label: "Digital" },
      { icon: faUserTag, to: "/main/PersonalLoans", label: "PersonalLoans" },
      { icon: faTags, to: "/main/", label: "New Releases" },
    ]
    const navOption = [
      { icon: faBookOpen, label: "Readings" },
      { icon: faHistory, label: "History" },
      { icon: faBookmark, label: "Read Later" },
      { icon: faHeart, label: "Favorites" },
    
    ]
    return (

        <Leftbar>
          <div className="menuTitle"><span>MAIN</span></div>
          {navLinks.map(({ icon, to, label }) => (
            <NavLink
              to={to}
              exact activeClassName="menuOptionselected"
              className="menuOption"
            >
              <FontAwesomeIcon icon={icon} />
              <span>{label}</span>
            </NavLink>
          ))}<div className="menuTitle"><span>YOUR BOOKS</span></div>
          {navOption.map(({ icon, to, label }) => (
            <div className="menuOption">
              <FontAwesomeIcon icon={icon}/>
              <span>{label}</span>
            </div>
          ))}
        </Leftbar>

    )
  }
}

export default withRouter(Menu); 
