import React from 'react';
import PokemonStats from './PokemonStats';

const PokemonCard = ({ pokemon, onRouteChange }) => {
	return (
		<div>
			<PokemonStats 
				key={pokemon.user.id} 
				name={pokemon.user.name} 
				// url={pokemon[i].url} 
				id={pokemon.user.id}
				types={pokemon.user.types}
				onRouteChange={onRouteChange}
			/>
	  </div>
	);
}

export default PokemonCard;