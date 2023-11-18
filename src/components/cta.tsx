import * as React from 'react';

type CTAProps = {
  button: string
}

const CTA = ({button}: CTAProps) => {
  return (
    <a
      className='cta-button'
      href="https://calendly.com/felix-ortmann/meet-with-felix"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{button}</span>
    </a>
  );
};

export default CTA;
