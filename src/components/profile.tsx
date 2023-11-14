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
      <h1 className="title has-text-centered my-6">
        About me
      </h1>
      {profile &&
        profile.map((entry, idx) => (
          <ProfileEntry key={idx} idx={idx} entry={entry} />
        ))}
      <CTA q="Want to work with me?" button="Let's chat!" />
    </div>
  );
};

export default AboutMe;
