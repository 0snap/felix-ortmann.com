import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import {TypeAnimation} from 'react-type-animation';

const Cover = () => (
  <section className="hero is-fullheight" style={{display: 'grid'}}>
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
          <TypeAnimation
            sequence={[
              'Hello! I\'m Felix',
              2000,
              'Hello! I\'m a Cloud Engineer',
              2000,
              'Hello! I love systems design',
              2000,
            ]}
            cursor={true}
            speed={30} // 1-99, default 40
            deletionSpeed={20} // 1-99, default 40
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </h1>
      </div>
    </div>
    <div className="arrow-down">
      <a aria-label="Read more about Felix Ortmann" href="#about_me">
        <span></span>
      </a>
    </div>
  </section>
);

export default Cover;
