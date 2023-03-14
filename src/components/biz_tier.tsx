import * as React from 'react';
import {BizTierData} from '../types';

// import a bunch of icons (languages & tools I've worked with) and put them in a lookup table by name
import {SiKubernetes} from 'react-icons/si';
import {AiFillCode} from 'react-icons/ai';
import {HiOutlineRocketLaunch} from 'react-icons/hi2';
import {CiServer} from 'react-icons/ci';
import {MdOutlineInsights} from 'react-icons/md';
import {TbZoomQuestion} from 'react-icons/tb';
import {IconContext} from 'react-icons'; // icon styling

// these keys are used in the data.yaml
const lookup = new Map<string, JSX.Element>([
  ['no-insights', <TbZoomQuestion title="No insights" />],
  ['code', <AiFillCode title="Code" />],
  ['insights', <MdOutlineInsights title="Insights" />],
  ['kubernetes', <SiKubernetes title="Kubernetes" />],
  ['rocket', <HiOutlineRocketLaunch title="Rocket" />],
  ['server', <CiServer title="On-Premise" />],
]);

type BizTierProps = {
  idx: number;
  tier: BizTierData;
}

const BizTier = ({idx, tier}: BizTierProps) => {
  return (
    <div className="column biz-tier" key={idx}>
      <div className='box content has-text-centered p-6' style={{height: '100%'}}>
        <IconContext.Provider value={{className: 'biz-icon'}}>
          {lookup.get(tier.icon)}
        </IconContext.Provider>
        <h3 className='mb-6'>{tier.header}</h3>
        <p className='mb-5 has-text-primary'>{tier.catcher}</p>
        <p >{tier.text}</p>
      </div>
    </div>
  );
};

export default BizTier;
