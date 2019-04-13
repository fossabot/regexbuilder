import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from 'components';

test('Link should changes the class when hovered and no href is supplied', () => {
  const component = renderer.create(<Link>Test</Link>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Link should changes the class when hovered and if a href is supplied', () => {
  const ref = 'https://youtube.com';
  const component = renderer.create(<Link href={ref}>Test</Link>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should set href to "#" if no href is set', () => {
  const component = renderer.create(<Link>Test</Link>);
  expect(component.root.props.href).toBe('#');
});

test('should set href to supplied href', () => {
  const ref = 'https://youtube.com';
  const component = renderer.create(<Link href={ref}>Test</Link>);
  expect(component.root.props.href).toBe(ref);
});
