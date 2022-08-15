import React from 'react';
import twitter from '../images/tweeter.png';
import facebook from '../images/fb.png';
import instagram from '../images/ig.png';
import github from '../images/git.png';

export default function Footer() {
	return (
		<div className="footer">
			<img src={twitter} alt="Twitter" />
			<img src={facebook} alt="Facebook" />
			<img src={instagram} alt="Instagram" />
			<img src={github} alt="GitHub" />
		</div>
	);
}