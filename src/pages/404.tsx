import * as React from 'react';

import Seo from '../components/seo';
import Page from '../components/page';

const NotFoundPage = () => (
  <Page>
    <section className="section is-medium">
      <div className="container">
        <div className="content has-text-centered">
          <h3 className="title">Not found.</h3>
        </div>
      </div>
    </section>
  </Page>
);

export const Head = () => <Seo title="404 Not found" />;

export default NotFoundPage;
