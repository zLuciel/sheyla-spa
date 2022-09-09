import React from 'react'
import { BtnIcon, BtnInfo, BtnInfoMain } from '../../cssjs/BtnMainInfo'

const InfoMain = ({info,icon}) => {
  return (
    <BtnInfoMain>
        <BtnIcon >{icon}</BtnIcon>
        <BtnInfo ><p>{info}</p></BtnInfo>
    </BtnInfoMain>
  )
}

export default InfoMain
