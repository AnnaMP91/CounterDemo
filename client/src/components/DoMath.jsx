import React from 'react';
import axios from 'axios';

class DoMath extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      math: ''
    }
    this.submitCountForMathing = this.submitCountForMathing.bind(this);
  }

  submitCountForMathing() {
    axios.get('/doSomeMath', {
      params: {
        count: this.props.count
      }
    })
      .then((response) => {
        console.log('response from the server in DoMath.jsx: ', response.data);
        this.setState({
          math: response.data
        })
      })
      .catch((error) => {
        console.log('error getting math from server in DoMath.jsx: ', error);
      })
  }


  render() {
    return (
      <div>
        <h4>Your Math From The Server</h4>
        <p>{this.state.math}</p>
        <button onClick={this.submitCountForMathing}>Get Count x3</button>
      </div>
    )
  }
}

export default DoMath;