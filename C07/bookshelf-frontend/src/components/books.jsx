import React, { Component } from 'react';

class Book extends Component {

  render() {
    const maxStars = 5;
    const star = [...Array(this.props.book.rating).keys()];
    const starO = [...Array(maxStars - this.props.book.rating).keys()]

    return (
    <>
      <div onDoubleClick={this.props.showModal} className={`books ${this.props.book.bookshelf.location}`} id={this.props.book.isbn} >
        <img src={this.props.book.imageLinks.thumbnail} alt="book"></img>
        {this.props.book.bookshelf.isLent &&
          <img src={require('../img/borrowed.png')} id="borrowed" alt="Lent" align="right" />}
        <h4>{this.props.book.title}</h4>
        <h5>{this.props.book.authors[0]}</h5>
        {star.map(() => <span className="fa fa-star"></span>)}
        {starO.map(() => <span className="fa fa-star-o"></span>)}


      </div>

                    <div class="books" id={id}>
                        <div class="bookImg" id="img1">
                            <div class="container">
                                <img src={imageLinks} alt="" class="image" style="width:100%;height:264px;"></img>
                                <div class="middle">
                                    <button class="button button3"><i class="fas fa-book-open"></i></button>
                                </div>
                                <button class="button button1"><i class="far fa-heart"></i></button>
                                <button class="button button2" id={bookmark}><i class="far fa-bookmark"></i></button>
                                <div class="text">
                                    <div>RATE THIS BOOK</div>
                                    <span>{averageRating}</span>
                                </div>
                            </div>
                        </div>
                        <div class="available" id={bookmarkimg} style="display: none"><img src="img/Available.png" alt=""></img></div>
                        <div class="bookTitle">{title}</div>
                        <div class="bookAutor">{author}</div>
                        <div class="bookRate">{averageRating}</div>
                    </div>
                        </>
    
    )
  }
}

export default Book;