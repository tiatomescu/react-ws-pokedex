import { useContext, useState } from "react";
import "./App.css";
import {DisplayPokeData} from "./home";
import {viewContext, App} from "./App";
import {DetailsContext} from "./detailsContext";

function Details() {
  const {currView, setCurrView} = useContext(viewContext);
  const {details, setDetails} = useContext(DetailsContext);
  console.log(details);
  return(
  <>
    <h1>
      Retro PokeDex
    </h1>
    <button onClick = { () => {setCurrView("home")}}>Go Back to List</button>

    <h3>{details.name}</h3>
    <img src={details.pokeImg} alt={details.pokeImg}/>
    <div>
      <p>{details.description}</p>
      <p>Types: {details.type.join(' ')}</p>
      <p>Height: {details.height}</p>
      <p>Base Stats: {details.stats.join(' ')}</p>
    </div>
    <div>
      <p>Moves</p>
      <ul>
        {details.move.map((move, index) => {
          return <li key={index}>{move}</li>
        })}
      </ul>
    </div>
  </>
  )
};

export {Details};