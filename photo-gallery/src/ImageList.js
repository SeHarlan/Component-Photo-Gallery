import React, { Component } from 'react';

import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        return <section>
            <p>
                here's the list length {this.props.items.length}
            </p>
            <ImageItem item={this.props.items[0]} />


        </section>
    }
}