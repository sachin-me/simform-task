import React from 'react';
import { Link } from 'react-router-dom';

const Upload = () => {
	return (
		<div className='upload'>
			<Link to='/users'>Users list</Link>
			<Link to='/upload'>
				<i className="fas fa-file-upload"></i>
			</Link>
		</div>
	)
}

export default Upload;