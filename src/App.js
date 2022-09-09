
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

import Home from "./Routes/Home";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nose" element={"hola"} />
        <Route path="*" element={<Navigate replace to="/"/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
