import * as React from 'react';

import {StaticImage} from 'gatsby-plugin-image';

const Cover = () => (
  <section className="hero is-fullheight">
    <StaticImage
      style={{gridArea: '1/1'}}
      alt="Background image clouds"
      src="../../images/clouds.jpg"
      formats={['auto']}
      placeholder="blurred"
      objectFit="cover"
      quality={100}
      transformOptions={{
        fit: 'cover',
        cropFocus: 'attention',
      }}
      blurredOptions={{
        width: 192,
      }}
    />
    <div className="hero-body hero-content" style={{
      // Stack content and Gatsby image by using the same grid area for both
      gridArea: '1/1',
      position: 'relative',
      // Center the other elements inside the hero component
      placeItems: 'center',
      display: 'grid',
    }}>
      <div className="header-box has-text-centered is-size-3-touch is-size-1-desktop">
        <h1 className="header-text">
            Beautiful clouds, huh? <br />
            I'm a cloud engineer.
        </h1>
      </div>
    </div>
    <div className="arrow-down">
      <a aria-label="Landing page" href="#landing">
        <span></span>
      </a>
    </div>
  </section>
);

export default Cover;
