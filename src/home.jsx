import { useContext, useState, useEffect } from "react";
import "./App.css";
import Details from "./details";
import {viewContext, App} from "./App";

function Home() {
  const {currView, setCurrView} = useContext(viewContext);
  const [pokeList, setPokeList] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=60&offset=0';
  useEffect(() => {
    fetch(url) //name: balbasaurus, url: ...pokemon/1/
    .then(response => response.json())
    .then(data => {
      setPokeList(data.results) //array of 60 objects //{name:..., url:...}
    })
    .catch(err => `You have an error! Message: ${err}`)
  }, [])
  return(
  <>
    <h1>
      Retro PokeDex
    </h1>
    <div className = "image-group">
      {pokeList.map(pokemon => <DisplayPokeData key={pokemon.name} pokeData={pokemon}/>)}
    </div>
    <button onClick = {() => {setCurrView("details")}}>
      Poke Cards
    </button>
  </>
  )
};

function DisplayPokeData({pokeData}){
  const [pokeImg, setPokeImg] = useState('');
  const {currView, setCurrView} = useContext(viewContext);

  useEffect(() => {
    fetch(pokeData.url)
    .then(res => res.json())
    .then(data => {
      setPokeImg(data.sprites.front_default)
      //capture and send that data
    })
  }, [pokeData.url])

  return (
    <>
      <div className='poke-card'>
        <img onClick = {() => {
          setCurrView("details")
          //setDetails(details)
          //function that captures details to send to details page
        }} src={pokeImg}/>
        <h3>{pokeData.name}</h3>
        </div>
    </>
  )
}

export default Home;