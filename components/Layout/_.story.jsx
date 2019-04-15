/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { Layout } from 'components';

storiesOf('Components', module)
  .addParameters({ jest: ['Layout'] })
  .add('Layout', () => (
    <Layout>
      <h1>HI</h1>
    </Layout>
  ));
