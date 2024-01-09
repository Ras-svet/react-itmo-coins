import React from "react";
import Card from "./Card"
import gif from "../images/welcome.gif"

function Main(props) {
	const options = [
    {value: 'all', text: 'Все преподаватели'},
    {value: 'Лебедева Ф.С.', text: 'Лебедева Ф.С.'},
    {value: 'Конкуров Ф.П.', text: 'Конкуров Ф.П.'},
		{value: 'Смолова А.С.', text: 'Смолова А.С.'},
		{value: 'Рябов П.В.', text: 'Рябов П.В.'},
		{value: 'Шелист К.Е.', text: 'Шелист К.Е.'},
		{value: 'Игнатьев Р.Д.', text: 'Игнатьев Р.Д..'},
		{value: 'Прядь О.М.', text: 'Прядь О.М.'},
  ];
	const [selected, setSelected] = React.useState(options[0].value);
	const [cards, setCards] = React.useState(props.cards)
	const [searchCards, setSearchCards] = React.useState([])

	function handleSelect(choice) {
		setSelected(choice)
		props.filterByTeacher(choice)
	}

	function handleChangeSearch(e) {
		if (e.target.value.length === 0) {
			return setCards(props.filteredCards.length > 0 ? props.filteredCards : props.cards)
		}
		const cardsSearch = props.filteredCards.length > 0 ? props.filteredCards.filter(function(item) {
			return item.subject.toLowerCase().startsWith(e.target.value.toLowerCase());
		}) : props.cards.filter(function(item) {
			return item.subject.toLowerCase().startsWith(e.target.value.toLowerCase());
		})
		setCards(cardsSearch)
	}

	React.useEffect(()=> {
		setCards(props.filteredCards)
	}, [props.filteredCards])

	React.useEffect(() => {
		setCards(props.cards)
	}, [])

	return (
		<div className="content">
			<section className="welcome">
				<h1 className="welcome__title">Выполняй <span className="accent_task">задания</span> и получай <span className="accent_coins">коины</span></h1>
				<img src={gif} className="welcome__gif" alt="анимированная картинка" />
			</section>
			<section className="filter">
				<select name="select" className="filter__select" onChange={(e) =>handleSelect(e.target.value)}>
					{options.map(option => (
          <option className="filter__select-option" key={option.value} value={option.value} >
            {option.text}
          </option>
        ))}
				</select>
				<div className="filter__search">
					<input type="text" placeholder="Поиск по предмету" className="filter__search-input" onChange={handleChangeSearch} />
					<img src="https://images-na.ssl-images-amazon.com/images/I/41gYkruZM2L.png" alt="search icon" className="filter__search-button" />
				</div>
			</section>
			<section className="cards">
				{cards?.map(card => {
						return (
							<Card
								card={card}
								key={card.id}
								onClick={props.onClick}
								addedCards={props.addedCards}
								button_title="Подробнее"
								todo={false}
								buttonPopup="Откликнуться"
							/>
						)
					})}
			</section>
		</div>
	)
}

export default Main;