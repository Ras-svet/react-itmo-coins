import vk from "../images/vk.png"
import mail from "../images/mail.png"
import telegram from "../images/telegram.png"

function Footer() {
	return (
		<div className="footer">
			<h2 className="footer__title">ITMO.<span className="header__title-accent">Coins </span> <span className="footer__title-accent">Contacts</span></h2>
			<div className="footer__content">
				<div className="footer__contacts">
					<img className="footer__contact" src={vk} alt="ссылка на вконтакте" />
					<img className="footer__contact" src={mail} alt="ссылка на вконтакте" />
					<img className="footer__contact" src={telegram} alt="ссылка на вконтакте" />
				</div>
				<p className="footer__copyright">© 2023. Кулагина Светлана</p>
			</div>
		</div>
	)
}

export default Footer;