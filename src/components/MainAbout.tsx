import './MainAbout.scss';
import presentation from '/src/assets/main/presentation.jpg';
function MainAbout() {
    return (
        <main className="about">
            <div className="about__hat">
                <div className="container">
                    <div className="about__hat-wrapper">
                        <h4 className="about__hat-title">О компании</h4>
                        <p className="about__hat-text">
                            Предлагаем выгодные условия по лизинговым сделкам
                            для наших клиентов даже на Б/У рефрижераторные и
                            танк-контейнеры
                        </p>
                        <a href="#" className="about__hat-link yellow-btn">
                            Перейти в каталог
                        </a>
                    </div>
                </div>
            </div>
            <div className="container">
                <section className="about__presentation">
                    <div className="about__grey">
                        <span className="about__grey-dot"></span>
                        <span className="about__grey-text">о компании</span>
                    </div>
                    <h2 className="about__title about__title--short">
                        «Технопрофи» - компания, которую выбирают
                    </h2>
                    <p className="about__text">
                        За 10 лет сформировалась команда профессионалов, которые
                        готовы оперативно помочь с решением производственных
                        вопросов. Которые касаются как подбора оборудования, так
                        и технической стороной применения и обслуживания.
                    </p>
                    <div className="about__presentation-btns">
                        <a href="#" className="yellow-btn">
                            Начать сотрудничество
                        </a>
                        <a href="#" className="white-btn">
                            Скачать презентацию
                        </a>
                    </div>
                    <div className="about__presentation-image">
                        <img
                            src={presentation}
                            alt=""
                            className="about__presentation-img"
                        />
                    </div>
                </section>
                <section className="about__cards">
                    <div className="about__grey">
                        <span className="about__grey-dot"></span>
                        <span className="about__grey-text">о компании</span>
                    </div>
                    <h2 className="about__title">О компании «Технопрофи»</h2>
                    <div className="grid-cards">
                        <div className="grid-card">
                            <h6 className="grid-card__title">
                                Миссия компании:
                            </h6>
                            <p className="grid-card__text p-r-68">
                                Максимальное содействие росту
                                производительности, эффективности и безопасности
                                труда, повышению​ конкурентоспособности
                                промышленных предприятий России.
                            </p>
                        </div>
                        <div className="grid-card">
                            <h6 className="grid-card__title">
                                Наш продукт / услуга
                            </h6>
                            <p className="grid-card__text p-r-36">
                                Обеспечиваем надежное снабжение пневматическим
                                оборудованием, компонентами и приборами КИПиА
                                промышленные предприятия различных отраслей
                                России.
                            </p>
                        </div>
                        <div className="grid-card grid-card--yellow">
                            <h6 className="grid-card__title">Наша цель:</h6>
                            <p className="grid-card__text p-r-16">
                                Сосредоточение в одном месте широкого
                                ассортимента пневматического оборудования и
                                приборов КИПиА, продвижение новых брендов
                                оборудования на российском рынке на оптимальных
                                для потребителя условиях, поставка ушедших из
                                России поставщиков с целью сохранения
                                работоспособности производственного оборудования
                            </p>
                        </div>
                        <div className="grid-card grid-card--background"></div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default MainAbout;
