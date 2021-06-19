import React from 'react';

const Link = ({ href, children }) => {
  return (
    <a onClick={onClick} href={href}>
      {children}
    </a>
  );
};

export default Link;
