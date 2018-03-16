import React, { Component } from 'react';
import './style.less';

import menu1ImgUrl from './images/menu2.png';
import menu2ImgUrl from './images/menu.png';
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="menu">
          <section
            className="toggle"
            style={{
              backgroundImage: `url("${menu2ImgUrl}")`,
            }}
            href="#" />
          <ul className="link">
            <li><a href="https://twitter.com/howell9511">twitter</a></li>
            <li><a href="https://github.com/Howell5">github</a></li>
            <li><a href="https://www.zhihu.com/people/hong-jia-wei-94/activities">zhihu</a></li>
          </ul>
        </div>
        <div className="heading">
          <h2>howell</h2>
          <div style={{
            width: '100px',
            height: '100px',
            backgroundImage: `url("${menu1ImgUrl}")`,
          }} />
          <img src={menu1ImgUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Home;
