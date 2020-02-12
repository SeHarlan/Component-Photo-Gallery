import React, { Component } from 'react';

import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        return <section>
            <p>
                here's the items list {this.props.items.length}
            </p>


        </section>
    }
}