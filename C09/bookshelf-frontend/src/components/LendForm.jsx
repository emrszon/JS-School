import React, { Component } from 'react';
import { lend } from '../scripts/reservation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components';

const LendFormstyle = styled.div`

  font-family: PlutoSansCondRegular;
  padding: 5px;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  display: inline-flex;
  form {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-items: space-between;
    button{
    padding-left: 2px;
  }
  
`

class LendForm extends Component {

  state = {
    startDate: new Date()
  }

  handleChange = (event) => this.setState({ duration: event.target.value })
  addDays = (date, int) => date.setDate(date.getDate() + int)
  handleChangeDate = date => {
    this.setState({
      startDate: date
    });

  };

  handleClick = (event) => {
    if (this.state.duration === null) {
      alert("The duration is the number of the days that you pretend use the book")
    } else {
      lend(this.props.book.id, this.state.startDate);
      event.preventDefault();
    }

  }

  render() {
    return (<>
      <LendFormstyle>
        <div className="lendTitle">
          <p>Lend this book</p>
        </div>
        <div className="lendForm">

          <DatePicker className="form-group" selected={this.state.startDate} onChange={this.handleChangeDate}
            minDate={new Date()}
            maxDate={this.addDays(new Date(), 15)}
            inline={true} />
          <button onClick={this.handleClick}>Lend</button>

        </div>
      </LendFormstyle>
    </>
    )
  }
}

export default LendForm;
