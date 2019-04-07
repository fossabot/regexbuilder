import React from 'react';
import renderer from 'react-test-renderer';

import { Layout } from 'components';

test('should render without crashing', () => {
  const component = renderer.create(<Layout />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
