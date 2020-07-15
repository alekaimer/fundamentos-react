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
  }

  inc = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  dec = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>Initial value: {this.state.number}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}