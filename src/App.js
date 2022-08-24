import logo from '../src/images/logo1.svg';
import profilePhoto from '../src/images/profilePhoto.png';
import partnersOne from '../src/images/partnersOne.svg';
import partnersTwo from '../src/images/partnersTwo.svg';
import partnersFree from '../src/images/partnersFree.svg';
import partnersFour from '../src/images/partnersFour.svg';
import StickOne from '../src/images/StickOne.svg';
import StickTwo from '../src/images/StickTwo.svg';
import StickFree from '../src/images/StickFree.svg';
import './App.css';
import { useTimer, deadline } from './scriptTimer.js';


function App() {
   const timer = useTimer(deadline);
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
                </strong> которые радуют и вдохновляют людей</p>
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
        
        
        
        
        {/* Таймер начало */}
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
                            <span id="days">{timer.days}</span>
                            дней
                        </div>
                        <div className="timer__block">
                            <span id="hours">{timer.hours}</span>
                            часов
                        </div>
                        <div className="timer__block">
                            <span id="minutes">{timer.minutes}</span>
                            минут
                        </div>
                        <div className="timer__block">
                            <span id="seconds">{timer.seconds}</span>
                            секунд
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Таймер конец */}

        <div className='services'>
            <div className='services_text'> 
                <p className='services_header'>Услуги</p>
                <p className='services_description'>Дизайн, который решает проблемы,<br></br> по одному продукту за раз.</p>

                <div className='services_stick'>
                    <div className='stick' >
                        <div className='stick_img'>
                            <img className="stick_img"  src={StickOne} alt=""/>
                        </div>
                        
                        <div className='stick_text'>
                           <div className='header_stick_height'>
                                <p className='header_one'>Что я могу для тебя сделать</p>
                           </div>  
                           <div className='description_text_height'>
                                <p className='description_one'>Более быстрые и качественные продукты, которые нравятся вашим пользователям. 
                                Вот все услуги, которые я предоставляю:</p>
                            </div> 
                        </div>
        
                        <div className='list'>
                            <ul className='list_one'>
                                <li>Стратегия проектирования</li>
                                <li>Дизайн веб- и мобильных приложений</li>
                                <li>Front-end Development</li>
                            </ul>
                        </div>    
                    </div>


                    <div className='stick' >
                        <div className='stick_img'>
                            <img className="stick_img"  src={StickTwo} alt=""/>
                        </div>
                        
                        <div className='stick_text'>
                            <div className='header_stick_height'> 
                                <p className='header_one'>Приложения, в которых я свободно владею</p>
                            </div>
                            <div className='description_text_height'>   
                                <p className='description_one'>Каждому дизайнеру нужны правильные инструменты,
                                чтобы выполнить идеальную работу. К счастью, я говорю на нескольких языках.</p>
                            </div> 
                        </div>
        
                        <div className='list'>
                            <ul className='list_one'>
                                <li>Стратегия проектирования</li>
                                <li>Дизайн веб- и мобильных приложений</li>
                                <li>Front-end Development</li>
                            </ul>
                        </div>    
                    </div>


                    <div className='stick' >
                        <div className='stick_img'>
                            <img className="stick_img"  src={StickFree} alt=""/>
                        </div>
                        
                        <div className='stick_text'>
                            <div className='header_stick_height'>  
                                <p className='header_one'>What you can expect</p>
                            </div>
                            <div className='description_text_height'>     
                                <p className='description_one'>Я создаю продукты, которые более чем красивы.
                                Я делаю их пригодными для отправки и использования.</p>
                            </div>        
                        </div>
        
                        <div className='list'>
                            <ul className='list_one'>
                                <li>Стратегия проектирования</li>
                                <li>Дизайн веб- и мобильных приложений</li>
                                <li>Front-end Development</li>
                            </ul>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        
           
  </div>
  );
}

export default App;
