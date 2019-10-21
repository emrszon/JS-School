import React, { Component } from 'react';
import { getAllBooks, getDigitalBooks, getBooks } from '../scripts/books'
import Book from './Books';
import BookList from './Booklist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router';
import {getLoans} from '../scripts/reservation';
import  {notify} from 'react-notify-toast';
import  '../css/pagination.scss'

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
    requestForAllBooks = async pageNumber => {
      let allBooks = [];
      let response = await getAllBooks(pageNumber);
      const data =  response.data;
      data.forEach((book) => allBooks.push(book));
      this.setState({ bookshelf: allBooks })
    
       this.setState({
       total: response.maxPages,
       currentPage: response.page
    });
  }

  requestForBooks = async (pageNumber, title) => {
    let allBooks = [];
    let response = await getBooks(pageNumber, title);
    const data =  response.data;
    data.forEach((book) => allBooks.push(book));
    this.setState({ bookshelf: allBooks })
  
     this.setState({
     total: response.maxPages,
     currentPage: response.page
  });
}

requestForDigitalBooks = async (pageNumber, title) => {
  let allBooks = [];
  let response = await getDigitalBooks(pageNumber, title);
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
    this.requestForAllBooks(1);
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
        this.setState({ bookshelf: allBooks });
      });

      }else{
        if(this.props.match.params.city==="Digital"){
          this.requestForDigitalBooks(1,this.props.match.params.city)
        }else{
        this.requestForBooks(1,this.props.match.params.city);
      }
    }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      bookshelf: []
    });

    let allBooks = [];
    if(nextProps.match.params.city==="NewReleases"||nextProps.match.params.city===undefined){
      this.requestForAllBooks(1);
    }else{
      if(nextProps.match.params.city==="PersonalLoans"){
        getLoans(window.sessionStorage.getItem("username"))
      .then(( loans ) => {
        if(loans===undefined){
          notify.show(" This user don't have loans")
        }else{
        loans.forEach((book) => allBooks.push(book.book));
        }
      })
      .then(() => {
        this.setState({ bookshelf: allBooks });
      });

      }else{
        if(this.props.match.params.city==="Digital"){
          this.requestForDigitalBooks(1,this.props.match.params.city)
        }else{
        this.requestForBooks(1,this.props.match.params.city);
      }
    }
    }
  }


  handleClickPrevious = (event) => {

    if(this.state.currentPage>1){
      if(this.props.match.params.city==="Digital"){
        this.requestForDigitalBooks(Number.parseInt(this.state.currentPage)-1,this.props.match.params.city)
      }else{
      if(this.props.match.params.city==="NewReleases"||this.props.match.params.city===undefined){
     this.requestForAllBooks(Number.parseInt(this.state.currentPage)-1)  
    }else{
     this.requestForBooks(Number.parseInt(this.state.currentPage)-1,this.props.match.params.city);}
}
  }
  }
  handleClickNext = (event) => {
    if(this.state.currentPage<this.state.total){
      if(this.props.match.params.city==="Digital"){
        this.requestForDigitalBooks(Number.parseInt(this.state.currentPage)+1,this.props.match.params.city)
      }else{
        if(this.props.match.params.city==="NewReleases"||this.props.match.params.city===undefined){
       this.requestForAllBooks(Number.parseInt(this.state.currentPage)+1)  
      }else{
       this.requestForBooks(Number.parseInt(this.state.currentPage)+1,this.props.match.params.city);
      }
  }
    }
  }

  handleClickPage=(number)=>{
    if(this.props.match.params.city==="Digital"){
      this.requestForDigitalBooks(number,this.props.match.params.city)
    }else{
      if(this.props.match.params.city==="NewReleases"){
     this.requestForAllBooks(number)  
    }else{
     this.requestForBooks(number,this.props.match.params.city);}
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
            <div className={"pagination"}>
              <button id="previousPage" onClick={this.handleClickPrevious}><FontAwesomeIcon icon={faAngleLeft}/></button>

          {pageNumbers.map(number => {
            let classes = Number.parseInt(this.state.currentPage) === number ? 'active' : '';
                          return (<span key={number} className={classes} onClick={() => this.handleClickPage(number)}>{number}</span>);
                })}

              <button id="nextPage"  onClick={this.handleClickNext}><FontAwesomeIcon icon={faAngleRight}/></button></div>
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
          <div className={"pagination"}>
              <button id="previousPage" onClick={this.handleClickPrevious}><FontAwesomeIcon icon={faAngleLeft}/></button>

          {pageNumbers.map(number => {
            let classes = Number.parseInt(this.state.currentPage) === number ? 'active' : '';
                          return (<span key={number} className={classes} onClick={() => this.handleClickPage(number)}>{number}</span>);
                })}

              <button id="nextPage"  onClick={this.handleClickNext}><FontAwesomeIcon icon={faAngleRight}/></button></div> 
          </div>
    )
  }
}

export default withRouter(Bookshelf) ;   
