import React from 'react';
// import Card from './Card';
// import PokemonStats from './PokemonStats';

const PokemonCard = ({ pokemon, name, onRouteChange, isMainPage }) => {
	return (
			<div className='bg-white br3 tc dib pa2 ma2 grow shadow-5 ba bw1 b--black'>
				<div>
				<p>Hello</p>
				
					{/*<img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} className='cardImg' alt={pokemon.name}/>
										<h4 className='f4'>{pokemon.name}</h4>
										<p>#{pokemon.id}</p>
					
										<p>Weight: {pokemon.weight}</p>
										<p>Height: {pokemon.height}</p>
										<ul>
											{pokemon.abilities.map(type => {
												return <li 
												className={type}
												key={type}>
													{type}
												</li>
											})}
										</ul>*/}
				</div>
			</div>
	);
}

export default PokemonCard;