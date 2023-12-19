import * as React from 'react';

import {IconContext} from 'react-icons'; // icon styling
import {CvEntryData} from '../types';
import {InView} from 'react-intersection-observer';
import {iconLookup} from './icons';


type CvEntryProps = {
  entry: CvEntryData;
}

type IconColProps = {
  icons: string[];
  inView: boolean;
}

const CvEntryIconCol = ({icons, inView}: IconColProps) => (
  <div className="cv-icon-column column is-one-fifths">
    <div className={`cv-icon-box ${inView ? 'cv-icon-box-visible' : ''}`}>
      {icons.map((icon: string, idx: number) => (
        <div key={idx} className='cv-icon-container'>
          <IconContext.Provider value={{className: 'cv-icon'}}>
            {iconLookup(icon)}
          </IconContext.Provider>
          <p className="is-hidden-tablet is-hidden-mobile">{iconLookup(icon)?.props.title}</p>
        </div>
      ))}
    </div>
  </div>
);

const CvEntry = ({entry}: CvEntryProps) => {
  const icons = entry.icons.sort();
  return (
    <InView>
      {({inView, ref}) => (
        <div ref={ref} className="columns is-variable is-0-mobile">
          <CvEntryIconCol icons={icons} inView={inView} />
          <div className="column is-four-fifths">
            <div className={`content box cv-entry ${inView ? 'cv-entry-visible' : ''}`} >
              <p className="is-size-4 my-3">
                <a href={entry.link} target="_blank" rel="noopener noreferrer">
                  {entry.company}
                </a>
              </p>
              <p className="is-size-5">{entry.jobTitle}</p>
              <p dangerouslySetInnerHTML={{__html: entry.duration}} />
              <ul className="mb-4">
                {entry.description.map((paragraph: string, idx: number) => (
                  <li key={idx} dangerouslySetInnerHTML={{__html: paragraph}} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
};

export default CvEntry;
