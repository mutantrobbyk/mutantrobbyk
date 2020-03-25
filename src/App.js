import React from "react";
import { connect } from "react-redux";
import { getPokemon } from './redux/pokeReducer'
import axios from 'axios'
import "./App.css";

function App(props) {
  console.log(props);
  const getSomePokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {

      return props.getPokemon(res.data.results)
      
  })
  }
  return (
    <div className="App">
      <h1>Hello Pokemon</h1>
      <button onClick={getSomePokemon}>Get Pokemon</button>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapStateToProps, {getPokemon})(App);
