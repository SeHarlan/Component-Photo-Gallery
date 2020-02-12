import React from "react";
import renderer from "react-test-renderer";
import ImageItem from './ImageItem.js';

import item from './data.js';

test('renders ImageList.js correctly', () => {
  const tree = renderer
    .create(<ImageItem item={item}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
