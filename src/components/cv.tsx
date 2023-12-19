import * as React from 'react';
import {CvEntryData} from '../types';

import CvEntry from './cv_entry';
import CTA from './cta';

type CvProps = {
  journey: CvEntryData[];
}

const Cv = ({journey}: CvProps) => (
  <div className="container" style={{overflow: 'hidden'}}>
    <h1 className="title has-text-centered is-size-1 my-6">
      My <span className='has-text-primary'>Journey</span>
    </h1>
    {journey &&
      journey.map((cvEntry: CvEntryData, idx: number) => <CvEntry key={idx} entry={cvEntry} />)}
    <div className='container mt-6 pt-6 is-size-5 has-text-centered'>
      <p>Want to work with me?</p>
      <CTA button="Book a time in my calendar!" />
    </div>
  </div>
);

export default Cv;
