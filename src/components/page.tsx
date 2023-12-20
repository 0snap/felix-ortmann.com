import * as React from 'react';
import Footer from './footer';
import '@fontsource/poppins';
import '@fontsource/open-sans';

import './page.sass';

type PageProps = {
  children?: React.ReactNode
}

const Layout = ({children}: PageProps) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
