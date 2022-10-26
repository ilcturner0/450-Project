
import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try{
      const url =`https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url)
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      console.log(res)
    }catch(e){
      console.log(e)
    }

  };

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleChange} placeholder="Search Pokémon"
          />
        </label>
      </form>
      {pokemonData.map((data) => {
        return(
          <div className="container">
            <img src={data.sprites["front_default"]}/>
            <div className="table">
              <div className= "tableBody">
              <div className= "tableRow">
              <div className= "tableCell">Type</div>
              <div className= "tableCell">{pokemonType}</div>
              </div>
              <div className= "tableRow">
              <div className= "tableCell">Height</div>
              <div className= "tableCell">{" "}{Math.round(data.height * 3.9)} " </div>
              </div>
              <div className= "tableRow">
              <div className= "tableCell">Weight</div>
              <div className= "tableCell">{" "} {Math.round(data.weight / 4.3)} lbs</div>
              </div>
              <div className= "tableRow">
              <div className= "tableCell">Dex number</div>
              <div className= "tableCell">{data.id}</div>
              </div>
            </div>
            </div>
          </div>
          /*Experiment
          <div className= "statsContainer">
            <div className= "statsTable">
            <div className= "statRow">
            <div className= "statCell">Stats</div>
            <div className= "stat">{}</div>

          */
        )
      })}
    </div>
  );
};

export default App;
