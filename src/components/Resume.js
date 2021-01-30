import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import Bar from './Bar'
const languages = [
    {
        icon: python,
        name: 'Python',
        level: '45'
    },
    {
        icon: react,
        name: 'Java',
        level: '60'
    },
    {
        icon: react,
        name: 'HTML',
        level: '80'
    },
    {
        icon: react,
        name: 'react',
        level: '60'
    },
    {
        icon: react,
        name: 'Django',
        level: '80'
    },
    {
        icon: react,
        name: 'Bootstrap',
        level: '80'
    }
]

const tools = [
    {
        icon: react,
        name: 'Figma',
        level: '85'
    },
    {
        icon: react,
        name: 'Photoshop',
        level: '45'
    },
    {
        icon: react,
        name: 'Illustrator',
        level: '60'
    },
    {
        icon: react,
        name: 'Framer',
        level: '45'
    },

]


function Resume() {
  return (
    <div className='container resume'>
      <div className='row'>
        <div className='col-lg-6 resume-card'>
          <h4 className='resume-card__heading'>Education</h4>

          <div className='resume-card__body'>
            <h5 className='resume-card__title'>computer science</h5>
            <p className='resume-card__name'>Academy of technology</p>
            <p className='resume-card__details'>
              this is government college of engineering.
            </p>
          </div>
        </div>
        <div className='col-lg-6 resume-card'>
          <h4 className='resume-card__heading'>React developer</h4>

          <div className='resume-card__body'>
            <h5 className='resume-card__title'>React.js</h5>
            <p className='resume-card__name'>Backbencher coder</p>
            <p className='resume-card__details'>
              this is what i create using react.js
            </p>
          </div>
        </div>
      </div>

      <div className='row'>
          <div className='col-lg-6 resume-languages'>
                <h5 className='resume-languages__heading'>
                    language and frameworks
                </h5>
                <div className='resume-languages__body mt-3'>
                    {
                        languages.map(language =>
                            <Bar value={language}/>
                        )
                    }
                </div>

          </div>
          <div className='col-lg-6 resume-languages'>
                <h5 className='resume-languages__heading'>
                    Tools and softwares
                </h5>
                <div className='resume-languages__body mt-3'>
                    {
                        tools.map(tool =>
                            <Bar value={tool}/>
                        )
                        
                    }
                </div>

          </div>
      </div>
    </div>
  );
}

export default Resume;
