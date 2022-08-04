import React, { Component } from 'react';
import '../assets/sass/style.scss';

const data = [
  {
    id: 1,
    price: 30,
    name: 'GUCCI G8850U',
    url: './glassesImage/v1.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 2,
    price: 50,
    name: 'GUCCI G8759H',
    url: './glassesImage/v2.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 3,
    price: 30,
    name: 'DIOR D6700HQ',
    url: './glassesImage/v3.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 4,
    price: 70,
    name: 'DIOR D6005U',
    url: './glassesImage/v4.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 5,
    price: 40,
    name: 'PRADA P8750',
    url: './glassesImage/v5.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 6,
    price: 60,
    name: 'PRADA P9700',
    url: './glassesImage/v6.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 7,
    price: 80,
    name: 'FENDI F8750',
    url: './glassesImage/v7.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 8,
    price: 100,
    name: 'FENDI F8500',
    url: './glassesImage/v8.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 9,
    price: 60,
    name: 'FENDI F4300',
    url: './glassesImage/v9.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
];

export default class ThuKinh extends Component {
  state = {
    glasses: {
      id: 9,
      price: 60,
      name: 'FENDI F4300',
      url: './glassesImage/v9.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
  };

  renderGlassesList = () => {
    return data.map((item, index) => {
      return (
        <div className="col-2" key={index}>
          <div className="glasses">
            <img
              src={item.url}
              alt=""
              onClick={() => {
                this.wearGlasses(item);
              }}
            />
          </div>
        </div>
      );
    });
  };

  wearGlasses = (newGlasses) => {
    this.setState({
      glasses: newGlasses,
    });
  };

  render() {
    let { name, price, url, desc } = this.state.glasses;
    return (
      <div className="bg">
        <h3 className="header">TRY GLASSES APP ONLINE</h3>
        <div className="container">
          <div className="model">
            <div className="row justify-content-around">
              <div className="col-4">
                <div className="item">
                  <div className="item-img">
                    <img
                      className="item-img-model"
                      src="glassesImage/model.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="item-img-glasses"
                      src="./glassesImage/v1.png"
                      alt=""
                    />
                  </div>
                  <div className="item-content">
                    <h3>FENDI F4300</h3>
                    <p>
                      Light pink square lenses define these sunglasses, ending
                      with amother of pearl effect tip.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="item">
                  <div className="item-img">
                    <img
                      className="item-img-model"
                      src="glassesImage/model.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img className="item-img-glasses" src={url} alt="" />
                  </div>
                  <div className="item-content">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glasses-list">
            <div className="row gy-4">{this.renderGlassesList()}</div>
          </div>
        </div>
      </div>
    );
  }
}
