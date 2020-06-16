import React from 'react'

const Scroll = (props) => {
	// return props.children
	return (
		<div style={{overflowY: 'scroll', borderTop: '1px solid #96ccff', height: '68vh'}}>
			{props.children}
		</div>
	)
}

export default Scroll;