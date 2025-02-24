import { createContext, useState } from "react";
import "./App.css";
import Home from "./home";
import Details from "./details";

const viewContext = createContext(null);

function App() {
  const [currView, setCurrView] = useState("home");

  let view = currView == "home" ? <Home /> : <Details />;

  return(
    <viewContext.Provider value= {{currView, setCurrView}}>
      {view}
    </viewContext.Provider>
  )
}

export {viewContext, App};