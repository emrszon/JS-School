import React, { Component } from 'react';
import { getAllBooks, getFilteredBooks } from '../scripts/books'
import Book from './Books';
import BookList from './Booklist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList} from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router';

class Bookshelf extends Component {

   state = {
     bookshelf: [],
     list: false,
     group: true,
     search: this.props.search,
     city: this.props.city,
     location: this.props.location 
   }

   handleClick = (event) => {
      if(this.state.list===false ){
          this.setState({list: true});
          this.setState({group: false});
        }else{
          this.setState({list: false});
          this.setState({group: true});
        }
    }

  componentDidMount() {
    let allBooks = [];
    if(this.props.city===undefined || this.props.match.params.city==="NewReleases"){
    getAllBooks()
      .then(( books ) => { 
        console.log(this.state.search)
        if (books === undefined ){ 
          window.location = '/';
        }
        books.forEach((book) => allBooks.push(book));
      })
      .then(() => {
        this.setState({ bookshelf: allBooks });
      });
    }else{
      getFilteredBooks(this.props.match.params.city)
      .then(( books ) => {
        if(books===undefined){
          window.location = '/main';
        }
        books.forEach((book) => allBooks.push(book));
        
      })
      .then(() => {
        console.log(this.props.match.params.city)
        this.setState({ bookshelf: allBooks });
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoading: true,
      bookshelf: []
    });

    let allBooks = [];
    if(nextProps.match.params.city==="NewReleases"){
    getAllBooks()
      .then(( books ) => { 
        console.log(this.state.search)
        if (books === undefined ){ 
           window.location = '/';
        }
        books.forEach((book) => allBooks.push(book));
      })
      .then(() => {
        this.setState({ bookshelf: allBooks });
      });
    }else{
  
      getFilteredBooks(nextProps.match.params.city)
      .then(( books ) => {
        if(books===undefined){
          window.location = '/main';
        }
        books.forEach((book) => allBooks.push(book));
        
      })
      .then(() => {
        console.log(this.props.match.params.city)
        this.setState({ bookshelf: allBooks });
      });
    }
  }



  render() {
    
    let Bookshelf = this.state.bookshelf;
    return (
      
   
       <div id="bookshelf">
            <div id="bookshelfHeader">
              <div id="bookshelfTitle">{this.props.match.params.city}</div>
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
              return <Book book={book} key={book._id}/>
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

export default withRouter(Bookshelf) ;   
