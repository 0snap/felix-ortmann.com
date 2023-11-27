import * as React from 'react';
import {OpenerData} from '../types';
import CTA from './cta';
import Landing from '../../images/landing.svg';

type OpenerProps = {
  opener: OpenerData
}
const Opener = ({opener}: OpenerProps) => {
  const {lead, q, cta} = opener;
  return <>
    <section className='section opener'>
      <div className='columns is-desktop opener-content'>
        <div className='column'>
          <h1 className='title'>
              Hi, I'm <span className='has-text-primary'>Felix</span>
          </h1>
          <div className='content is-size-4 is-size-5-touch'>
            <p className='has-text-grey'>{lead}</p>
          </div>
          <div className='content is-size-4 is-size-5-touch'>
            <p>
              {q}
            </p>
            <CTA button={cta} />
          </div>
        </div>
        <div className='column opener-image'>
          <Landing />
        </div>
      </div>
      <div className='content is-hidden-mobile'>
        <div className="arrow-down">
          <a aria-label="Landing page" href="#services">
            <span></span>
          </a>
        </div>
      </div>
    </section>
  </>;
};

export default Opener;
