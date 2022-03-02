import React, { Component } from 'react'
import GlassesItem from './GlassesItem';

export default class GlassesList extends Component {
    renderGlassesItem = () => {
        return this.props.dataJson.map((item, index) => {
            return <div className="col-4 mb-3" key={index}>
                <GlassesItem item={item} viewDetail={this.props.viewDetail}/>
            </div>
        });
    }
  render() {
    return (
      <div className="row">
          {this.renderGlassesItem()}
      </div>
    )
  }
}
