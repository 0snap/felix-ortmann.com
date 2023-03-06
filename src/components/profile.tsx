import * as React from 'react';
import ProfileEntry from './profile_entry';

import {ProfileEntryData} from '../types';
import {FaTelegramPlane} from 'react-icons/fa';


interface ProfileProps {
  profile: ProfileEntryData[]
}

const AboutMe = ({profile}: ProfileProps) => {
  return (
    <div className="container">
      <p className="is-size-3 has-text-centered has-title-line my-6">
        About me
      </p>
      {profile &&
        profile.map((entry, idx) => (
          <ProfileEntry key={idx} idx={idx} entry={entry} />
        ))}
      <div className='container is-size-5 has-text-centered'>
        <p className='mt-6'>Want to work with me?</p>
        <button className='button is-primary is-light mt-5' type='submit'>
          <a className='cta has-text-centered' href="mailto:flx.ortmann@gmail.com">
            Shoot me an email! <FaTelegramPlane className="is-size-4" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
