
import { useEffect, useState, React, Component } from 'react';
import axios from "axios";
import './App.css';
import { render } from '@testing-library/react';

function App() {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  let [pokemonAbilities, setPokemonAbilities] = useState("");
  let [pokemonStats, setPokemonStats] = useState([]);
  let [color1, setColor] = useState('');

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url)
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      if (res.data.types.length > 1) {
        setPokemonType(res.data.types[0].type.name + "/" + res.data.types[1].type.name);
      }
      let i = 0;
      pokemonAbilities = "";
      for (i = 0; i < res.data.abilities.length - 1; i++) {
        pokemonAbilities += (res.data.abilities[i].ability.name + ", ");
      }
      pokemonAbilities += (res.data.abilities[i].ability.name);
      setPokemonAbilities(pokemonAbilities);
      pokemonAbilities = "";


      //i=0;
      for (i = 0; i < res.data.stats.length - 1; i++) {
        pokemonStats.push(res.data.stats[i].stat);
      }
      pokemonStats.push(res.data.stats[i].stat);
      setPokemonStats(pokemonStats);
      pokemonStats = null;

      let type1 = res.data.types[0].type.name + "";
      let color1 = '';
      switch (type1) {
        case "psychic":
          color1 = '#FF00FF'
          setColor(color1);
          break;
        case "dark":
          color1 = '#36454F'
          setColor(color1);
          break;
        case "steel":
          color1 = '#C0C0C0'
          setColor(color1);
          break;
        case "fighting":
          color1 = '#800000'
          setColor(color1);
          break;
        case "electric":
          color1 = '#FFFF00'
          setColor(color1);
          break;
        case "poison":
          color1 = '#A020F0'
          setColor(color1);
          break;
        case "ground":
          color1 = '#C4A484'
          setColor(color1);
          break;
        case "flying":
          color1 = '#87CEEB'
          setColor(color1);
          break;
        case "fairy":
          color1 = '#FFB6C1'
          setColor(color1);
          break;
        case "normal":
          color1 = '#023020'
          setColor(color1);
          break;
        case "bug":
          color1 = '#9ACD32'
          setColor(color1);
          break;
        case "water":
          color1 = '#0000FF'
          setColor(color1);
          break;
        case "ice":
          color1 = '#ADD8E6'
          setColor(color1);
          break;
        case "fire":
          color1 = '#e25822'
          setColor(color1);
          break;
        case "ghost":
          color1 = '#301934'
          setColor(color1);
          break;
        case "rock":
          color1 = '#964B00'
          setColor(color1);
          break;
        case "dragon":
          color1 = '#00008B'
          setColor(color1);
          break;
      }
      setPokemonData(toArray);
      console.log(res)
    } catch (e) {
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
        return (
          <>

            <div className="container" style={{ backgroundColor: color1 }}>
              <img src={data.sprites["front_default"]} />
              <div className="table">
                <div className="tableBody">
                  <div className="tableRow">
                    <div className="tableCell">Type</div>
                    <div className="tableCell">{pokemonType}</div>
                  </div>
                  <div className="tableRow">
                    <div className="tableCell">Height</div>
                    <div className="tableCell">{" "}{Math.round(data.height * 3.9)}  </div>
                  </div>
                  <div className="tableRow">
                    <div className="tableCell">Weight</div>
                    <div className="tableCell">{" "} {Math.round(data.weight / 4.3)} lbs</div>
                  </div>
                  <div className="tableRow">
                    <div className="tableCell">Dex number</div>
                    <div className="tableCell">{data.id}</div>
                  </div>
                  <div className="tableRow">
                    <div className="tableCell">Abilities</div>
                    <div className="tableCell">{pokemonAbilities}</div>
                  </div>
                </div>
              </div>
              <div className="table2">
                <div className="tableBody">
                  <div className="tableRow">
                    <div className="tableCell">Base HP</div>
                    <div className="tableCell">{data.stats[0].base_stat}</div>
                  </div>
                  <div className="tableRow">
                    <div className="tableCell">Base Attack</div>
                    <div className="tableCell">{data.stats[1].base_stat}</div>
                  </div>
                  <div className="tableRow">
                    <div className="tableCell">Base Defense</div>
                    <div className="tableCell">{data.stats[2].base_stat}</div>
                  </div>
                  <div className="tableRow">
                    <div className="tableCell">Base Special Attack</div>
                    <div className="tableCell">{data.stats[3].base_stat}</div>
                  </div>
                  <div className="tableRow">
                    <div className="tableCell">Base Special Defense</div>
                    <div className="tableCell">{data.stats[4].base_stat}</div>
                  </div>
                  <div className="tableRow">
                    <div className="tableCell">Base Speed</div>
                    <div className="tableCell">{data.stats[5].base_stat}</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </div>
  );
};

export default App;
