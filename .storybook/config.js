import { configure, addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';
import { withA11y } from '@storybook/addon-a11y';

// should only be added once
// best place is in config.js
addDecorator(withA11y);

const req = require.context('../components', true, /_story\.jsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

addDecorator(
  withTests({
    filesExt: '((\\.specs?)|(\\.tests?))?(\\.jsx)?$',
    results,
  })
);
