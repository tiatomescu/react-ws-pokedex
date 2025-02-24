import { useContext, useState } from "react";
import "./App.css";
import Details from "./details";
import {viewContext, App} from "./App";

function Home() {

  const {
    currView, setCurrView
  } = useContext(viewContext)

  return(
  <>
    <h1>
      Retro PokeDex
    </h1>

       <button onClick = { () => {
        setCurrView("details")
        }}>Poke Cards</button>
  </>
  )
};

export default Home;