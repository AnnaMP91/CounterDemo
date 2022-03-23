import React from 'react';

class CounterMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.count >= 0 ? 'It is positive. :)' : 'It is negative :c'}
      </div>
    )
  }
}

export default CounterMessage;