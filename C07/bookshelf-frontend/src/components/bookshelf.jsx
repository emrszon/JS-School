import React, { Component } from 'react';
//import { getAllBooks } from '../services/bookService'
//import Book from './Book';
//import ReservationModal from './ReservationModal'
//import '../css/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faThList} from '@fortawesome/free-solid-svg-icons'


class BooksContainer extends Component {

//   state = {
//     showModal: false,
//     isLoading: true,
//     bookshelf: [],
//   }

//   showModal = (book) => {
//     this.setState({ showModal: true });
//     this.modal.getBook(book);
//   }

//   hideModal = () => {
//     this.setState({ showModal: false });
//   }

//   componentDidMount() {
//     let allBooks = []

//     getAllBooks()
//       .then(({ books }) => {
//         if (books === undefined) window.location = '/'
//         books.forEach((book) => allBooks.push(book));
//       })
//       .then(() => {
//         this.setState({ bookshelf: allBooks });
//         this.setState({ isLoading: false });
//       });
//   }

  render() {

    // let location = this.state.bookshelf.filter(
    //   (book) => book.bookshelf.location.indexOf(this.props.location) !== -1);

    // let filteredBookshelf = location.filter(
    //   (book) => book.title.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1);

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

          {/* {filteredBookshelf.map((book) => {
            return <Book book={book} key={book.bookId} showModal={this.showModal.bind(null, book)} />
          })
          }

          <ReservationModal show={this.state.showModal} handleClose={this.hideModal} ref={ref => { this.modal = ref }} />
          */ } </div> 
          </div>
    )
  }
}

export default BooksContainer;   