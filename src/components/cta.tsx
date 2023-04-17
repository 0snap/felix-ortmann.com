import * as React from 'react';

type CTAProps = {
  q: string
  button: string
}

const CTA = ({q, button}: CTAProps) => {
  return (
    <div className='cta container is-size-5 has-text-centered'>
      <p>{q}</p>
      <a
        className='cta-button'
        href="https://calendly.com/felix-ortmann/meet-with-felix"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{button}</span>
      </a>
    </div>
  );
};

export default CTA;
