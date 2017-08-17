import React from 'react';
import {Link} from 'react-router-dom'

const PageNotFoundComponent = () => {
  return (
    <div>
      <span> "404: Page not found" </span>
      <p><Link to="/"> Home </Link></p>
    </div>
  );
};

export default PageNotFoundComponent;