import * as React from 'react';

import contact from '../../content/contact.yaml';

type ContentBlockProps = {
    title: string;
}

const ContentBlock = ({title}: ContentBlockProps) => (
  <div className="content mb-6">
    <h3 className="is-size-3">{title}</h3>
    <p>
      {contact.name}
      <br />
      {contact.street}
      <br />
      {contact.postCode} {contact.city}
      <br />
      {contact.country}
      <br />
      {contact.phone}
      <br />
      <a aria-label="EMail contact" href={'mailto:' + contact.mail}>{contact.mail}</a>
      <br />
      {contact.ustid}
    </p>
  </div>
);

export default ContentBlock;
