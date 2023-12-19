import * as React from 'react';
import {CvEntryData} from '../types';

import CvEntry from './cv_entry';

type CvProps = {
  journey: CvEntryData[];
}

const Cv = ({journey}: CvProps) => (
  <div className="container" style={{overflow: 'hidden'}}>
    <h1 className="title has-text-centered my-6">
      My Journey
    </h1>
    {journey &&
      journey.map((cvEntry: CvEntryData, idx: number) => <CvEntry key={idx} entry={cvEntry} />)}
  </div>
);

export default Cv;
