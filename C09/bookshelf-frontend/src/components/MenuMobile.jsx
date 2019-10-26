import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTabletAlt, faUserTag, faBookOpen, faHistory, faBookmark, faHeart, faTags } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Leftbar = styled.div`

  height: 100%;
  width: 250px;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #231F20;
  color: #ffffff;
  text-align: left;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: #231F20;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

   button {
    text-decoration: none;
    border-style: none;
    background: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;

    &:hover {
      color: #f1f1f1;
    }
  }

  .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
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

class MenuMobile extends Component {

  state = {
    display: this.props.display
  }

  handleClick = (event) => {
    this.setState({ display: '0px' })
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
      <div>

        <Leftbar>
          <button id="closenav" onClick={this.handleClick} className="closebtn">×</button>
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

      </div>
    )
  }
}

export default withRouter(MenuMobile); 
