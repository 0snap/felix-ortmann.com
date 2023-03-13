import * as React from 'react';
import {FaTelegramPlane} from 'react-icons/fa';


type CTAProps = {
  q: string
  button: string
}

const CTA = ({q, button}: CTAProps) => {
  return (
    <div className='container mt-6 is-size-5 has-text-centered'>
      <p className='mt-6'>{q}</p>
      <button className='button is-primary is-light mt-5' type='submit'>
        <a
          className='cta has-text-centered'
          href="https://calendly.com/felix-ortmann/meet-with-felix"
          target="_blank"
          rel="noopener noreferrer"
        >
          {button} <FaTelegramPlane className="is-size-4" />
        </a>
      </button>
    </div>
  );
};

export default CTA;
