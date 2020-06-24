import React, { Fragment } from 'react';
import './Card.css';

const Card = ({ name, id, types, onRouteChange, onButtonSubmit }) => {
	// destructuring but we can put below in parameter above instead of props
	return (
		<Fragment>
			<div className='bg-white br3 tc dib pa2 ma2 grow shadow-5 ba bw1 b--black'onClick={onButtonSubmit} id='cardElement'>
				<img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} className='cardImg' alt={name} id={id}/>
				<h4 className='f4'>{name}</h4>
				<p>#{id}</p>
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
		</Fragment>
	);
}

export default Card;