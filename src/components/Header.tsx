import './Header.scss';
const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__social">
                            <ul className="header__social-icons">
                                <li className="header__social-icon">
                                    <a href="#" className="header__social-link">
                                        <img
                                            src="/header/vk.svg"
                                            alt="vk"
                                            className="social-icon"
                                        />
                                    </a>
                                </li>
                                <li className="header__social-icon">
                                    <a href="#" className="header__social-link">
                                        <img
                                            src="/header/instagram.svg"
                                            alt="inst"
                                            className="social-icon"
                                        />
                                    </a>
                                </li>
                                <li className="header__social-icon">
                                    <a href="#" className="header__social-link">
                                        <img
                                            src="/header/telegram.svg"
                                            alt="tg"
                                            className="social-icon"
                                        />
                                    </a>
                                </li>
                                <li className="header__social-icon">
                                    <a href="#" className="header__social-link">
                                        <img
                                            src="/header/whatsapp.svg"
                                            alt="whatsapp"
                                            className="social-icon"
                                        />
                                    </a>
                                </li>
                                <li className="header__social-icon">
                                    <a href="#" className="header__social-link">
                                        <img
                                            src="/header/dzen.svg"
                                            alt="dzen"
                                            className="social-icon"
                                        />
                                    </a>
                                </li>
                                <li className="header__social-icon">
                                    <a href="#" className="header__social-link">
                                        <img
                                            src="/header/penis.svg"
                                            alt="penis"
                                            className="social-icon"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="header__calls">
                            <img
                                src="/header/phone.svg"
                                alt=""
                                className="call-icon"
                            />
                            <div className="header__choose-number">
                                <span className="phone-number">
                                    +7 (900) 300-23-14
                                </span>
                                <span>
                                    <img
                                        src=""
                                        alt=""
                                        className="phone-arrow"
                                    />
                                </span>
                            </div>
                            <button className="header__callme">
                                Заказать звонок
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="header__bottom">
                    <a href="#" className="header__logo-link">
                        <img
                            src="/header/logo.svg"
                            alt="logo"
                            className="header__logo"
                        />
                    </a>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-el">
                                <a href="#" className="header__nav-link">
                                    Главная
                                </a>
                            </li>
                            <li className="header__nav-el">
                                <a href="#" className="header__nav-link">
                                    Каталог
                                </a>
                            </li>
                            <li className="header__nav-el">
                                <a href="#" className="header__nav-link">
                                    О компании
                                </a>
                            </li>
                            <li className="header__nav-el">
                                <a href="#" className="header__nav-link">
                                    Параллельный импорт
                                </a>
                            </li>
                            <li className="header__nav-el">
                                <a href="#" className="header__nav-link">
                                    Новости
                                </a>
                            </li>
                            <li className="header__nav-el">
                                <a href="#" className="header__nav-link">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__request">
                        <button className="header__search-btn">
                            <img
                                src="/header/search.svg"
                                alt=""
                                className="header__search-img"
                            />
                        </button>
                        <button className="header__request-btn">
                            Подать заявку
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
