import * as React from 'react';

import {Link} from 'gatsby';
import {TfiBackLeft} from 'react-icons/tfi';

import Seo from '../components/seo';
import Page from '../components/page';

const NotFoundPage = () => (
  <Page>
    <section className="section is-medium bg2">
      <div className="container">
        <div className="content has-text-centered is-size-4 my-6 py-6">
          <h1>Page not found.</h1>
          <Link to="/">
            Go back<TfiBackLeft/>
          </Link>
        </div>
      </div>
    </section>
  </Page>
);

export const Head = () => <Seo title="404 Not found" />;

export default NotFoundPage;
