import React from 'react'

import {Header,Main,Paquetes,Themes,Vitamina} from "../components"
import { ThemeProvider } from 'styled-components'


const Home = () => {
  return (
    <>
    <ThemeProvider theme={Themes["dark"]}>
      <Header/>
      <Main/>
      <Paquetes/>
      <Vitamina/>
    </ThemeProvider>
    </>
  )
}

export default Home
