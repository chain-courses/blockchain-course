import * as React from 'react';

const AnchorTag = ({ children: link, ...props }) => {
  if (link && (props.target != "_self")) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    );
  } else if (link) {
    return (
      <a href={props.href} target="_self" rel="noopener noreferrer">
        {link}
      </a>
    );
  } else {
    return null;
  }
};

export default AnchorTag;
