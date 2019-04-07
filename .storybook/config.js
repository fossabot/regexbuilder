import { configure, addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

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
