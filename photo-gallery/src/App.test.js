import React from "react";
import renderer from "react-test-renderer";

import App from "./App.js";
test('renders App.js correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


import Header from './Header.js';
test('renders Header.js correctly', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import ImageList from './ImageList.js';
test('renders ImageList.js correctly', () => {
  const tree = renderer
    .create(<ImageList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import ImageItem from './ImageItem.js';
test('renders ImageList.js correctly', () => {
  const tree = renderer
    .create(<ImageItem />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

