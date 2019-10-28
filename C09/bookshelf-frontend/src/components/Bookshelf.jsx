import React, { Component } from 'react';
import { getAllBooks, getDigitalBooks, getBooks } from '../scripts/books'
import Book from './Books';
import BookList from './Booklist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router';
import { getLoans } from '../scripts/reservation';
import { notify } from 'react-notify-toast';
import styled from 'styled-components';


const Pagination = styled.div`

  display: inline-flex;
flex-direction: row;
  margin-top: 15px;
font-family: PlutoSansCondRegular;
align-content: center;
justify-content: center;

span {
cursor: pointer;
color: black;
padding: 8px 16px;
text-decoration: none;
transition: background-color .3s;
border: 1px solid #ddd;
}

span.active {
background-color: #0099FF;
color: white;
border: 1px solid #0099FF;
}
 button{
padding: 8px 16px;
}
`
const BookshelfStyle = styled.div`
flex: 70vw;
display: flex;
flex-direction: column;
height: 100vh-80px;
overflow: scroll;
padding-top: 35px;
color: #F5F6F8;

.flex-container {
  display: flex;
  flex-flow: wrap;
  width: auto;
  padding-left: 4vw;
  padding-right: 4vw;
  align-content: flex-start;
  justify-content: center;
}

#bookshelfHeader {
  display: inline-flex;
  flex-flow: row;
  justify-content: space-between;
  align-content: center;
  padding-left: 5vw;
  padding-right: 5vw;
}

#bookshelfTitle {
  font-family: PlutoSansCondLight;
  //text-transform: uppercase;
  font-size: 21px;
  color: #231F20;
}

#bookshelfFilters {
  display: flex;
  color: #858585;
  font-family: PlutoSansCondRegular;
  font-size: 14px;

  div {
    padding-left: 5px;
    padding-right: 5px;
  }
}

#bookshlefDisplay {
  color: #6EC1E4;
  
  button{
    background: none;
    color: #6EC1E4;
    border-style: none;
    span{
      padding: 5px;
    }
  }
}

@media only screen and (min-width: 250px) {
  
    height: 82vh;

    .flex-container {
      align-content: flex-start;
      justify-content: center;
    }
}

@media only screen and (min-width: 900px) {
  height: 96vh;
}
`

class Bookshelf extends Component {

  state = {
    bookshelf: [],
    islist: false,
    search: this.props.search
  }

  handleClick = (event) => {
    this.state.islist === false ? this.setState({ islist: true }) : this.setState({ islist: false })
  }
  requestForAllBooks = async (pageNumber, search) => {
    let allBooks = [];
    let response = await getAllBooks(pageNumber, search);
    const data = response.data;
    if (data === undefined) {
      notify.show("This search don't contains results", "error")
    }else{
    data.forEach((book) => allBooks.push(book));
    this.setState({ bookshelf: allBooks })

    this.setState({
      total: response.maxPages,
      currentPage: response.page
    });}
  }

  requestForBooks = async (pageNumber, title, search) => {
    let allBooks = [];
    let response = await getBooks(pageNumber, title, search);
    const data = response.data;
    if (data === undefined) {
      notify.show("This search don't contains results", "error")
    }else{
    data.forEach((book) => allBooks.push(book));
    this.setState({ bookshelf: allBooks })

    this.setState({
      total: response.maxPages,
      currentPage: response.page
    });
  }
  }

  requestForDigitalBooks = async (pageNumber, title, search) => {
    let allBooks = [];
    let response = await getDigitalBooks(pageNumber, title, search);
    const data = response.data;
    if (data === undefined) {
      notify.show("This search don't contains results", "error")
    }else{
    data.forEach((book) => allBooks.push(book));
    this.setState({ bookshelf: allBooks })

    this.setState({
      total: response.maxPages,
      currentPage: response.page
    });
  }
  }
  componentDidMount() {
    let allBooks = [];
    if (this.props.match.params.city === undefined || this.props.match.params.city === "NewReleases") {
      this.requestForAllBooks(1, this.props.search);
      
    } else {
      if (this.props.match.params.city === "PersonalLoans") {

        getLoans(window.sessionStorage.getItem("username"))
          .then((books) => {
            if (books === 404) {
              
            } else {
              books.forEach((book) => allBooks.push(book.book));
            }
          })
          .then(() => {
            this.setState({ bookshelf: allBooks });
          });

      } else {
        if (this.props.match.params.city === "Digital") {
          this.requestForDigitalBooks(1, this.props.match.params.city, this.props.search)
        } else {
          this.requestForBooks(1, this.props.match.params.city, this.props.search);
        }
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      bookshelf: []
    });
    let allBooks = [];
    if (nextProps.match.params.city === "NewReleases" || nextProps.match.params.city === undefined) {
      
      console.log(this.props.search)
      this.requestForAllBooks(1, nextProps.search);
    } else {
      if (nextProps.match.params.city === "PersonalLoans") {
        getLoans(window.sessionStorage.getItem("username"))
          .then((loans) => {
            if (loans === 404 ) {
              notify.show(" This user don't have loans")
            } else {
              loans.forEach((book) => allBooks.push(book.book));
            }
          })
          .then(() => {
            this.setState({ bookshelf: allBooks });
          });

      } else {
        if (nextProps.match.params.city === "Digital") {
          this.requestForDigitalBooks(1, nextProps.match.params.city, nextProps.search)
        } else {
          this.requestForBooks(1, nextProps.match.params.city, nextProps.search);
        }
      }
    }
  }


