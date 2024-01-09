import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import goodAnswer from '../images/AllRight.svg';
import badAnswer from '../images/OhBad.svg';
import HeaderSign from './HeaderSign';
import Login from './Login';
import InfoTooltip from './InfoTooltip';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import cards from "../utils/cards.json"
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupCard from './PopupCard';
import Lk from './Lk';

function App() {
	const [currentUser, setCurrentUser] = React.useState({});
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	const [isStatusPopupOpen, setIsStatusPopupOpen] = React.useState(false);
	const [titleStatusPopup, setTitleStatusPopup] = React.useState('');
	const [imageStatusPopup, setImageStatusPopup] = React.useState(null);
	const [selectedCard, setSelectedCard] = React.useState(null);
	const [cardsToDo, setCardsToDo] = React.useState([]);
	const [cardsProgress, setCardsProgress] = React.useState([]);
	const [isPopupToDo, setIsPopupToDo] = React.useState(false);
	const [buttonPopup, setButtonPopup] = React.useState('');
	const [filteredCards, setFilteredCards] = React.useState([]);
	const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false)
	const navigate = useNavigate();

	function register(user) {
		setCurrentUser(user);
		setImageStatusPopup(goodAnswer)
		setTitleStatusPopup("Вы успешно зарегистрировались")
		setIsStatusPopupOpen(true)
		navigate("sign-in");
	}

	// React.useEffect(() => {
	// 	checkAuthorization();
	// }, [])

	// function checkAuthorization() {
	// 	const jwt = localStorage.getItem('jwt')
	// 	if (jwt) {
	// 		navigate("/")
	// 	}
	// }

	function loginUser(isu, password) {
		if(isu == currentUser.isu && password == currentUser.password) {
			localStorage.setItem('jwt', 'h789ed562fg49ls03b8uvwao84qnd904nd81e0');
			setIsLoggedIn(true);
			navigate("/");
		} else {
			setIsStatusPopupOpen(true);
			setImageStatusPopup(badAnswer);
			setTitleStatusPopup("Что-то пошло не так! Попробуйте еще раз")
			console.log(`Ошибка при отправке запроса`)
		}
	}

	function handleCardPopup(card, added, buttonPopup) {
		setSelectedCard(card)
		setButtonPopup(buttonPopup)
		setIsPopupToDo(added)
	}

	function handleConfirmPopupOpen() {
		setIsStatusPopupOpen(true)
		setTitleStatusPopup("Задание добавлено в текущие. Вы можете найти его в личном кабинете")
		setImageStatusPopup(goodAnswer)
	}

	function closeAllPopups() {
		setIsStatusPopupOpen(false);
		setSelectedCard(null)
		setIsConfirmPopupOpen(false)
	}

	function addToCardsToDo(card) {
		setCardsToDo([...cardsToDo, card])
	}

	function deleteCardsToDo(cardId) {
		const newCardsToDo = cardsToDo
		.filter((card) => card.id !== cardId);
		setCardsToDo(newCardsToDo);
	}

	function addToCardsProgress(card) {
		deleteCardsToDo(card.id)
		setCardsProgress([...cardsProgress, card])
	}
	
	function filterByTeacher(teacher) {
		if (teacher === 'all') {
			setFilteredCards(cards.cards);
			return
		}
		const newFilteredCards = cards.cards
		.filter((card) => card.teacher === teacher);
		setFilteredCards(newFilteredCards);
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="body">
				<div className="page">
					<Routes>
						<Route exact path="/react-itmo-coins/sign-in" element={
							<>
							<HeaderSign title="Регистрация" link="/react-itmo-coins/sign-up" />
							<Login onSubmit={loginUser}/>
							</>
						} />
						<Route exact path="/react-itmo-coins/sign-up" element={
							<>
							<HeaderSign title="Вход" link="/react-itmo-coins/sign-in" />
							<Register onSubmit={register}/>
							</>
						} />
						<Route exact path="/react-itmo-coins/profile" element={
							<>
							<Header name={currentUser.name} isu={currentUser.isu} />
							<ProtectedRoute
									component={Lk}
									cards={cardsToDo}
									onClick={handleCardPopup}
									isLoggedIn={isLoggedIn}
									deleteCard={deleteCardsToDo}
									cardsProgress={cardsProgress}
									/>
								<Footer />
							</>
						}/>
						<Route exact path="/react-itmo-coins/" element={
							<>
								<Header name={currentUser.name} isu={currentUser.isu} />
								<ProtectedRoute
									component={Main}
									cards={cards.cards}
									onClick={handleCardPopup}
									isLoggedIn={isLoggedIn}
									addedCards = {cardsToDo}
									filterByTeacher={filterByTeacher}
									filteredCards={filteredCards}
									/>
								<Footer />
								</>
						} 
						/>
					</Routes>
					<InfoTooltip
					isOpen={isStatusPopupOpen}
					onClose={closeAllPopups}
					title={titleStatusPopup}
					image={imageStatusPopup}
					/>
					<PopupCard
					onClose={closeAllPopups}
					card={selectedCard}
					addCard={addToCardsToDo}
					do={isPopupToDo}
					buttonPopup={buttonPopup}
					toProgress={addToCardsProgress}
					onAdd={handleConfirmPopupOpen}
					/>
				</div>
			</div>
		</CurrentUserContext.Provider>
	)
}

export default App;