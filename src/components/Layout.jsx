import React from 'react';
import Head from 'next/head';

export default function Layout() {
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
      <div className='l-header'>
        <h1>Company Name</h1>
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
