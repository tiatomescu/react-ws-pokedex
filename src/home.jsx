import { useContext, useState, useEffect } from "react";
import "./App.css";
import Details from "./details";
import {viewContext, App} from "./App";

function Home() {
  const {currView, setCurrView} = useContext(viewContext);
  const [pokeList, setPokeList] = useState([]);
  const [pokeImg, setPokeImg] = useState('');
  const [pokeName, setPokeName] = useState([]);
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
      {displayPokeData(pokeList)}
      {console.log('pokeList: ', pokeList, 'pokeImg: ', pokeImg, 'pokeName: ', pokeName)}
    </div>
    <button onClick = { () => {setCurrView("details")}}>
      Poke Cards
    </button>
  </>
  )
};

const displayPokeData = (list) => { //array of 60 objects //{name:..., url:...}
  list.forEach(
    fetch(list.url)
    .then(res => res.json())
    .then(data => {return(
      // <div>
      //   <h1>list.name</h1>
      <img src={data.sprites.front_default}/>
      // <div/>
    )})
  )
}

export default Home;