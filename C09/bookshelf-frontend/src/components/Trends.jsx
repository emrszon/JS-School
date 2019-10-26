import React, { Component } from 'react';
import styled from 'styled-components'

const Rightbar = styled.div`
color: #FCF8F3;
display: flex;
flex-direction: column;
background-color: #231F20;
color: #ffffff;
text-align: left;
font-size: 14px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
overflow: hidden;
text-overflow: ellipsis;
height: 92vh;
width: 30vw;
@media only screen and (min-width: 900px) {
  width:15vw
  height: 100vh;
 }

.rightTitle {
  font-family: PlutoSansCondBold;
  padding-top: 40px;
  padding-left: 30px;
  padding-bottom: 15px;
  line-height: 15px;
  color: #FCF8F3;
  mix-blend-mode: normal;
  opacity: 0.7;
}

.rightTop {
  font-family: PlutoSansCondLight;
  font-size: 14px;
  padding-top: 30px;
  align-content: center;
  padding-left: 30px;
  padding-bottom: 5px;
  color: #FCF8F3;
  mix-blend-mode: normal;
  opacity: 0.7;
  width: 26vw;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`

class Trends extends Component {
  render() {
    return (
        <Rightbar>
          <div className="rightTitle"><span>MOST READ BOOKS</span></div>
          <div className="rightTop">1. Hooked: How to Build Habit-…</div>
          <div className="rightTop">2. The Inevitable: Understandin…</div>
          <div className="rightTop">3. Lean In: Women, Work, and t…</div>
          <div className="rightTop">4. Building a Business When Th…</div>
          <div className="rightTop">5. How Google Works
          </div>
        </Rightbar>
    )
  }
}

export default Trends; 
