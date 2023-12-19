import * as React from 'react';
import {AboutMeParagraphData} from '../types';
import {iconLookup} from './icons';

type AboutMeParagraphProps = {
  idx: number;
  entry: AboutMeParagraphData;
}

const AboutMeParagraph = ({idx, entry}: AboutMeParagraphProps) => {
  const iconCol = (
    <div
      className={`column is-one-fifths is-hidden-mobile ${
        idx % 2 === 1 && 'has-text-right'
      }`}
    >
      {iconLookup(entry.icon, entry.color, '4rem', {'transform': 'rotate(' + -20 * (-idx % 2 || 1) + 'deg)'})}
    </div>
  );
  const emptyCol = <div className="column is-one-fifths is-hidden-mobile" />;
  return (
    <div className="columns mb-4 is-vcentered">
      {idx % 2 === 0 && iconCol}
      {idx % 2 === 1 && emptyCol}
      <div
        className="column is-three-fifths content mb-1 has-text-justified"
        key={idx}
        dangerouslySetInnerHTML={{__html: entry.text}}
      />
      {idx % 2 === 1 && iconCol}
      {idx % 2 === 0 && emptyCol}
    </div>
  );
};

export default AboutMeParagraph;
