import React from 'react';
import Counter from './Counter.jsx';
import CounterMessage from './CounterMessage.jsx';
import DoMath from './DoMath.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.state.count++;
    this.setState({
      count: this.state.count
    })
  }

  decrement() {
    this.state.count--;
    this.setState({
      count: this.state.count
    })
  }

  render() {
    return (
      <div>
        <Counter increment={this.increment} decrement={this.decrement} count={this.state.count} />
        {this.state.count !== 0 && <CounterMessage count={this.state.count} />}
        <DoMath count={this.state.count} />

      </div>
    )
  }
}

export default App;