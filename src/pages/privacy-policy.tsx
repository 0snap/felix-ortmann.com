import * as React from 'react';

import Page from '../components/page';
import Seo from '../components/seo';
import ContactBlock from '../components/contact_block';
import {Paragraph} from '../types';

import pp from '../../content/privacy-policy.yaml';

const PrivacyPolicyPage = () => {
  return (
    <Page>
      <section className="section is-medium">
        <div className="container">
          <h1 className="title is-size-1">{pp.headline}</h1>
          <div className="content mb-6">
            {pp.disclaimer.map((d: string, idx: number) => {
              return <p key={idx} dangerouslySetInnerHTML={{__html: d}}/>;
            })}
          </div>

          <ContactBlock title="Website Operator" />

          {pp.paragraphs.map((p: Paragraph, idx: number) => {
            return (
              <div key={idx} className="content mb-6">
                <h3 className="is-size-3">{p.title}</h3>
                <p dangerouslySetInnerHTML={{__html: p.text}}/>
              </div>);
          })}
        </div>
      </section>
    </Page>
  );
};

export const Head = () => <Seo title={pp.headline} />;

export default PrivacyPolicyPage;
