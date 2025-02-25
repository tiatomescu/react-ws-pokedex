import { createContext, useState } from "react";
import "./App.css";
import {Home} from "./home";
import {Details} from "./details";
import {DetailsContext} from "./detailsContext";

const viewContext = createContext(null);

function App() {
  const [currView, setCurrView] = useState("home");
  const [details, setDetails] = useState({});
  let view = currView == "home" ? <Home /> : <Details />;

  return(
    <viewContext.Provider value= {{currView, setCurrView}}>
      <DetailsContext.Provider value={{details, setDetails}}>
        {view}
      </DetailsContext.Provider>
    </viewContext.Provider>
  )
}

export {viewContext, App};