import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import 'tippy.js/dist/tippy.css';

class BookInfo extends Component {

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
        <div className="bookInfo" >
          <div className="bookInfoContent">
            <div className="infoTitle">
              <div className="bTitle">{this.props.book.title}</div>
              <div className="bDate">{this.props.book.publishedDate}</div>
            </div>
            <div className="bookType">
              <div className="bType">{this.props.book.categories} by</div>
              <div className="autor">{this.props.book.author}</div>
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
      </>

    )
  }
}

export default BookInfo;
