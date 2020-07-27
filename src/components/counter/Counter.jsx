import React from 'react'

export default class Counter extends React.Component {

  // constructor(props){
  //   super(props)

  //   this.state = {
  //     number: props.initialNumber
  //   }
  // }

  state = {
    number: this.props.initialNumber || 0,
    pass: this.props.initialPass || 3,
  }

  inc = () => {
    this.setState({
      number: this.state.number + this.state.pass
    })
  }

  dec = () => {
    this.setState({
      number: this.state.number - this.state.pass
    })
  }

  setPass = (event) => {
    this.setState({
      pass: +event.target.value, // this + change string for the integer
    })
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>Initial value: {this.state.number}</p>
        <div>
          <label htmlFor="passInput"></label>
          <input id="passInput" type="number" value={this.state.pass} onChange={this.setPass}/>
        </div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}