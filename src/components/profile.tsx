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
      <p className="is-size-3 has-text-centered has-title-line my-6">
        About me
      </p>
      {profile &&
        profile.map((entry, idx) => (
          <ProfileEntry key={idx} idx={idx} entry={entry} />
        ))}
      <CTA q="Want to work with me?" button="Shoot me an email!" />
    </div>
  );
};

export default AboutMe;
