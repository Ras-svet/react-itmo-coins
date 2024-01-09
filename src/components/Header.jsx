import React from "react";
import avatar from "../images/avatar.png";
import packet from "../images/packet.png";
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<div className="header">
			<Link className="header__title-link" to="/react-itmo-coins/"><h2 className="header__title">ITMO.<span className="header__title-accent">Coins</span></h2></Link>
			<div className="header__info">
				<div className="header__person">
					<h2 className="header__person-name">{props.name}</h2>
					<h2 className="header__person-group">{props.isu}</h2>
				</div>
				<Link to="/react-itmo-coins/profile"><img src={avatar} className="header__avatar" alt="аватар" /></Link>
				<div className="header__span"></div>
				<img src={packet} className="header__packet" alt="кошелек"></img>
				<h2 className="header__coins">999</h2>
			</div>
		</div>
	)
}

export default Header;