import * as React from 'react';
import Footer from './footer';
import '@fontsource/open-sans';

import './page.sass';

type PageProps = {
  children?: React.ReactNode
}

const Layout = ({children}: PageProps) => (
  <div className='page'>
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
