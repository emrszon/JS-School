import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookmark, faHeart, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import BookInfo from './bookinfo';
import LendForm from './lendForm';

class Book extends Component {

  render() {
    let stars = [0, 0, 0, 0, 0];
    
    if(this.props.book.averageRating===undefined){
    stars = ["Not available"]
    }else{
     stars.fill(<FontAwesomeIcon icon={faStar}/>,0,this.props.book.averageRating);
     stars.fill(<FontAwesomeIcon icon={farStar}/>,this.props.book.averageRating, 5);
    }
    return (
    <>

<Tippy 
      placement= 'right'
      multiple='true'
      content={ <BookInfo book={this.props.book}/>}>
      <div className="books" id={this.props.book.id}>
        <div className="bookImg" id="img1">
          <Tippy 
              trigger = 'click'
              interactive = 'true'
              content={<LendForm book={this.props.book}/>}> 
            <div className="container">
            <img src={this.props.book.imageLinks} alt="" className="image" style={{width: '100%', height: '264px'}} />
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
        </Tippy></div>
        {/* {this.props.book.bookshelf.isLent &&
        <div className="available" style={{display: 'none'}}><img src="img/Available.png" alt="" /></div>} */}
        <div className="bookTitle">{this.props.book.title}</div>
        <div className="bookAutor">{this.props.book.author}</div>
        <div className="bookRate">{stars}</div>
      </div>

  </Tippy>
      
      </>
    
    )
  }
}

export default Book;