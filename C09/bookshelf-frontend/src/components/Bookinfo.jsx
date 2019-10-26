import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import 'tippy.js/dist/tippy.css';
import styled from 'styled-components';

const BookInfostyle = styled.div`

  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  overflow: wrap;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-top: 3vw;


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
  color: white;
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
  color: white;
  padding-bottom: 18px;
}

.synopsis {
  font-family: PlutoSansCondRegular;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  color: white;
  max-height: 185px;
  overflow: hidden;
  text-overflow: ellipsis;

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

@media only screen and (min-width: 900px) {

    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    padding-left: 1.5vw;
    padding-right: 1.5vw;
    padding-top: 1.5vw;
}
`
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
        <BookInfostyle>
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
          
        </BookInfostyle>
      </>

    )
  }
}

export default BookInfo;
