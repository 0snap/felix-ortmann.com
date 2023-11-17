import * as React from 'react';
import {OpenerData} from '../types';
import CTA from './cta';

type OpenerProps = {
  opener: OpenerData
}
const Opener = ({opener}: OpenerProps) => {
  const {lead, q, cta, cta2} = opener;
  return <>
    <section className='section opener-background'>
      <div className='opener-content'>
        <h1 className='title my-6 pt-6'>
              Hi, I'm <span style={{color: 'red'}}>Felix</span>
        </h1>
        <div className='content py-6'>
          <p className='is-size-4'>{lead}</p>
        </div>
        <CTA q={q} button={cta} />
        <div className='content py-6 mt-6'>
          <p className='is-size-4'>{cta2}</p>
        </div>
      </div>
    </section>
  </>;
};

export default Opener;
