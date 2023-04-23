import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./navbar"
import { createContext } from "react";

export const Context = createContext()

function App() {
  const [signin, setsignin] = useState(false);
  
  return (
    
      <Context.Provider  value ={ [signin, setsignin]}>
            <NavBar />
            <h1>
            {
            signin ? 'yes' : 'no'
            }
          </h1>
      </Context.Provider>
      


     
      
    
  );
}

export default App;
