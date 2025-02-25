import { useContext, useState, useEffect } from "react";
import "./App.css";
import {Details} from "./details";
import {viewContext, App} from "./App";
import {DetailsContext} from "./detailsContext";


function Home() {
  const {currView, setCurrView} = useContext(viewContext);
  const [pokeList, setPokeList] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=5&offset=0';
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
  const [pokeMove, setPokeMove] = useState('');
  const [pokeType, setPokeType]= useState('');
  const [pokeHeight, setPokeHeight] = useState('');
  const [pokeBaseStats, setPokeBaseStats] = useState('');
  const [pokeDesc, setPokeDesc] = useState('');
  const {currView, setCurrView} = useContext(viewContext);
  const {details, setDetails} = useContext(DetailsContext);

  useEffect(() => { //display the 60 pokemon
    fetch(pokeData.url)
    .then(res => res.json())
    .then(data => {
      setPokeImg(data.sprites.front_default)
    })

  }, [pokeData.url])

  useEffect(() => {
    fetch(pokeData.url)
    .then(res => res.json())
    .then(data => {
      setPokeMove(data.moves.map(elm => elm.move.name))
      setPokeType(data.types.map(elm => elm.type.name))
      setPokeHeight(data.height)
      setPokeBaseStats(data.stats.map(elm => elm.base_stat + " " + elm.stat.name))
      fetch(data.species.url)
        .then(res => res.json())
        .then(data => {
          setPokeDesc(data.flavor_text_entries[0].flavor_text)
        })
    })
  }, [])

  let pokeName = pokeData.name;

  return (
    <>
      <div className='poke-card'>
        <img onClick = {() => {
          setCurrView("details")//maybe create detailsContext.jsx
          //GetDetails(pokeData.name, pokeImg, pokeMove, pokeType, pokeHeight, pokeBaseStats, pokeDesc)
          setDetails({name: pokeName, img: pokeImg, move: pokeMove, type: pokeType, height: pokeHeight, stats: pokeBaseStats, description: pokeDesc});
        }} src={pokeImg}/>
        <h3>{pokeData.name}</h3>
        </div>
    </>
  )
}

export {DisplayPokeData, Home};


// const MAX_FREE = 3;
// somewhere in the return
//if (something.lenght === MAX_FREE && !isAuthenticated){
// alert("you need to sign in");
// return;
// }