import * as React from 'react';
import {OpenerData} from '../types';
import {StaticImage} from 'gatsby-plugin-image';
import Rocket from './rocket';

type OpenerProps = {
  opener: OpenerData
}

const Opener = ({opener}: OpenerProps) => {
  const {title, subtitle, text, lead} = opener;
  return <>
    <section className='section bg opener'>
      <div className='columns is-vcentered opener-content'>
        <div className='column is-3'>
          <h1 className='title'>
            <span style={{display: 'block'}}>
              Cloud Engineering
            </span>
            <span style={{marginTop: '1rem', display: 'block'}}>
              like it's <span style={{color: 'red'}}>{new Date().getFullYear()}</span>
            </span>
          </h1>
          <Rocket size='10vw' className='opener-rocket'/>
        </div>
        <div className='column is-8 is-offset-1'>
          <StaticImage
            alt="Felix Ortmann profile picture"
            src="../../images/raw-1.jpg"
            layout='constrained' // https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#layout
            formats={['auto']} // webp, jpg, ...
            placeholder="blurred"
            objectFit="contain" // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
            quality={100}
            transformOptions={{
              fit: 'inside', // https://sharp.pixelplumbing.com/api-resize#resize
              cropFocus: 'attention',
            }}
            blurredOptions={{
              width: 192,
            }}
          />
        </div>
      </div>
      <div className='container py-6'>
        <p className='is-size-4'>{subtitle}</p>
      </div>
      <div className='container'>
        <p>{lead}</p>
      </div>
    </section>
  </>;
};


export default Opener;
