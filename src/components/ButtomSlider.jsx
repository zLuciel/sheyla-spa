import React from 'react'
import { BtnSliderIco } from './cssjs/BtnSlider'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs";
const ButtomSlider = ({skip,back}) => {
  return (
    <>
        <BtnSliderIco onClick={skip}><BsFillArrowLeftCircleFill className='btn-slider'/></BtnSliderIco>
        <BtnSliderIco onClick={back}><BsFillArrowRightCircleFill className='btn-slider'/></BtnSliderIco>
    </>
  )
}

export default ButtomSlider
