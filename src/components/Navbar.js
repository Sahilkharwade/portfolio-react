import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
  const [active, setActive] = useState('About');
  /*
    here the problem is that when we directly put url as project it show about 
    as here in usestate we use about as default but project is when user goes to project and
    directly from url then this happen so we have to use url for our active state 
    so we use useEffect hooks for that 
  
  */
 useEffect(() => {
   let currentUrl = window.location.href;
   if(currentUrl.endsWith('/'))
    setActive('About')
    else if(currentUrl.endsWith('/project'))
    setActive('Project')
    else if(currentUrl.endsWith('/resume'))
    setActive('Resume')
 }, [active])

  return (
    <div className='navbar'>
      <div className='navbar__active'>{active}</div>
      <div className='navbar__items'>
        {active !== 'About' && (
          <Link to="/">
          <div className='navbar__item' onClick={() => setActive('About')}>
            About
          </div>
          </Link>
          
        )}
        {active !== 'Resume' && (

          <Link to='/resume'>

          
          <div className='navbar__item' onClick={() => setActive('Resume')}>
            Resume
          </div>
          </Link>
        )}

        {active !== 'Project' && (
          <Link to='/project'>
          <div className='navbar__item' onClick={() => setActive('Project')}>
            Project
          </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
