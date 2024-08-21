import * as React from 'react';
import ScwBadgeFoundations from '../../images/scw_cert_badge.svg';
import ScwBadgeNetworkAssociate from '../../images/scw_cert_badge_network.svg';


const Certs = () => {
  return <>
    <section className='section teaser mb-6' id='services'>
      <div className='columns is-mobile is-vcentered is-centered' style={{maxWidth: '1280px', margin: 'auto'}}>
        <div className='column is-hidden-mobile is-three-fifths '>
          <h3 className='is-size-3'>
          Certified by <a href="https://scaleway.com" target="_blank" rel="noopener noreferrer">
            Scaleway
            </a>
          , Europe's empowering cloud provider
          </h3>
        </div>
        <div className='column is-two-fifths-mobile'>
          <a href="https://scaleway.360learning.com/api/certification/5330443733204762" target="_blank" rel="noopener noreferrer">
            <ScwBadgeFoundations className='cert-badge' />
          </a>
        </div>
        <div className='column is-two-fifths-mobile'>
          <a href="https://scaleway.360learning.com/api/certification/3912943105992750" target="_blank" rel="noopener noreferrer">
            <ScwBadgeNetworkAssociate className='cert-badge' />
          </a>
        </div>
      </div>
    </section>
  </>;
};

export default Certs;
