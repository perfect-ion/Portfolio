import "./App.scss";
import "./custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Linker } from "./myComponents/Linker";
import { MyHome } from "./myComponents/MyHome";
import { ContactMe } from "./myComponents/ContactMe";
import { AboutMe } from "./myComponents/AboutMe";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";


function App() {

  return (
    <>
    <HashRouter>

    <Routes>
          <Route exact path="/" element={<MyHome/>}></Route>
          <Route path="/contact" element={<ContactMe/>}></Route>
          <Route path="/about" element={<AboutMe/>}></Route>
        </Routes>

      <div style={{ position: "absolute", left: "0vw", top: "0vh" }}>
        <Linker />
      </div>

    </HashRouter>
      
    </>
  );
}

export default App;
