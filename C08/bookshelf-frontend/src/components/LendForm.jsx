import React, { Component, useState  } from 'react';
import { lend } from '../scripts/reservation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


class LendForm extends Component {

  state = {
    duration: undefined,
    startDate: new Date()
  }

  handleChange = (event) => this.setState({ duration: event.target.value })
  addDays = (date, int) => date.setDate(date.getDate()+int)
  handleChangeDate = date => {
    this.setState({
      startDate: date
    });
    
  };

  handleSubmit = (event) => {
    if(this.state.duration===null){
        alert("The duration is the number of the days that you pretend use the book")
    }else{
    lend(this.props.book.id, Number.parseInt(this.state.duration));
  event.preventDefault();
}

  }

  render() {
    return (<>
    <div className="lend">
        <div className="lendTitle">
          <p>Lend this book</p>
        </div>
        <div className="lendForm">
          
  <form className="lendInput" onChange={this.handleChange} onSubmit={this.handleSubmit} >
          <DatePicker className="form-group"  selected={this.state.startDate} onChange={this.handleChangeDate} 
          minDate={new Date()}
      maxDate={this.addDays(new Date(), 15)}
      inline={true}/>
            <button>Lend</button>
          </form>
        </div>
      </div>
      </>
    )
  }
}

export default LendForm;
