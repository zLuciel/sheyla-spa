import {useState} from 'react'
import {Comentarios, Header,Main,Paquetes,Themes,Vitamina} from "../components"
import { ThemeProvider } from 'styled-components'

const Home = () => {
  const [theme,setTheme] = useState("light")
  return (
    <>
    <ThemeProvider theme={Themes[theme]}>
      <Header theme={theme} setTheme={setTheme} />
      <Main/>
      <Paquetes/>
      <Vitamina/>
      <Comentarios/>
    </ThemeProvider>
    </>
  )
}

export default Home
