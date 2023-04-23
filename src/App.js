import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./nabvar"
import Home from "./home"
import Contact from "./contact"
import Profil from "./profil"
function App() {
  const [name, setname] = useState("kader");
  // const User = (props) => {
  //   return(
  //     <div>
  //       <p>{props.name}</p>
  //       <p>{props.age}</p>
  //     </div>
  //   )
  
  return (
    <div>
      {/* <User name="kader" age={23} /> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home name={name}/>} />
          <Route path="/profil" element={<Profil name={name} setname={setname} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
