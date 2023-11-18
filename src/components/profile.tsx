import * as React from 'react';
import ProfileEntry from './profile_entry';
import CTA from './cta';

import {ProfileEntryData} from '../types';

type ProfileProps = {
  profile: ProfileEntryData[]
}

const AboutMe = ({profile}: ProfileProps) => {
  return (
    <div className="container">
      <h1 className="title has-text-centered">
        About me
      </h1>
      {profile &&
        profile.map((entry, idx) => (
          <ProfileEntry key={idx} idx={idx} entry={entry} />
        ))}
      <div className='container mt-6 pt-6 is-size-5 has-text-centered'>
        <p>Interested in working with me?</p>
        <CTA button="Let's chat!" />
      </div>
    </div>
  );
};

export default AboutMe;
