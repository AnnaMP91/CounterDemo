import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.increment}>+</button>
      </div>
    )
  }
}

export default Counter;