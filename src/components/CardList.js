import React from 'react';
import Card from './Card';

const CardList = ({ pokemon }) => {
	return (
		<div>
			{
				pokemon.map((user, i) => {
					// console.log('user', user)
					return (
						<Card 
							key={user.name} 
							name={user.name} 
							// url={pokemon[i].url} 
							id={user.id}
						/>
					)
				})
			}
	   </div>
	);
}

export default CardList;