import logo from '../src/images/logo1.svg';
import profilePhoto from '../src/images/profilePhoto.png';
import partnersOne from '../src/images/partnersOne.svg';
import partnersTwo from '../src/images/partnersTwo.svg';
import partnersFree from '../src/images/partnersFree.svg';
import partnersFour from '../src/images/partnersFour.svg';
import './App.css';

function App() {
  return (
    <div class="page">
        <header class="page-header">
            <div class="logo">
                <img class="header-logo" src={logo} alt=""/>
            </div>
            <nav class="nav-list">
                <div class="page-nav-item">
                    <a class="nav-list_anhor "href="/#">Обо мне</a>
                </div>
                <div class="page-nav-item">
                    <a class="nav-list_anhor "href="/#">Услуги</a>
                </div>
                <div class="page-nav-item">
                    <a class="nav-list_anhor "href="/#">Блог</a>
                </div>
                <div class="page-nav-item">
                    <a class="nav-list_anhor "href="/#">Закажите звонок</a>
                </div>
            </nav>
        </header>  
        <main class="header-main">
            <div class="left-part">
                <p class="title_text">
                <strong class="i-am">Я разрабатываю продукты,<br></br>
                </strong> которые радуют ивдохновляют людей</p>
                <p class="description_text">Привет! Меня зовут Джейк, я продуктовый дизайнер из Берлина.
                <br></br>Я создаю удобные интерфейсы для быстрорастущих стартапов.</p>
                <div class="buttons-menu">
                    <button class="btn-one book-a-call">Заказать звонок</button>
                    <button class="btn download-CV">Скачать резюме</button>
                </div>
            </div>
            <div class="right-part">
                <img class="photo-profile" src={profilePhoto} alt=""/>
            </div>
        </main>
        <div class="trusted-by">
            <p class="partners-text">Нам доверяют</p>
            <div class="partners-logo">
                <img class="partner"  src={partnersOne} alt=""/>
                <img class="partner"  src={partnersTwo} alt=""/>
                <img class="partner" src={partnersFree} alt=""/>
                <img class="partner" src={partnersFour} alt=""/>
            </div>
        </div>

    <div class="promotion">
        
        <div class="left_promotion">
            <div class="promotion_text">
                <p class="title_text">Акция для новых клиентов</p>
                <p class = "description_text"> Мы ценим каждого клиента и предлагаем вам стать одним из них на очень выгодных условиях. 
                    Каждому, кто закажет доставку питание на неделю, будет предоставлена скидка в размере <span>20%!</span>
                    <br></br>
                    Акция закончится 20 мая в 00:00</p>
            </div>
        </div>

        <div class="right_promotion">
           <div class="promotion_text"> 
                <p class="title_text">Осталось до конца акции:</p>
                <div class="timer">
                    <div class="timer__block">
                        <span id="days">00</span>
                        дней
                    </div>
                    <div class="timer__block">
                        <span id="hours">00</span>
                        часов
                    </div>
                    <div class="timer__block">
                        <span id="minutes">00</span>
                        минут
                    </div>
                    <div class="timer__block">
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
