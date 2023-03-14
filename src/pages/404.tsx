import * as React from 'react';

import {Link} from 'gatsby';
import {TfiBackLeft} from 'react-icons/tfi';

import Seo from '../components/seo';
import Page from '../components/page';

const NotFoundPage = () => (
  <Page>
    <section className="section bg">
      <div className="container">
        <div className="content has-text-centered is-size-4 mt-6 pt-6">
          <p>Page not found.</p>
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
