/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { Link } from 'components';

storiesOf('Components', module)
  .addParameters({ jest: ['Link'] })
  .add('Link', () => {
    return (
      <Link href='https://google.com' page='https://google.com'>
        Google
      </Link>
    );
  });