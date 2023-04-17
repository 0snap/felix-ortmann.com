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
      <h1 className="title is-1 has-text-centered my-6">
      Cloud Engineering like it's {new Date().getFullYear()}
      </h1>
      <div className='content has-text-centered mb-6'>
        <p className='is-size-4'>{opener}</p>
      </div>
      <div className='columns mt-6 is-variable is-8-widescreen'>
        {tiers &&
        tiers.map((tier, idx) => (
          <BizTier key={idx} idx={idx} tier={tier} />
        ))}
      </div>
      <CTA q="Ready to turbocharge your business?" button="Book a call now" />
    </div>
  );
};

export default Biz;
