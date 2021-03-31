import React, {HTMLProps} from 'react';

import './styles/HoverLink.css';

interface Props extends Omit<HTMLProps<HTMLAnchorElement>, 'href'> {
  href: string;
  text: string;
}

const HoverLink = ({href, text, ...anchorElementProps}: Props) => {
  return (
    <a href={href} className="hoverLink" {...anchorElementProps}>
      <span data-content={text}>{text}</span>
    </a>
  );
};

export default HoverLink;
