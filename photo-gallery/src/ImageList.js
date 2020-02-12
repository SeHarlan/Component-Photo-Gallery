import React, { Component } from 'react';

import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        const itemNodes = this.props.items.map(item => <ImageItem item={item} />);
        return <section>
            <p>
                here's the list length {this.props.items.length}
            </p>


            <ul className='list'>
                {itemNodes}
            </ul>
        </section>
    }
}