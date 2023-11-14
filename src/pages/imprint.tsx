import * as React from 'react';

import Page from '../components/page';
import Seo from '../components/seo';

import ContactBlock from '../components/contact_block';

import imprint from '../../content/imprint.yaml';
import {Paragraph} from '../types';

const ImprintPage = () => {
  return (
    <Page>
      <section className="section is-medium bg-white">
        <div className="container">
          <h1 className="title">{imprint.headline}</h1>

          <ContactBlock title={imprint.contact_headline} />

          {imprint.paragraphs.map((p: Paragraph, idx: number) => {
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
