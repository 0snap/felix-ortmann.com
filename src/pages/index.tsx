import * as React from 'react';

import Cover from '../components/cover';
import Cv from '../components/cv';
import AboutMe from '../components/profile';
import Biz from '../components/biz';
import Page from '../components/page';
import Seo from '../components/seo';

import aboutme from '../../content/about-me.yaml';
import cv from '../../content/cv.yaml';
import biz from '../../content/biz.yaml';

const IndexPage = () => (
  <Page>
    <Cover />

    <section className="section bg-one" id="landing">
      <Biz tiers={biz.tiers} opener={biz.opener}/>
    </section>
    <section className="section bg-one" id="about_me">
      <AboutMe profile={aboutme.profile} />
    </section>
    <section className="section bg-two" id="cv">
      <Cv journey={cv.journey} />
    </section>
  </Page>
);

export const Head = () => <Seo />;

export default IndexPage;
