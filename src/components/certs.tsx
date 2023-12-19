import * as React from 'react';
import ScwBadge from '../../images/scw_cert_badge.svg';


const Certs = () => {
  return <>
    <section className='section teaser mb-6' id='services'>
      <div className='columns is-mobile is-vcentered' style={{maxWidth: '1280px', margin: 'auto'}}>
        <div className='column is-hidden-mobile'>
          <h3 className='is-size-3'>
          Certified by <a href="https://scaleway.com" target="_blank" rel="noopener noreferrer">
            Scaleway
            </a>
          , Europe's empowering cloud provider
          </h3>
        </div>
        <div className='column'>
          <a href="https://scaleway.360learning.com/api/certification/5330443733204762" target="_blank" rel="noopener noreferrer">
            <ScwBadge className='cert-badge' />
          </a>
        </div>
      </div>
    </section>
  </>;
};

export default Certs;
