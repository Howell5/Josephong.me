import React, { Component } from 'react';
import './style.less';

import menu2ImgUrl from './images/menu.png';


const IconList = props => {
  const { isShow } = props;
  return isShow ? (
    <ul className="link" >
      <li><a href="https://twitter.com/howell9511">twitter</a></li>
      <li><a href="https://github.com/Howell5">github</a></li>
      <li><a href="https://www.zhihu.com/people/hong-jia-wei-94/activities">zhihu</a></li>
    </ul>
  ) : null;
};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
    this.showIconList = this.showIconList.bind(this);
  }
  showIconList() {
    console.log('showIconList', this.state);
    this.setState(prevState => ({
      isShow: !prevState.isShow,
    }));
  }

  render() {
    const { isShow } = this.state;
    return (
      <div className="home">
        <div className="menu">
          <section
            className="toggle"
            style={{
              backgroundImage: `url("${menu2ImgUrl}")`,
            }}
            onClick={this.showIconList}
            href="#" />
          <IconList isShow={isShow} />
        </div>
        <div className="heading">
          <h2>howell</h2>
        </div>
      </div>
    );
  }
}

export default Home;
