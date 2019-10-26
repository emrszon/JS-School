import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookmark, faHeart, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import LendForm from './LendForm';
import styled from 'styled-components';


 
const BookStyle= styled.div`
width: 100%;
display: flex;
padding-top: 20px;
padding-left: 15px;
padding-right: 10px;
padding-bottom: 10px;
position: relative;
z-index: 20;
align-items: center;
border-top: solid 2px;
border-bottom: solid 2px;

.bookImg {
  width: 176px;
  height: 264px;
  
}

.container {
  position: relative;
  width: 100%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover {
  .image {
    filter: brightness(50%);
    -webkit-filter: brightness(50%);
  }

  .middle,
  .button,
  .text {
    opacity: 1;
  }
}

.text {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  bottom: 5%;
  left: 25%;
  color: #FCF8F3;
  font-family: PlutoSansCondMedium;
  text-align: center;

  div {
    padding-bottom: 10px;
    font-size: 12px;
  }

  span {
    color: #EEC75A;
    text-align: center;
    font-size: 12px;
  }
}

.button {
  transition: .5s ease;
  opacity: 0;
  background: #FFFFFF;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 50%;
}

.button1 {
  position: absolute;
  top: 8px;
  left: 16px;
  width: 30px;
  height: 30px;
  color: #9E9E9E;
}

.button2 {
  position: absolute;
  top: 8px;
  right: 16px;
  width: 30px;
  height: 30px;
  color: #9E9E9E;
}

.button3 {
  width: 50px;
  height: 50px;
  color: #6EC1E4;
  font-size: 22px;
  text-align: center;
  float: center;
}

.bookInfoContent {
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  overflow: wrap;
  padding-left: 3vw;
}

.infoTitle {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bTitle {
  font-family: PlutoSansCondBold;
  font-size: 18px;
  color: #5EB4DD;
}

.bDate {
  font-family: PlutoSansCondRegular;
  color: #858585;
}

.bookType {
  font-family: PlutoSansCondRegular;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
}

.bType {
  color: #383838;
  white-space: nowrap;
}

.autor {
  color: #858585;
  flex-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.infoSubtitle {
  font-family: PlutoSansCondBold;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  color: #858585;
  padding-bottom: 4px;
}

.pages {
  font-family: PlutoSansCondRegular;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  color: #383838;
  padding-bottom: 18px;
}

.synopsis {
  font-family: PlutoSansCondRegular;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  color: #858585;
}

.infoRate {
  display: flex;
  justify-content: flex-start;
  color: #6EC1E4;
  padding-bottom: 18px;
  font-family: PlutoSansCondMedium;
}

.recommended {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 18px;
}


`

class BookList extends Component {

  state = {
    open: false
  };

  toggle() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  render() {
    let stars = [0, 0, 0, 0, 0];

    if (this.props.book.averageRating === undefined) {
      stars = ["Not available"]
    } else {
      stars.fill(<FontAwesomeIcon icon={faStar} />, 0, this.props.book.averageRating);
      stars.fill(<FontAwesomeIcon icon={farStar} />, this.props.book.averageRating, 5);
    }
    return (
      <>
        <Tippy
          placement='left'
          trigger='click'
          interactive='true'
          content={<LendForm book={this.props.book} />}>
          <BookStyle>
            <div className="bookImg" id="img1">

              <div className="container">
                <img src={this.props.book.imageLinks} alt="" className="image" style={{ width: '176px', height: '264px' }} />
                <div className="middle"  >

                  <button className="button button3" ><FontAwesomeIcon icon={faBookOpen} /></button>

                </div>
                <button className="button button1"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="button button2"><FontAwesomeIcon icon={faBookmark} /></button>
                <div className="text">
                  <div>RATE THIS BOOK</div>
                  <span>{stars}</span>
                </div>
              </div>
            </div>
            {/* {this.props.book.bookshelf.isLent &&
        <div className="available" style={{display: 'none'}}><img src="img/Available.png" alt="" /></div>} */}
            <div className="bookInfo" >
              <div className="bookInfoContent">
                <div className="infoTitle">
                  <div className="bTitle">{this.props.book.title}</div>
                  <div className="bDate">{this.props.book.publishedDate}</div>
                </div>
                <div className="bookType">
                  <div className="bType">{this.props.book.categories} by</div>
                  <div className="autor">author</div>
                </div>
                <div className="pages">
                  <span>{this.props.book.pageCount} pages</span>
                </div>
                <div className="infoSubtitle">
                  <span>SUMMARY</span>
                </div>
                <div className="synopsis"><span>{this.props.book.description}</span></div>
                <div className="infoSubtitle"><span>RATING</span></div>
                <div className="infoRate">{stars}</div>
                <div className="infoSubtitle"><span>RECOMMENDED BY</span></div>
                <div className="recommended">
                  <img src="img\Library_Detailsreco.png" alt="" />
                  <img src="img\Library_Detailsreco2.png" alt="" />
                  <img src="img\Library_Detailsreco3.png" alt="" />
                </div>
              </div>
            </div>
          </BookStyle>
        </Tippy>
      </>

    )
  }
}

export default BookList;
