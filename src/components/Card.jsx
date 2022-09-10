import React from 'react'
import { CardFlexStart, CardImg, Cards } from './cssjs/Card'

const Card = ({name}) => {
  return (
    <Cards>
      <CardImg>
        <img src="https://scontent.flim18-3.fna.fbcdn.net/v/t39.30808-6/271220772_467008031525825_4450184526317006494_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Zw-lvyJE0g8AX9VohJ7&_nc_ht=scontent.flim18-3.fna&oh=00_AT9j8TK8Qi6lvh4CHnP1o_BCL-zHC_JweRUR_RcJzWi28Q&oe=63214A72" alt="user" />
      </CardImg>
      <h1>{name}</h1>
      <p>El tratamiento que necesitas para un cuerpo sano y salvo con las mejores tecnologias que encontras bueno para la belleza interna</p>
      <CardFlexStart>xd</CardFlexStart>
    </Cards>

  )
}

export default Card
