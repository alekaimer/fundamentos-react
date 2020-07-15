import React from 'react'

export default class Counter extends React.Component {

  // constructor(props){
  //   super(props)

  //   this.state = {
  //     number: props.initialNumber
  //   }
  // }

  state = {
    number: this.props.initialNumber
  }

  inc = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>Initial value: {this.state.number}</p>
        <button onClick={this.inc}>+</button>
      </div>
    )
  }
}