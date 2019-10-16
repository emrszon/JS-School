import React, { Component } from 'react';
import { getAllBooks, getBookByTitle } from '../scripts/books'
import Book from './books';
import BookList from './booklist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList} from '@fortawesome/free-solid-svg-icons';

class Bookshelf extends Component {

   state = {
     bookshelf: [],
     list: false,
     group: true,
     search: this.props.search
   }
   handleClick = (event) => {
    if(this.state.list===false){
    this.setState({list: true});
    this.setState({group: false});
    }else{
      this.setState({list: false});
      this.setState({group: true});
    }
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
              <div id="bookshlefDisplay" >
              <button  onClick={this.handleClick}><span><FontAwesomeIcon icon={faThLarge}/></span><FontAwesomeIcon icon={faThList}/></button>
                
                

              </div>
            </div>
            <div className="flex-container" id="bookshelfcontent">
              {/*==============================================
                  Books Section
                      ============================================== */}

          { 
            Bookshelf.map((book) => {
              
            if(window.innerWidth <= 768){
              return <Book book={book}/>
            }
            if(this.state.group===true){
            return <Book book={book}/>
          }else{
            return <BookList book={book}/>
          }
          })
          }
          </div> 
          </div>
    )
  }
}

export default Bookshelf;   