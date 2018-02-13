import React, { Component } from 'react';
import axios from 'axios';
// import logger from 'winston';
class Test extends Component {
  constructor() {
    super();
    this.state = {
      test: {},
    };
  }
  componentDidMount() {
    axios.get('api/admin')
      .then((res) => {
        console.log('request response', res);
        this.setState({
          test: res.data,
        });
      });
  }
  render() {
    console.log('change it change to the react momo wuyu');
    return (
      <div style={{ width: '100px', height: '50px' }}>
        <h2>{this.state.test.userName}</h2>
        <h3>{this.state.test.age}</h3>
      </div>
    );
  }
}

export default Test;
