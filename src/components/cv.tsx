import * as React from 'react';
import {CvEntryData} from '../types';

import CvEntry from './cv_entry';

type CvProps = {
  journey: CvEntryData[];
}

const Cv = ({journey}: CvProps) => (
  <div className="container">
    <h1 className="title is-1 has-text-centered my-6">
      My journey
    </h1>
    {journey &&
      journey.map((cvEntry, idx) => <CvEntry key={idx} entry={cvEntry} />)}
  </div>
);

export default Cv;
