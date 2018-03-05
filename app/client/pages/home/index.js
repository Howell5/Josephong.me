import React, { Component } from 'react';
import './style.less';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="menu">
          <button className="toggle" href="#">
            <i className="icon-menu" />
          </button>
          <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
        </div>
        <div className="heading">
          <h2>howell</h2>
        </div>
      </div>
    );
  }
}

export default Home;
