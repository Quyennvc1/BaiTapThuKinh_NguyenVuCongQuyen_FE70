import React, { Component } from 'react'

export default class GlassesItem extends Component {
  render() {
    let {item} = this.props;
    return <div className='card p-2'>
        <img src={item.url} height={100} alt="" />
        <div className='card-body pb-0'>
            <p className='mb-0'>{item.name}</p>
            <p className='mb-0'>${item.price}</p>
            <button className='btn btn-success' onClick={()=>this.props.viewDetail(item)}>Xem chi tiết</button>
        </div>
      </div>
  }
}
