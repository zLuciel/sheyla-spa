import React from 'react'
import { CardFlexStart, CardImg, Cards } from './cssjs/Card'
import { AiFillStar } from "react-icons/ai";
const Card = ({name,foto,comentario}) => {
  return (
    <Cards>
      <CardImg>
        <img src={foto} alt="user" />
      </CardImg>
      <h1>{name}</h1>
      <p>{comentario}</p>
      <CardFlexStart>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
      </CardFlexStart>
    </Cards>
  )
}

export default Card