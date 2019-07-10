import React from 'react';
import {Link, Redirect} from 'react-router-dom';

import './about.css';

export default function About(){
	return (
		<div>
			<div class="container">
					<h1 className="aboutTitle">About</h1>
			</div>
			<p className="about"><span className="logo">Superheroes Deliver</span><span className="punction">!</span> 
			is a non sequitur way to deliver laughter to children
			 and adults for whatever reason. Flowers are nice, 
			 but they are better when delivered by a superhero.
			 </p>
			 <p className="about">
			 Artwork is by Terry Huddleston, his website is terryhuddlestonart.com.
			 <span className="logo"> Superheroes Deliver</span><span className="punction">!</span> was founded by Rob Birch. 
			 If you have issues, please call (512) 515-1628.
			 </p>
		</div>
		)
}