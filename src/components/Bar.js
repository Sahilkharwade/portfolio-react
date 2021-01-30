import React from 'react'

function Bar({value:{icon,name,level}}) { // destructuring
    const bar_width = `${level}%`
    return (
        <div className="bar">
            <div className="bar__wrapper " style={{
                'width':bar_width
            }}>
                <span className="bar__name mr-2 ">
                    <img src={icon} alt='icon' className='bar__icon mr-3'/>{name}
                </span>
                {/* <span>{level}</span> */}
            </div>
            
        </div>
    )
}

export default Bar
