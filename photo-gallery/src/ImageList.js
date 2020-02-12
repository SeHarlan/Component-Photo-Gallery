import React, { Component } from 'react';

import ImageItem from './ImageItem.js';
import ItemsArray from './data.js';

export default class ImageList extends Component {
    state = { 
        selected: null,
        horns: null
    };
    render() {
        const itemNodes = ItemsArray
            .filter(item => {
                if (!this.state.selected) return true;
                return item.keyword === this.state.selected;
            })
            .filter(item => {
                if (!this.state.horns) return true;
                return item.horns === this.state.horns;
            })
            .map(item => <ImageItem key={item.title} item={item} />);

        const handleChange = e => {
            this.setState({ selected: e.target.value });
        };
        const handleHorns = e => {
            this.setState({ horns: Number(e.target.value)});
        }
        
        return <section>
            <select className="item-filter" onChange={handleChange}>
                <option value='' defaultValue>See All</option>
                <option value='narwhal'>Narwhal</option>
                <option value='rhino'>Rhino</option>
                <option value='unicorn'>Unicorn</option>
                <option value='unilego'>Unilego</option>
                <option value='triceratops'>triceratops</option>
                <option value='markhor'>Markhor</option>
                <option value='mouflon'>Mouflon</option>
                <option value='addax'>Addax</option>
                <option value='chameleon'>Chameleon</option>
                <option value='dragon'>Dragon</option>
            </select>

            <select className='item-filter' onChange={handleHorns}>
                <option value='' defaultValue>See All</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='100'>100</option>
            </select>

            <ul className='list'>
                {itemNodes}
            </ul>
        </section>
    }
}