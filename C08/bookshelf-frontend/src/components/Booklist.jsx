import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookmark, faHeart, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import LendForm from './LendForm';

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
    
    if(this.props.book.averageRating===undefined){
    stars = ["Not available"]
    }else{
     stars.fill(<FontAwesomeIcon icon={faStar}/>,0,this.props.book.averageRating);
     stars.fill(<FontAwesomeIcon icon={farStar}/>,this.props.book.averageRating, 5);
    }
    return (
    <>
<Tippy 
placement= 'left'
              trigger = 'click'
              interactive = 'true'
              content={<LendForm book={this.props.book}/>}>
      <div className="booksList" id={this.props.book.id}>
        <div className="bookImg" id="img1">
           
            <div className="container">
            <img src={this.props.book.imageLinks} alt="" className="image" style={{width: '176px', height: '264px'}} />
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
      </div>
      </Tippy>
      </>
    
    )
  }
}

export default BookList;
