import * as React from 'react';

import Page from '../components/page';
import Seo from '../components/seo';

import ContactBlock from '../components/contact_block';

import imprint from '../../content/imprint.yaml';

const ImprintPage = () => {
  return (
    <Page>
      <section className="section is-medium bg">
        <div className="container">
          <div className="content">
            <header>
              <h1 className="title is-2">{imprint.headline}</h1>
            </header>
          </div>

          <ContactBlock title={imprint.contact_headline} />

          {imprint.paragraphs.map((p: Paragraph, idx) => {
            return (<div key={idx} className="content">
              <h3 className="title">{p.title}</h3>
              <p>{p.text}</p>
            </div>);
          })}
        </div>
      </section>
    </Page>
  );
};

export const Head = () => <Seo title={imprint.headline} />;

export default ImprintPage;
