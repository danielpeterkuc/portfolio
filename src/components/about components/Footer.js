import React from 'react';
import useOnScreen from '../hooks';

const Footer = () => {
  const [ref,visible] = useOnScreen({threshold: 0.5});

  return (
    <div className={`call-to-action col-12 ${visible ? "fadeIn" : null} `}>
      <p className="h3">Lets be creative together!</p>
      <p>...or have a coffee</p>
      <a href="#">Get in touch!</a>
  </div>
  )
}

export default Footer;