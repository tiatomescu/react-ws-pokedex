import {createContext} from "react";

const DetailsContext = createContext(
  {details: {name: '',img: '', move: [], type: [], height: 0, stats: [], description: ''},
  setDetails: () => {}}
);

export {DetailsContext};