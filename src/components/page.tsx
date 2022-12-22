import * as React from 'react';
import Footer from './footer';
import '@fontsource/open-sans';

import './page.sass';

interface PageProps {
  children?: React.ReactNode
}

const Layout = ({children}: PageProps) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
