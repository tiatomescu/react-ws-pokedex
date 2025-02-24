import { createContext, useState } from "react";
import "./App.css";
import Home from "./home";
import Details from "./details";

const viewContext = createContext(null);
const detailsContext = createContext(null);

function App() {
  const [currView, setCurrView] = useState("home");
  const [pokeDetails, setPokeDetails] = useState({});
  let view = currView == "home" ? <Home /> : <Details />;

  return(
    <viewContext.Provider value= {{currView, setCurrView}}>
      <detailsContext.Provider value={{pokeDetails, setPokeDetails}}>
        {view}
      </detailsContext.Provider>
    </viewContext.Provider>
  )
}

export {viewContext, App};