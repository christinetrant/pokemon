import React, { Fragment } from 'react';
import './Card.css';

// <img alt='robot' src={`https://robohash.org/${id}/set_set2/?size=200x200`}/>
const Card = ({ name, id }) => {
	// destructuring but we can put below in parameter above instead of props
	return (
		<Fragment>
			<div className='bg-white br3 tc dib pa2 ma2 grow shadow-5 bw2'>
				
				<div>
					{/*<img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} className='cardImg' alt={name}/>*/}
					<h4 className='f4'>{name}</h4>
					
					<p> Id: {id}</p>  
				</div>
			</div>
		</Fragment>
	);
}

export default Card;