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
      <div className="container has-text-centered">
        <h1 className="title is-size-1">
          Cloud Engineering like it's <span className='has-text-primary'>{new Date().getFullYear()}</span>
        </h1>
        <div className='content'>
          <p className='is-size-4'>{opener}</p>
        </div>
      </div>
      <div className='columns is-centered pt-6 is-desktop is-variable is-3-desktop is-8-widescreen is-multiline'>
        {tiers &&
          tiers.map((tier: BizTierData, idx: number) => (
            <BizTier key={idx} tier={tier} />
          ))}
      </div>
      <div className='container mt-6 pt-6 is-size-5 has-text-centered'>
        <p>Ready to turbocharge your business?</p>
        <CTA button="Let's chat!" />
      </div>
    </>
  );
};

export default Biz;
