import React, { Fragment } from 'react';
import './Card.css';

const Card = ({ name, id, types }) => {
	// destructuring but we can put below in parameter above instead of props
	return (
		<Fragment>
			<div className='bg-white br3 tc dib pa2 ma2 grow shadow-5 ba bw1 b--black'>
				
				<div>
					<img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} className='cardImg' alt={name}/>
					<h4 className='f4'>{name}</h4>
					<p> Id: {id}</p>
					<ul>
						{types.map(type => {
							return <li 
							className={type}
							key={type}>
								{type}
							</li>
						})}
					</ul>
				</div>
			</div>
		</Fragment>
	);
}

export default Card;