import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonStats = ({ pokemon, onRouteChange }) => {
	return (
		<div>
			
						<PokemonCard 
							// key={pokemon.id} 
							// name={pokemon.name} 
							// // url={pokemon[i].url} 
							// id={pokemon.id}
							// types={pokemon.types}
							// onRouteChange={onRouteChange}
							// abilities={pokemon.abilities}
							// height={pokemon.height}
							// weight={pokemon.weight}
						/>
					
		
	   </div>
	);
}

export default PokemonStats;