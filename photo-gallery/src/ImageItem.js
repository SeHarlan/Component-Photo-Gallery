import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        return <div className='item'>
            <em>category: {this.props.item.keyword}</em>
            <h2>{this.props.item.title}</h2>
            <img src={this.props.item.url} alt={this.props.item.description}/>
            <p>horns: {this.props.item.horns}</p>
        </div>
    }
}