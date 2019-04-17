import React from 'react';
import Head from 'next/head';
import { Link } from 'components';
import propTypes from 'prop-types';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>NNN</title>
          <link
            rel='icon'
            href='/static/images/favicon.ico'
            type='image/x-icon'
          />
        </Head>
        {this.props.children}
        <div className='l-header'>
          <h1>Company Name</h1>
          <Link href='https://youtube.com' page='https://youtube.com'>
            Youtube
          </Link>
        </div>
        <div className='l-content'>
          <h1>NICE</h1>
        </div>
        <div className='l-footer'>
          <p>Copyright (c) 2014 Company Name</p>
        </div>
      </div>
    );
  }
}
Layout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.element),
    propTypes.element,
  ]),
};
Layout.defaultProps = {
  children: null,
};
