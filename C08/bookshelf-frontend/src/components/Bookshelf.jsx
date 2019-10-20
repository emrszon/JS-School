import React, { Component } from 'react';
import { getAllBooks, getFilteredBooks } from '../scripts/books'
import Book from './Books';
import BookList from './Booklist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router';
import {getLoans} from '../scripts/reservation';
import  {notify} from 'react-notify-toast';

class Bookshelf extends Component {

   state = {
     bookshelf: [],
     list: false,
     group: true,
     search: this.props.search
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
    makeHttpRequestWithPage = async pageNumber => {
      let allBooks = [];
      let response = await getAllBooks(pageNumber);
      console.log(response)
      const data =  response.data;
      data.forEach((book) => allBooks.push(book));
      this.setState({ bookshelf: allBooks })
    
       this.setState({
       total: response.maxPages,
       currentPage: response.page
    });
  }

  componentDidMount() {
    let allBooks = [];

    if(this.props.city===undefined || this.props.match.params.city==="NewReleases"){
    this.makeHttpRequestWithPage(1)
    }else{
      if(this.props.match.params.city==="PersonalLoans"){
        getLoans(window.sessionStorage.getItem("username"))
      .then(( books ) => {
        if(books===undefined){
          notify.show(" This user don't have loans")
        }else{
        books.forEach((book) => allBooks.push(book.book));
        }
      })
      .then(() => {
        console.log(this.props.match.params.city)
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
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      bookshelf: []
    });

    let allBooks = [];
    if(nextProps.match.params.city==="NewReleases"||nextProps.match.params.city===undefined){
    getAllBooks(nextProps.getLocation)
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
      if(nextProps.match.params.city==="PersonalLoans"){
        getLoans(window.sessionStorage.getItem("username"))
      .then(( books ) => {
        if(books===undefined){
          notify.show(" This user don't have loans")
        }else{
        books.forEach((book) => allBooks.push(book.book));
        }
      })
      .then(() => {
        console.log(nextProps.match.params.city)
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
  }


  handleClickPrevious = (event) => {
    if(this.state.currentPage>1){
      this.makeHttpRequestWithPage(Number.parseInt(this.state.currentPage)-1)
  }
  }
  handleClickNext = (event) => {
    if(this.state.currentPage<this.state.total){
    this.makeHttpRequestWithPage(Number.parseInt(this.state.currentPage)+1)
    }
  }

  render() {
    let Bookshelf = this.state.bookshelf;

    const pageNumbers = [];
    if (this.state.total !== null) {
      for (let i = 1; i <= this.state.total; i++) {
        pageNumbers.push(i);
      }
      }
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
            <div id="pagination">
              <button id="previousPage" onClick={this.handleClickPrevious}><FontAwesomeIcon icon={faAngleLeft}/></button>
          {pageNumbers.map(number => {
                          return (<span key={number} onClick={() => this.makeHttpRequestWithPage(number)}>{number}</span>);
                })}              
              <button id="nextPage"  onClick={this.handleClickNext}><FontAwesomeIcon icon={faAngleRight}/></button>
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
            return <Book book={book} key={book._id}/>
          }else{
            return <BookList book={book} key={book._id}/>
          }
          })
          }
          </div> 
          </div></div>
    )
  }
}

export default withRouter(Bookshelf) ;   
