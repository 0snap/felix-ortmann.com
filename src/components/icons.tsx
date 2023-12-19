import * as React from 'react';


// import a bunch of icons (languages & tools I've worked with) and put them in a lookup table by name
import {SiKubernetes} from 'react-icons/si';
import {AiFillCode} from 'react-icons/ai';
import {HiOutlineRocketLaunch} from 'react-icons/hi2';
import {CiServer} from 'react-icons/ci';
import {MdOutlineInsights} from 'react-icons/md';
import {TbZoomQuestion} from 'react-icons/tb';
import {FaGraduationCap} from 'react-icons/fa6';
import {GiProcessor} from 'react-icons/gi';
import {AiOutlineSecurityScan} from 'react-icons/ai';
import {AiOutlineCloudServer} from 'react-icons/ai';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';


// these keys are used in the data.yaml
export const iconLookup = (icon: string, color?: string, size?: string, style?: React.CSSProperties): JSX.Element | undefined => {
  const lookup = new Map<string, JSX.Element>([
    ['no-insights', <TbZoomQuestion title="No insights" color={color} size={size} style={style} />],
    ['code', <AiFillCode title="Code" color={color} size={size} style={style} />],
    ['insights', <MdOutlineInsights title="Insights" color={color} size={size} style={style} />],
    ['kubernetes', <SiKubernetes title="Kubernetes" color={color} size={size} style={style} />],
    ['rocket', <HiOutlineRocketLaunch title="Rocket" color={color} size={size} style={style} />],
    ['server', <CiServer title="On-Premise" color={color} size={size} style={style} />],
    ['graduation-cap', <FaGraduationCap title="University Graduation" color={color} size={size} style={style} />],
    ['concurrency', <GiProcessor title="Concurrency" color={color} size={size} style={style} />],
    ['security', <AiOutlineSecurityScan title="Security" color={color} size={size} style={style} />],
    ['cloud', <AiOutlineCloudServer title="Cloud" color={color} size={size} style={style} />],
    ['checkmark', <IoMdCheckmarkCircleOutline title="Checkmark" color={color} size={size} style={style} />],
  ]);
  return lookup.get(icon);
};

