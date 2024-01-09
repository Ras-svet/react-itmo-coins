import React from "react";
import coin from "../images/coin.png"

function Card(props) {
	const added = props.addedCards?.some(card => card.id === props.card.id);
	const progressed = props.cardsProgress?.some(card => card.id === props.card.id);

	function handleClickCard() {
		props.onClick(props, props.todo, props.buttonPopup)
	}

	function handleDeleteCard() {
		props.deleteCard(props.card.id)
	}

	return(
		<div className={`card ${added ? 'card__added' : ''}`}>
			{props.deleteCard && !progressed && <button type="button" className="card__delete-button" onClick={handleDeleteCard}></button>}
			<div className="card__info">
				<div className="card__coins">
					<img src={coin} className="card__coins-icon" alt="монета" />
					<h3 className="card__coins-number">{props.card.coins}</h3>
				</div>
				<h3 className="card__subject">{props.card.subject}</h3>
			</div>
			<h3 className="card__title">{props.card.task}</h3>
			<div className="wrapper">
				<p className="card__description">{props.card.description}</p>
			</div>
			{progressed ? <p className="card__status">Ожидает проверки</p> : <button type="button" className="card__button" disabled={added} onClick={handleClickCard}>{props.button_title}</button>}
		</div>
	)
}

export default Card;