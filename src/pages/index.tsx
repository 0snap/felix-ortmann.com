import * as React from 'react';

import Cv from '../components/cv';
import AboutMe from '../components/profile';
import Biz from '../components/biz';
import Opener from '../components/opener';
import Page from '../components/page';
import Seo from '../components/seo';

import aboutme from '../../content/about-me.yaml';
import cv from '../../content/cv.yaml';
import biz from '../../content/biz.yaml';
import opener from '../../content/opener.yaml';

const IndexPage = () => (
  <Page>
    <Opener opener={opener.opener}/>
    <section className="section mb-6" id="services">
      <Biz tiers={biz.tiers} opener={biz.opener}/>
    </section>
    <section className="section mb-6" id="about_me">
      <AboutMe profile={aboutme.profile} />
    </section>
    <section className="section" id="cv">
      <Cv journey={cv.journey} />
    </section>
  </Page>
);

export const Head = () => <Seo />;

export default IndexPage;
