import React from 'react';
import Card from './Card';

const CardList = ({ pokemon, onRouteChange }) => {
	return (
		<div>
			{
				pokemon.map((user, i) => {
					// console.log('user', user)
					return (
						<Card 
							key={user.id} 
							name={user.name} 
							// url={pokemon[i].url} 
							id={user.id}
							types={user.types}
							onRouteChange={onRouteChange}
						/>
					)
				})
			}
	   </div>
	);
}

export default CardList;