import { useContext, useState } from "react";
import "./App.css";
import Home from "./home";
import {viewContext, App} from "./App";

function Details() {
  const {
    currView, setCurrView
  } = useContext(viewContext);

  return(
  <>
    <h1>
      Details
    </h1>

    <button onClick = { () => {
        setCurrView("home")
        }}>Home</button>

  </>
  )
};

export default Details;