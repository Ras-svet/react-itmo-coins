import React from 'react';
import { Link } from 'react-router-dom';

function HeaderSign(props) {
	return (
		<header className="header">
			<h2 className="header__title">ITMO.<span className="header__title-accent">Coins</span></h2>
			<Link to={props.link} className="header__link" type="button" onClick={props.onClick}>{props.title}</Link>
		</header>
	)
}

export default HeaderSign;