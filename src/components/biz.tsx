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
    <>
      <div className="container pt-6">
        <h1 className="title is-1 has-text-centered">
      Cloud Engineering like it's {new Date().getFullYear()}
        </h1>
        <div className='content py-6 has-text-centered'>
          <p className='is-size-4'>{opener}</p>
        </div>
      </div>
      <div className='columns is-centered pt-6 is-desktop is-variable is-3-desktop is-8-widescreen'>
        {tiers &&
        tiers.map((tier, idx) => (
          <BizTier key={idx} idx={idx} tier={tier} />
        ))}
      </div>
      <CTA q="Ready to turbocharge your business?" button="Book a free call now" />
    </>
  );
};

export default Biz;
