import lk from "../images/lk.svg"
import coin from "../images/coin.png"
import Card from "./Card"
import React from "react"

function Lk(props) {
	const [cards, setCards] = React.useState(props.cards)
	const [isNowButtonActive, setNowButtonActive] = React.useState(true)
	const [isProgressButtonActive, setProgressButtonActive] = React.useState(null)

	function handleCards(filteredCards) {
		if (filteredCards === '') {
			setCards(props.cards, props.cardsProgress)
			return
		}
		setCards(filteredCards)
		handleChangeActive()
	}

	function handleChangeActive() {
		if (isNowButtonActive) {
			setNowButtonActive(false)
			setProgressButtonActive(true)
		} else if (isProgressButtonActive) {
			setProgressButtonActive(false)
			setNowButtonActive(true)
		}
	}

	React.useEffect(() => {
		handleCards('')
	}, [props.cards, props.cardsProgress])

	return (
		<div className="content">
			<div className="lk">
				<img className="lk__image" src={lk} alt="картинка личного кабинета" />
				<div className="lk__scroll-table">
					<table>
						<caption className="lk__scroll-table-title">Начисленные коины</caption>
						<thead>
							<tr>
								<th>Название предмета</th>
								<th>Дата сдачи</th>
								<th>Коины</th>
							</tr>
						</thead>
					</table>
					<div className="lk__scroll-table-body">
						<table>
							<tbody>
								<tr>
									<td className="lk__scroll-table-subject">Алгоритмы и структуры данных</td>
									<td>13.11.2023</td>
									<td>
										<div className="card__coins">
											<img src={coin} className="card__coins-icon" alt="монета" />
											<h3 className="card__coins-number">14</h3>
										</div>
									</td>
								</tr>
								<tr>
									<td className="lk__scroll-table-subject">Алгоритмы и структуры данных</td>
									<td>13.11.2023</td>
									<td>
										<div className="card__coins">
											<img src={coin} className="card__coins-icon" alt="монета" />
											<h3 className="card__coins-number">14</h3>
										</div>
									</td>
								</tr>
								<tr>
									<td className="lk__scroll-table-subject">Алгоритмы и структуры данных</td>
									<td>13.11.2023</td>
									<td>
										<div className="card__coins">
											<img src={coin} className="card__coins-icon" alt="монета" />
											<h3 className="card__coins-number">14</h3>
										</div>
									</td>
								</tr>
								<tr>
									<td className="lk__scroll-table-subject">Алгоритмы и структуры данных</td>
									<td>13.11.2023</td>
									<td>
										<div className="card__coins">
											<img src={coin} className="card__coins-icon" alt="монета" />
											<h3 className="card__coins-number">14</h3>
										</div>
									</td>
								</tr>
								<tr>
									<td className="lk__scroll-table-subject">Алгоритмы и структуры данных</td>
									<td>13.11.2023</td>
									<td>
										<div className="card__coins">
											<img src={coin} className="card__coins-icon" alt="монета" />
											<h3 className="card__coins-number">14</h3>
										</div>
									</td>
								</tr>
								<tr>
									<td className="lk__scroll-table-subject">Алгоритмы и структуры данных</td>
									<td>13.11.2023</td>
									<td>
										<div className="card__coins">
											<img src={coin} className="card__coins-icon" alt="монета" />
											<h3 className="card__coins-number">14</h3>
										</div>
									</td>
								</tr>
								<tr>
									<td className="lk__scroll-table-subject">Алгоритмы и структуры данных</td>
									<td>13.11.2023</td>
									<td>
										<div className="card__coins">
											<img src={coin} className="card__coins-icon" alt="монета" />
											<h3 className="card__coins-number">14</h3>
										</div>
									</td>
								</tr>
								<tr>
									<td className="lk__scroll-table-subject">Алгоритмы и структуры данных</td>
									<td>13.11.2023</td>
									<td>
										<div className="card__coins">
											<img src={coin} className="card__coins-icon" alt="монета" />
											<h3 className="card__coins-number">14</h3>
										</div>
									</td>
								</tr>
								<tr>
									<td className="lk__scroll-table-subject">Алгоритмы и структуры данных</td>
									<td>13.11.2023</td>
									<td>
										<div className="card__coins">
											<img src={coin} className="card__coins-icon" alt="монета" />
											<h3 className="card__coins-number">14</h3>
										</div>
									</td>
								</tr>
								<tr>
									<td className="lk__scroll-table-subject">Алгоритмы и структуры данных</td>
									<td>13.11.2023</td>
									<td>
										<div className="card__coins">
											<img src={coin} className="card__coins-icon" alt="монета" />
											<h3 className="card__coins-number">14</h3>
										</div>
									</td>
								</tr>
								<tr>
									<td className="lk__scroll-table-subject">Алгоритмы и структуры данных</td>
									<td>13.11.2023</td>
									<td>
										<div className="card__coins">
											<img src={coin} className="card__coins-icon" alt="монета" />
											<h3 className="card__coins-number">14</h3>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>	
				</div>
			</div>
			<div className="filter__buttons">
				<button type="button" className={`filter__buttons_now ${isNowButtonActive ? 'filter__buttons_now_active' : ''}`} onClick={()=>handleCards(props.cards)}>Текущие задания</button>
				<button type="button" className={`filter__buttons_progress ${isProgressButtonActive ? 'filter__buttons_progress_active' : ''} `} onClick={()=>handleCards(props.cardsProgress)}>Задания на проверке</button>
				<button type="button" className="filter__buttons_done">Выполненные задания</button>
				<button type="button" className="filter__buttons_canceled">Задания на доработке</button>
			</div>
			{cards.length === 0 && <p className="nocards">В данной категории заданий пока нет</p>}
			<section className="cards">
				{cards?.map(card => {
						return (
							<Card
								card={card}
								key={card.id}
								onClick={props.onClick}
								deleteCard={props.deleteCard}
								button_title="Приступить"
								todo={true}
								buttonPopup = "Отправить"
								cardsProgress={props.cardsProgress}
							/>
						)
					})}
			</section>
		</div>
	)
}

export default Lk;