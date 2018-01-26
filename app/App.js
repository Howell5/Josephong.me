import React, { Component } from 'react';
import request from 'request';
// import logger from 'winston';
class Test extends Component {
  constructor() {
    super();
    this.state = {
      test: {},
    };
  }
  // componentDidMount() {
  //   request.get('api/admin', (err, body) => {
  //     // logger.debug('change did right', body);
  //     this.setState({
  //       test: body,
  //     });
  //   });
  // }
  render() {
    console.log('change it react momo wuyu');
    return (
      <div>
        <h2>{this.state.test.userName}</h2>
        <h3>{this.state.test.age}</h3>
      </div>
    );
  }
}

export default Test;
