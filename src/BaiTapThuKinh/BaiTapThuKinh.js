import React, { Component } from 'react';
import './BaiTapThuKinh.css';
import GlassesList from './GlassesList';

const dataJson = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
];

export default class BaiTapThuKinh extends Component {
    state = {
        srcModel: './glassesImage/v1.png'
    }
    viewDetail = (item) => {
        this.setState({
            srcModel: item.url
        });
    }
  render() {
    return (
      <div className='wrapper'>
          <h3>Bài tập thử kính</h3>
          <div className="container">
              <div className="row">
                  <div className="col-8">
                        <GlassesList dataJson={dataJson} viewDetail={this.viewDetail}/>
                  </div>
                  <div className="col-4">
                      <div className="model-wrapper text-center">
                          <img src="./glassesImage/model.jpg" alt=""className='w-100' />
                          <img src={this.state.srcModel} alt="" className='model-glass'/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
