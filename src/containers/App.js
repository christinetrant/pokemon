import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      pokemonInfo: [],
      searchfield: ''
    }
  }


  async getAllPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=4';
    const resp = await fetch(url)
    const allData = await resp.json()
    let array = [];
    // includes name and url to more infomation
    this.setState({ pokemon: allData.results }, async () => {
      // then need to loop through all links with extra info:
      try {
        array = await Promise.all(allData.results.map(async poke => {
              // console.log(poke.url)
              // we need to fetch the new url to get additional info:
              const infoUrl = poke.url
              const response = await fetch(infoUrl)
              const individualData = await response.json()
              
              // console.log(individualData)
              // array.push([individualData.name, individualData.id])
              return individualData
              
              
              // console.log(array)
              // obj[] = individualData.
              // this.setState({ pokemonInfo: obj })
              
            }))
      } catch (err) {
        console.log('error: ', err)
      }
      this.setState({ pokemonInfo: array })   
      console.log('arr', array)
      
  })
    // arr.forEach(user => console.log('hello', user)) 
}

  componentDidMount() {
    this.getAllPokemon()
    // this.getPokemonDetails()
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    // instead of calling this.state.searchfield and this.state.robots we can destructure:
    const { pokemon, searchfield } = this.state
    const filteredPokemon = pokemon.filter(creature => {
      return creature.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    // if(robots.length === 0) {
    return !pokemon.length ? 
      <h1 className='tc light-green'>Loading</h1> :
      (
        <div className='tc'>
          <img alt="Pokemon" src="https://fontmeme.com/permalink/200614/e133f5ffb61b822577329b6b9de59e5e.png" className="mt3 mb3"/> 
          <br/>
          <SearchBox searchChange = {this.onSearchChange} />

          <Scroll>
            <ErrorBoundary>
              <CardList pokemon={ filteredPokemon } />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}
export default App;