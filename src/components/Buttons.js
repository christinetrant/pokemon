import React from 'react'

const Buttons = ({buttons}) => {
	// return props.children
	return (
		<div>
			{/*{props.children}*/}
			<a 
			href='#'
			className='prevBtn' 
			onClick={buttons}>Prev Page</a>
			<a 
			href={buttons.nextLink}
			className='nextBtn' 
			onClick={buttons}>Next Page</a>
		</div>
	)
}

export default Buttons;