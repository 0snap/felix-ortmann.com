import * as React from 'react';
import {BizTierData} from '../types';
import {iconLookup} from './icons';


type BizTierProps = {
  tier: BizTierData;
}

const BizTier = ({tier}: BizTierProps) => {
  return (
    <div className="column is-one-quarter-fullhd biz-tier">
      <div className='box content has-text-centered p-6' style={{height: '100%'}}>
        {iconLookup(tier.icon, '#be25ff', '4rem')}
        <h2 className='mb-6 is-size-4'>{tier.header}</h2>
        <p className='mb-5 is-size-5 has-text-primary'>{tier.catcher}</p>
        <p >{tier.text}</p>
      </div>
    </div>
  );
};

export default BizTier;
