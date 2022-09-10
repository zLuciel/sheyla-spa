import React from 'react'

import {Comentarios, Header,Main,Paquetes,Themes,Vitamina} from "../components"
import { ThemeProvider } from 'styled-components'


const Home = () => {
  return (
    <>
    <ThemeProvider theme={Themes["dark"]}>
      <Header/>
      <Main/>
      <Paquetes/>
      <Vitamina/>
      <Comentarios/>
    </ThemeProvider>
    </>
  )
}

export default Home
