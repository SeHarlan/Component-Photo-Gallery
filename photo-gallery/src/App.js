import React from 'react';
import './App.css';

import ItemsArray from './data.js';

import Header from './Header.js';
import ImageList from './ImageList.js';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <ImageList items={ItemsArray}/>
    </div>
  );
}

export default App;
