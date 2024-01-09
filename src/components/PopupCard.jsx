import download from "../images/file-icon.svg"
import coin from "../images/coin.png"

function PopupCard(props) {
	function handleAddCard() {
		if (props.do) {
			props.toProgress(props.card?.card)
			props.onClose();
		} else {
			props.addCard(props.card?.card)
			props.onClose()
			props.onAdd()
			// props.onClose()
		}
	}

	return (
		<section className={`popup popup_type_view ${props.card ? 'popup_opened' : ''}`}>
			<div className="popup__container">
				<button type="button" className="popup__close-button" onClick={props.onClose}></button>
				<div className="popup__content">
					<div className="popup__header">
						<div className="popup__header-main">
							<p className="popup__description">Преподаватель: {props.card?.card.teacher}</p>
							<p className="popup__description">Дедлайн: 25.12.2023</p>
						</div>
						<div className="popup__header-info">
							<p className="popup__header-subject">{props.card?.card.subject}</p>
							<div className="card__coins">
								<img src={coin} className="card__coins-icon" alt="монета" />
								<h3 className="card__coins-number">{props.card?.card.coins}</h3>
							</div>
						</div>
					</div>
					<h3 className="popup__title">{props.card?.card.task}</h3>
					<p className="popup__description">{props.card?.card.description}</p>
					<button type="button" className="popup__download"><img className="popup__download-icon" src={download} alt="загрузка файла" />Скачать файл задания</button>
					{ props.do && <div className="popup_type_do">
						<h3 className="popup__title">Ответ на задание</h3>
						<textarea className="popup__textarea" placeholder="Комментарий..."></textarea>
						<button type="button" className="popup__download"><img className="popup__download-icon" src={download} alt="загрузка файла" />Прикрепить файл задания</button>
					</div>}
					<button type="button" className="popup__button" onClick={handleAddCard}>{props.buttonPopup}</button>
				</div>
			</div>
		</section>
	)
}

export default PopupCard;