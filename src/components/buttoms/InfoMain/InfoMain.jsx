import React from 'react'
import "./InfoMain.css"
const InfoMain = ({info,icon}) => {
  return (
    <div className='info-main-container'>
        <div className='icon-btn-main'>{icon}</div>
        <div className='btn-info-main'><p>{info}</p></div>
    </div>
  )
}

export default InfoMain
