import * as React from 'react';

import contact from '../../content/contact.yaml';

interface ContentBlockProps {
    title: string;
}

const ContentBlock = ({title}: ContentBlockProps) => (
  <div className="content">
    <h3 className="title">{title}</h3>
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
