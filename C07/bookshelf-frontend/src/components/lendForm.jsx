import React, { Component } from 'react';
import { lend } from '../scripts/reservation';


class LendForm extends Component {

  state = {
    duration: null,
  }

  handleChange = (event) => this.setState({ duration: event.target.value })

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
            <input type="text" style={{width:'5vw'}}  placeholder="Duration"  value={this.state.duration} />
            <button>Lend</button>
          </form>
        </div>
      </div>
      </>
    )
  }
}

export default LendForm;