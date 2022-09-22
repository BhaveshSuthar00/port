import React from 'react'

export const Single = ({ icon, name}) => {
  return (
    <div data-aos="flip-down">
        {icon}
        <h5 style={{marginTop: 10}}>{name}</h5>
    </div>
  )
}
