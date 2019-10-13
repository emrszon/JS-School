import React, { Component } from 'react';
import { getAllBooks } from '../scripts/books'
import Book from './books';
//import ReservationModal from './ReservationModal'
//import '../css/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList} from '@fortawesome/free-solid-svg-icons';

class Bookshelf extends Component {

   state = {
     showModal: false,
     isLoading: true,
     bookshelf: [],
   }

  componentDidMount() {
    let allBooks = [];
  
    getAllBooks()
      .then(( books ) => {
        if (books === undefined ){ 
          window.location = '/';
        }
        books.forEach((book) => allBooks.push(book));
      })
      .then(() => {
        this.setState({ bookshelf: allBooks });
        this.setState({ isLoading: false });
      });
  }

  render() {

    let Bookshelf = this.state.bookshelf;

    return (
      
       <div id="bookshelf">
            <div id="bookshelfHeader">
              <div id="bookshelfTitle">New Releases</div>
              <div id="bookshelfFilters">
                <div>Release Date</div>
                <div>|</div>
                <div>Popularity</div>
              </div>
              <div id="bookshlefDisplay">
                <span>  <FontAwesomeIcon icon={faThLarge}/> </span>
                <FontAwesomeIcon icon={faThList}/>
              </div>
            </div>
            <div className="flex-container" id="bookshelfcontent">
              {/*==============================================
                  Books Section
                      ============================================== */}

          {Bookshelf.map((book) => {
            return <Book book={book}/>
          })}
          </div> 
          </div>
    )
  }
}

export default Bookshelf;   