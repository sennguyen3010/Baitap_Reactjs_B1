import React, { Component } from 'react';
import Banner from './Banner';
import Header from './Header';
import Item from './Item';
import Footer from './Footer';



export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Item />
        <Footer />
      </div>
    );
  }
}
