import React from 'react';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import pin from '../assets/icons/pin.svg';
import tie from '../assets/icons/tie.svg';
import mightycoder from '../assets/mighty-coder.svg';
import resume from '../assets/resume.pdf';

function Sidebar() {
  return (
    <div className='sidebar'>
      <img src={mightycoder} alt='' className='sidebar__avatar' />
      <div className='sidebar__name'>
        Sahil <span>Kharwade</span>
      </div>
      <div className='sidebar__item sidebar__title'>Algorithms lover</div>
      <a href='#'>
        <div className='sidebar__item'>
          <img src={tie} alt='' className='sidebar__icon' /> Download Resume
        </div>
      </a>
      <div className='sidebar__social-icons'>
        <a href=''>
          <img src={facebook} alt='facebook' className='sidebar__icon' />
        </a>
        <a href=''>
          <img src={instagram} alt='instagram' className='sidebar__icon' />
        </a>
      </div>

      <div className='contact'>
        <div className='sidebar__item'>
          <a href=''>
            <img src={github} alt='github' className='sidebar__icon' />
          </a>
        </div>
        <div className='sidebar__location'>
          <img src={pin} alt='location' className='sidebar__icon' />
          Wardha,Maharashta,India
        </div>
        <div className='sidebar__item'>skharwade.smk@gmail.com</div>
        <div className='sidebar__item'>9763595674</div>
      </div>
      <div className='sidebar__item sidebar__email'>Email me</div>
    </div>
  );
}

export default Sidebar;
