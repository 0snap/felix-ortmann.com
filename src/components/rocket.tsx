import * as React from 'react';
import {HiOutlineRocketLaunch} from 'react-icons/hi2';

type RocketProps = {
    size: string;
}

// see https://github.com/react-icons/react-icons/issues/251
const Rocket = ({size}: RocketProps) =>
  (<div className='rocket'>
    <svg width="0" height="0">
      <linearGradient id="rocket-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop stopColor="#ee4a22" offset="0%" />
        <stop stopColor="#7a6ded" offset="50%" />
        <stop stopColor="#591885" offset="100%" />
      </linearGradient>
    </svg>
    <HiOutlineRocketLaunch
      size={size}
      title="rocket"
      style={{stroke: 'url(#rocket-gradient)'}}
    />
  </div >);

export default Rocket;
