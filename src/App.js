
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import { Header } from "./components/header/Header";
import Home from "./Routes/Home";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>} >
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Navigate replace to="/"/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
