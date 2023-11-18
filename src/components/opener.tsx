import * as React from 'react';
import {OpenerData} from '../types';
import CTA from './cta';

type OpenerProps = {
  opener: OpenerData
}
const Opener = ({opener}: OpenerProps) => {
  const {lead, q, cta, cta2} = opener;
  return <>
    <section className='section opener-background mb-6'>
      <div className='opener-content'>
        <h1 className='title'>
              Hi, I'm <span style={{color: 'red'}}>Felix</span>
        </h1>
        <div className='content pb-6 is-size-5'>
          <p>{lead}</p>
        </div>
        <div className='content mt-6 py-6 is-size-4'>
          <p>{q}</p>
          <CTA button={cta} />
        </div>
        <div className='content pt-6 mt-6 is-size-5'>
          <p>{cta2}</p>
        </div>
      </div>
    </section>
  </>;
};

export default Opener;
