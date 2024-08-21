import * as React from 'react';

import Cv from '../components/cv';
import AboutMe from '../components/aboutme';
import Biz from '../components/biz';
import Opener from '../components/opener';
import Certs from '../components/certs';
import Page from '../components/page';
import Seo from '../components/seo';

import aboutMe from '../../content/about-me.yaml';
import cv from '../../content/cv.yaml';
import biz from '../../content/biz.yaml';
import opener from '../../content/opener.yaml';

const IndexPage = () => {
  return (
    <Page>
      <Opener opener={opener.opener}/>
      <Certs />
      <section className="section mb-6" id="services">
        <Biz tiers={biz.tiers} opener={biz.bizHeadline}/>
      </section>
      <AboutMe aboutMe={aboutMe} />
      <section className="section" id="cv">
        <Cv journey={cv.journey} />
      </section>
    </Page>
  );
};

export const Head = () => <Seo />;

export default IndexPage;
