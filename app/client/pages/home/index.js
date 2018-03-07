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
          <ul className="link">
            <li><a href="https://twitter.com/howell9511">twitter</a></li>
            <li><a href="https://github.com/Howell5">github</a></li>
            <li><a href="https://www.zhihu.com/people/hong-jia-wei-94/activities">zhihu</a></li>
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
