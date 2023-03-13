import * as React from 'react';
import BizTier from './biz_tier';

import {BizTierData} from '../types';
import CTA from './cta';


type BizProps = {
  opener: string
  tiers: BizTierData[]
}

const Biz = ({tiers, opener}: BizProps) => {
  return (
    <div className="container">
      <p className="is-size-3 has-text-centered has-title-line my-6">
      Cloud Engineering like it's {new Date().getFullYear()}
      </p>
      <div className='content has-text-centered mb-6'>
        <p className='is-size-4'>{opener}</p>
      </div>
      <div className='columns mt-6 is-variable is-8-desktop'>
        {tiers &&
        tiers.map((tier, idx) => (
          <BizTier key={idx} idx={idx} tier={tier} />
        ))}
      </div>
      <CTA q="Ready to turbocharge your business?" button="Book a call now!" />
    </div>
  );
};

export default Biz;
