import React from 'react';


export default function Pet (props) {
	const { name, sex, breed, age, imageURL, description } = props.info;
	return (
		<div className='pet'>
			<h2 id='pet-name'>{name}</h2>
			<h5 id='more-info'>{age} year old {sex} {breed}</h5>
			<img id='pet-img' src={imageURL} alt={description}/>
			<button id='adopt-button' onClick={() => props.handleClick}>Adopt {name}</button>
		</div>
	)
	
}