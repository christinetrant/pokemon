import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import PokemonCard from '../components/PokemonCard';
// import Buttons from '../components/Buttons'
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // url: 'https://pokeapi.co/api/v2/pokemon?limit=151',
      pokemon: [],
      pokemonInfo: [],
      searchfield: '',
      // prevLinkUrl: null,
      // nextLinkUrl: null
      route: 'home',
      isMainPage: true
    }
  }
  // FOR PREV AND NEXT PAGES ON MAIN PAGE - GET PREV AND NEXT FROM POKEMON ALLdATA

  // FOR EACH INDIVIDUAL POKEMON - WANT ADDITIONAL INFO BUT ALSO PREV AND NEXT PAGES - LINK{ID-1} LINK{ID+1}
 
  async getOnePokemon(poke) {
    // we need to fetch the new url to get additional info:
    const infoUrl = poke.url
    const response = await fetch(infoUrl)
    const individualData = await response.json()
    const pokemonStats = {
      name: individualData.name,
      id: individualData.id,
      types: individualData.types.map(type => `${type.type.name}`)
    }
    return pokemonStats;
  }
  
  async getPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const resp = await fetch(url)
    const allData = await resp.json()
    // console.log(allData) 
    // set the links for next and prev buttons
    // this.setState({prevLinkUrl: allData.previous, nextLinkUrl: allData.next})
    // console.log(this.state.prevLinkUrl, this.state.nextLinkUrl)
    // empty array to store pokemon additional details
    let pokemonInfoArray = [];
    // includes name and url to more infomation
    this.setState({ pokemon: allData }, async () => {
      // then need to loop through all links with extra info:
      try {
        pokemonInfoArray = await Promise.all(allData.results.map(async poke => {
          return this.getOnePokemon(poke)
        }))
      } catch (err) {
        console.log('error: ', err)
      }
      this.setState({ pokemonInfo: pokemonInfoArray }) 
      // console.log(pokemonInfoArray)  
    })
  }

  componentDidMount() {
    this.getPokemon()
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  onRouteChange = (route) => {
    if(route === 'home') {
      this.setState({isMainPage: true})
    } else if (route === 'single') {
      this.setState({isMainPage: false})
    }
    this.setState({route: route});
  }

  // Need to fetch urls for prev and next buttons:
  // async prevBtn() {
  //   // if it's null we need to return otherwise:
  //   // we need to fetch the new url to get additional info:
  //   const prevUrl = this.state.prevLinkUrl;
  //   const response = await fetch(prevUrl)
  //   const prevBtnlink = await response.json()
  //   return this.setState({prevLink: prevBtnlink});

  // }

  // async nextBtn() {
    // we need to fetch the new url to get additional info:
    // const nextUrl = this.state.nextLinkUrl;
    // console.log(this.state.nextLinkUrl)
    // const response = await fetch(nextUrl)
    // const nextBtnlink = await response.json()
    // console.log(this.state.prevLinkUrl, this.state.nextLinkUrl)
    // console.log('NEXT!!!')
    // return this.setState({nextLinkUrl: nextBtnlink});
  // }

  render() {
    // instead of calling this.state.searchfield and this.state.robots we can destructure:
    const { pokemonInfo, searchfield } = this.state
    const filteredPokemon = pokemonInfo.filter(creature => {
      return creature.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    { if(!pokemonInfo.length) { 
      return (
        <div className='tc'>
          <img alt="Pokemon" src="https://fontmeme.com/permalink/200614/e133f5ffb61b822577329b6b9de59e5e.png" className="mt3 mb3"/> 
          <br/>
          <h1 className='tc light-green'>Loading</h1>
        </div>
      ) 
    } else {
      if(this.state.route === 'home') {
        return (
          <div className='tc'>
            <img alt="Pokemon" src="https://fontmeme.com/permalink/200614/e133f5ffb61b822577329b6b9de59e5e.png" className="mt3 mb3"/> 
            <br/>
            <SearchBox searchChange = {this.onSearchChange} />

            <Scroll>
              <ErrorBoundary>
                <CardList 
                pokemon={ filteredPokemon } 
                isMainPage={this.state.isMainPage}
                onRouteChange={this.onRouteChange}
              />
              </ErrorBoundary>
            </Scroll>

            {/*<div className='btns'>
            {console.log('prev',  this.state.prevLinkUrl, 'next', this.state.nextLinkUrl)}
              <button className='prevBtn' onClick={this.prevBtn}>Prev Page</button>
              <button 
                          className='nextBtn'
                          onClick={async () => {
                            // console.log(this.state.nextLinkUrl)
              
                            const nextUrl = this.state.nextLinkUrl;
                            // console.log(this.state.nextLinkUrl)
                            const response = await fetch(nextUrl)
                            const nextBtnlink = await response.json()
                            // console.log(this.state.prevLinkUrl, this.state.nextLinkUrl)
                            console.log('NEXT!!!')
                            console.log('irjerijari', )
                            this.setState({url: nextBtnlink});
                            this.getPokemon();
              
              
                          }}>Next Page</button>
            </div>*/}

          </div>
        );
      } else if(this.state.route === 'single') {
        return (
          <div className='tc'>
            {/*<PokemonCard 
              pokemon={ filteredPokemon } 
              isMainPage={this.state.isMainPage}
              onRouteChange={this.onRouteChange}
            />*/}
            <p onClick={() => this.onRouteChange('home')}>Back</p>
            <p>hello</p>
          </div>
        )
      }
    }
  }
  }
}
export default App;