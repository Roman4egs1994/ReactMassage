import logo from '../src/images/logo1.svg';
import profilePhoto from '../src/images/profilePhoto.png';
import partnersOne from '../src/images/partnersOne.svg';
import partnersTwo from '../src/images/partnersTwo.svg';
import partnersFree from '../src/images/partnersFree.svg';
import partnersFour from '../src/images/partnersFour.svg';
import './App.css';
import './scriptTimer.js';

function App() {
  return (
    <div className="page">
        <header className="page-header">
            <div сlassName="logo">
                <img lassName="header-logo" src={logo} alt=""/>
            </div>
            <nav className="nav-list">
                <div сlassName="page-nav-item">
                    <a className="nav-list_anhor "href="/#">Обо мне</a>
                </div>
                <div className="page-nav-item">
                    <a className="nav-list_anhor "href="/#">Услуги</a>
                </div>
                <div className="page-nav-item">
                    <a className="nav-list_anhor "href="/#">Блог</a>
                </div>
                <div className="page-nav-item">
                    <a className="nav-list_anhor "href="/#">Закажите звонок</a>
                </div>
            </nav>
        </header>  
        <main className="header-main">
            <div className="left-part">
                <p className="title_text">
                <strong className="i-am">Я разрабатываю продукты,<br></br>
                </strong> которые радуют ивдохновляют людей</p>
                <p className="description_text">Привет! Меня зовут Джейк, я продуктовый дизайнер из Берлина.
                <br></br>Я создаю удобные интерфейсы для быстрорастущих стартапов.</p>
                <div className="buttons-menu">
                    <button className="btn-one book-a-call">Заказать звонок</button>
                    <button className="btn download-CV">Скачать резюме</button>
                </div>
            </div>
            <div className="right-part">
                <img className="photo-profile" src={profilePhoto} alt=""/>
            </div>
        </main>
        <div className="trusted-by">
            <p className="partners-text">Нам доверяют</p>
            <div className="partners-logo">
                <img className="partner"  src={partnersOne} alt=""/>
                <img className="partner"  src={partnersTwo} alt=""/>
                <img className="partner" src={partnersFree} alt=""/>
                <img className="partner" src={partnersFour} alt=""/>
            </div>
        </div>

    <div className="promotion">
        
        <div className="left_promotion">
            <div className="promotion_text">
                <p className="title_text">Акция для новых клиентов</p>
                <p className = "description_text"> Мы ценим каждого клиента и предлагаем вам стать одним из них на очень выгодных условиях. 
                    Каждому, кто закажет доставку питание на неделю, будет предоставлена скидка в размере <span>20%!</span>
                    <br></br>
                    Акция закончится 20 мая в 00:00</p>
            </div>
        </div>

        <div className="right_promotion">
           <div className="promotion_text"> 
                <p className="title_text">Осталось до конца акции:</p>
                <div className="timer">
                    <div className="timer__block">
                        <span id="days">00</span>
                        дней
                    </div>
                    <div className="timer__block">
                        <span id="hours">00</span>
                        часов
                    </div>
                    <div className="timer__block">
                        <span id="minutes">00</span>
                        минут
                    </div>
                    <div className="timer__block">
                        <span id="seconds">00</span>
                        секунд
                    </div>
                </div>
           </div>
        </div>

    </div>
  </div>
  );
}

export default App;
