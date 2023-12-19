import * as React from 'react';

import CTA from './cta';
import AboutMeParagraph from './aboutme_paragraph';
import {AboutMeData} from '../types';
import {iconLookup} from './icons';


type AboutMeProps = {
  aboutMe: AboutMeData
}

const AboutMe = ({aboutMe}: AboutMeProps) => {
  return (
    <section className="section has-text-centered mb-6" id="about_me">
      <div className='container'>

        <h1 className="title">
          About <span className='has-text-primary'>Me</span>
        </h1>
        <div className='content has-text-justified'>
          {aboutMe?.paragraphs &&
        aboutMe.paragraphs.map((entry, idx) => (
          <AboutMeParagraph key={idx} idx={idx} entry={entry} />
        ))}
        </div>

        <div className='divider'>
          <hr/>
        </div>

        {aboutMe?.highlights && (
          <div className='content has-text-justified aboutme-highlights'>
            <h3 className='has-text-weight-bold is-size-4'>{aboutMe.highlights.text}</h3>

            {/* using a column, because styling of list-item bullets did not work nicely */}
            {aboutMe.highlights.bullets && aboutMe.highlights.bullets.map((bullet, idx2) => (
              <div className='columns is-mobile mb-0'>
                <div key={idx2} className='column is-1 has-text-right'>
                  {iconLookup('checkmark', '#be25ff')}
                </div>
                <div className='column is-11'>
                  {bullet}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className='container mt-6 pt-6 is-size-5'>
          <p>If this resonates with your needs, let's chat!</p>
          <CTA button="Let's chat!" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