  handleClickPrevious = (event) => {

    if (this.state.currentPage > 1) {
      if (this.props.match.params.city === "Digital") {
        this.requestForDigitalBooks(Number.parseInt(this.state.currentPage) - 1, this.props.match.params.city, this.props.search)
      } else {
        if (this.props.match.params.city === "NewReleases" || this.props.match.params.city === undefined) {
          this.requestForAllBooks(Number.parseInt(this.state.currentPage) - 1, this.props.search)
        } else {
          this.requestForBooks(Number.parseInt(this.state.currentPage) - 1, this.props.match.params.city, this.props.search);
        }
      }
    }
  }
  handleClickNext = (event) => {
    if (this.state.currentPage < this.state.total) {
      if (this.props.match.params.city === "Digital") {
        this.requestForDigitalBooks(Number.parseInt(this.state.currentPage) + 1, this.props.match.params.city, this.props.search)
      } else {
        if (this.props.match.params.city === "NewReleases" || this.props.match.params.city === undefined) {
          this.requestForAllBooks(Number.parseInt(this.state.currentPage) + 1, this.props.search)
        } else {
          this.requestForBooks(Number.parseInt(this.state.currentPage) + 1, this.props.match.params.city, this.props.search);
        }
      }
    }
  }

  handleClickPage = (number) => {
    if (this.props.match.params.city === "Digital") {
      this.requestForDigitalBooks(number, this.props.match.params.city)
    } else {
      if (this.props.match.params.city === "NewReleases" || this.props.match.params.city === undefined) {
        this.requestForAllBooks(number)
      } else {
        this.requestForBooks(number, this.props.match.params.city);
      }
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
    let displayPrevious = Number.parseInt(this.state.currentPage) === 1 ? 'none' : 'inline-block';
    let displayNext = Number.parseInt(this.state.currentPage) === Number.parseInt(this.state.total) ? 'none' : 'inline-block';
    return (
      <BookshelfStyle>
        <div id="bookshelfHeader">
          <div id="bookshelfTitle">{this.props.match.params.city}</div>
          <div id="bookshelfFilters">
            <div>Release Date</div>
            <div>|</div>
            <div>Popularity</div>
          </div>
          <div id="bookshlefDisplay" >
            <button onClick={this.handleClick}><span><FontAwesomeIcon icon={faThLarge} /></span><FontAwesomeIcon icon={faThList} /></button>
          </div>

        </div>
        <Pagination>
          <button style={{ display: displayPrevious }} id="previousPage" onClick={this.handleClickPrevious}><FontAwesomeIcon icon={faAngleLeft} /></button>

          {pageNumbers.map(number => {
            let classes = Number.parseInt(this.state.currentPage) === number ? 'active' : '';
            return (<span key={number} className={classes} onClick={() => this.handleClickPage(number)}>{number}</span>);
          })}

          <button id="nextPage" style={{ display: displayNext }} onClick={this.handleClickNext}><FontAwesomeIcon icon={faAngleRight} /></button>
        </Pagination>
        <div className="flex-container" id="bookshelfcontent">
          {/*==============================================
                  Books Section
                 ============================================== */}

          {Bookshelf.map((book) => {

              if (window.innerWidth <= 768 || !this.state.islist) {
                return <Book book={book} key={book._id} />
              }
              else {
                return <BookList book={book} key={book._id} />
              }
            })}
          
        </div>
        <Pagination>
          <button style={{ display: displayPrevious }} id="previousPage" onClick={this.handleClickPrevious}><FontAwesomeIcon icon={faAngleLeft} /></button>

          {pageNumbers.map(number => {
            let classes = Number.parseInt(this.state.currentPage) === number ? 'active' : '';
            return (<span key={number} className={classes} onClick={() => this.handleClickPage(number)}>{number}</span>);
          })}

          <button id="nextPage" style={{ display: displayNext }} onClick={this.handleClickNext}><FontAwesomeIcon icon={faAngleRight} /></button>
        </Pagination>
      </BookshelfStyle>
    )
  }
}

export default withRouter(Bookshelf);   
