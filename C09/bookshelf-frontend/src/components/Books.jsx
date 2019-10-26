import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookmark, faHeart, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import BookInfo from './Bookinfo';
import LendForm from './LendForm';
import styled from 'styled-components';


 
const BookStyle= styled.div`

  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
  position: relative;
  z-index: 20;

.bookImg {
  width: 176px;
  height: 264px;
  position: relative;
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

.available {
  position: absolute;
  top: 17%;
  right: 1%;

  &:hover {
    opacity: 0.3;
  }
}

.bookTitle {
  font-family: PlutoSansCondMedium;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #383838;
  width: 176px;
  padding-top: 10px;
  padding-bottom: 5px;
}

.bookAutor {
  font-family: PlutoSansCondLight;
  font-size: 13px;
  color: #9E9E9E;
  width: 176px;
  padding-bottom: 5px;
}

.bookRate {
  color: #6EC1E4;
  width: 176px;
  font-family: PlutoSansCondMedium;
}
`

class Book extends Component {

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
          trigger='click'
          interactive='true'
          content={<LendForm book={this.props.book} />}>
          <Tippy
            placement='right'
            multiple='true'
            content={<BookInfo book={this.props.book} />}>
            <BookStyle>
              <div className="bookImg" id="img1">

                <div className="container">
                  <img src={this.props.book.imageLinks} alt="" className="image" style={{ width: '100%', height: '264px' }} />
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
              <div className="bookTitle">{this.props.book.title}</div>
              <div className="bookAutor">{this.props.book.author}</div>
              <div className="bookRate">{stars}</div>
            </BookStyle>

          </Tippy>
        </Tippy>
      </>

    )
  }
}

export default Book;
