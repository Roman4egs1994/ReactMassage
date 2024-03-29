import profilePhoto from '../src/images/profilePhoto.png';
import StickTwo from '../src/images/StickTwo.svg';
import StickFree from '../src/images/StickFree.svg';
import caruselTwo from '../src/images/carusel_two.png';
import caruselFree from '../src/images/carusel_free.png';
import mePhotoOne from '../src/images/me_photoOne.png';
import mePhotoTwo from '../src/images/me_photoTwo.png';
import mePhotoFree from '../src/images/me_photoFree.png';
// import education from '../src/images/education.svg';
import arrov from '../src/images/arrov.svg';
import review from '../src/images/review.png';
import quotes from '../src/images/quotes.svg';
import arrowdown from '../src/images/arrowdown.svg';
import './App.css';
import { useTimer, deadline } from './scriptTimer.js';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Buttons } from './components/Buttons-rectangular/Buttons-rectangular';
import { Partners } from './components/Partners/Partners';
import { Stick } from './components/Stick/Stick';
import { Box } from './components/Box/Box';
import { BlogPost } from './components/Blog-post/Blog-post';


function App() {
   const timer = useTimer(deadline);
  return (
    <div className="page">
       <Header/>
        <main className="header-main">
            <div className="left-part">
                <p className="title_text">
                <strong className="i-am">Я разрабатываю продукты,<br></br>
                </strong> которые радуют и вдохновляют людей</p>
                <p className="description_text">Привет! Меня зовут Джейк, я продуктовый дизайнер из Берлина.
                <br></br>Я создаю удобные интерфейсы для быстрорастущих стартапов.</p>
                <div className="buttons-menu">
                    <Buttons/>
                    {/* <button className="btn-one book-a-call">Заказать звонок</button> */}
                    <button className="btn download-CV">Скачать резюме</button>
                </div>
            </div>
            <div className="right-part">
                <img className="photo-profile" src={profilePhoto} alt=""/>
            </div>
        </main>
        <div className="trusted-by">
            <p className="partners-text">Нам доверяют</p>
            <Partners/>
        </div>

        <div className='services'>
            <div className='services_text'> 
                <p className='services_header'>Услуги</p>
                <p className='services_description'>Дизайн, который решает проблемы,<br></br> по одному продукту за раз.</p>

                <div className='services_stick'>
                    <Stick/>
                    {/* <div className='stick' >
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
                    </div> */}

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
                                <p className='header_one'>В чем я эксперт</p>
                            </div>
                            <div className='description_text_height'>     
                                <p className='description_one'>Я создаю продукты, которые более чем красивы.
                                Я делаю их пригодными для отправки и использования.
                                </p>
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

        <div className='project'>
           <div className='project_top'>
               <div className='project_text'>   
                    <p className='header_projects'>Проекты</p>
                    <p className='description_projects'>Я привожу результаты.<br></br>
                    Мои клиенты тому доказательство.</p>
                </div>
                <div className='project_button'>
                    <button className='btn-one book-a-call'>Все проекты</button>
                </div>
            </div> 

            <div className='project_bottom'>
                <Box/>
                {/* <div className='box'>
                    <div className='box_img'>
                        <img className="box_img_carusel"  src={caruselOne} alt=""/>
                    </div>

                    <div className='box_bottom'>
                        <div className='name'>
                            <p className='name_discr'>Branding</p>
                        </div>
                        <div className='short'>
                             <p className='short_discr'>Soulful Rebrand</p>   
                        </div>
                        <div className='button_box'>
                            <button className='btn_box'>Посмотреть &#8594;</button>
                        </div>
                    </div>
                </div> */}

                <div className='box'>
                    <div className='box_img'>
                        <img className="box_img_carusel"  src={caruselTwo} alt=""/>
                    </div>

                    <div className='box_bottom'>
                        <div className='name'>
                            <p className='name_discr'>Branding</p>
                        </div>
                        <div className='short'>
                             <p className='short_discr'>Soulful Rebrand</p>   
                        </div>
                        <div className='button_box'>
                            <button className='btn_box'>Посмотреть &#8594;</button>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='box_img'>
                        <img className="box_img_carusel"  src={caruselFree} alt=""/>
                    </div>

                    <div className='box_bottom'>
                        <div className='name'>
                            <p className='name_discr'>Branding</p>
                        </div>
                        <div className='short'>
                             <p className='short_discr'>Soulful Rebrand</p>   
                        </div>
                        <div className='button_box'>
                            <button className='btn_box'>Посмотреть &#8594;</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='castom_nav'>
                <span className='castom_nav__prev'>&#x2039;</span>
                <span className='castom_nav__next'>&#x203A;</span>
            </div>
        </div>

        <div className='blog'>
            <div className='blog_name'>
                <p className='blog_name_discr'>Блог</p>
            </div>
            <div className='blog_post'>    
                <div className='blog_bottom'>
                   <div className='blog_later'> 
                        <p className='blog_later_discr'>Последние блоги</p>
                   </div> 
                    <div className='button_blog'>
                        <button className='btn_blog'>Посмотреть все &#8594;</button>
                    </div>
                </div>              
                    <div className='blog_message'>
                        <BlogPost/>
                        {/* <div className='message'>  
                            <div className='сlock'>
                                <span className='month'>Август</span>
                                <span className='number'>16</span>
                                <span className='year'>2021</span>
                                <span className='dot'>.</span>
                                <span className='time'>6 минут</span>
                            </div>

                            <div className='blog_text'>
                                <p className='text_discr'>Как наладить отношения с клиентами веб-дизайна</p>
                            </div>

                            <div className='article'>
                                <p className='article_open'>Читать статью &#8594;</p>
                            </div>
                        </div> */}

                        <div className='message'>  
                            <div className='сlock'>
                                <span className='month'>Август</span>
                                <span className='number'>16</span>
                                <span className='year'>2021</span>
                                <span className='dot'>.</span>
                                <span className='time'>6 минут</span>
                            </div>

                            <div className='blog_text'>
                                <p className='text_discr'>Как наладить отношения с клиентами веб-дизайна</p>
                            </div>

                            <div className='article'>
                                <p className='article_open'>Читать статью &#8594;</p>
                            </div>
                        </div>

                        <div className='message'>  
                            <div className='сlock'>
                                <span className='month'>Август</span>
                                <span className='number'>16</span>
                                <span className='year'>2021</span>
                                <span className='dot'>.</span>
                                <span className='time'>6 минут</span>
                            </div>

                            <div className='blog_text'>
                                <p className='text_discr'>Как наладить отношения с клиентами веб-дизайна</p>
                            </div>

                            <div className='article'>
                                <p className='article_open'>Читать статью &#8594;</p>
                            </div>
                        </div>    

                        <div className='message'>  
                            <div className='сlock'>
                                <span className='month'>Август</span>
                                <span className='number'>16</span>
                                <span className='year'>2021</span>
                                <span className='dot'>.</span>
                                <span className='time'>6 минут</span>
                            </div>

                            <div className='blog_text'>
                                <p className='text_discr'>Как наладить отношения с клиентами веб-дизайна</p>
                            </div>

                            <div className='article'>
                                <p className='article_open'>Читать статью &#8594;</p>
                            </div>
                        </div>    

                        <div className='message'>  
                            <div className='сlock'>
                                <span className='month'>Август</span>
                                <span className='number'>16</span>
                                <span className='year'>2021</span>
                                <span className='dot'>.</span>
                                <span className='time'>6 минут</span>
                            </div>

                            <div className='blog_text'>
                                <p className='text_discr'>Как наладить отношения с клиентами веб-дизайна</p>
                            </div>

                            <div className='article'>
                                <p className='article_open'>Читать статью &#8594;</p>
                            </div>
                        </div>              
                    </div>
            </div>    
        </div>
        
        <div className='me'>
           <div className='me_top'>
                <div className='me_top_left'> 
                    <div className='me_header'>
                        <p className='me_header_name'>Массажист</p>
                    </div>
                    <div className='me_discr'>
                        <p className='me_discr_im'>Это я!</p>
                    </div>
                </div>
                <div className='me_top_right'>
                    <div className='global_discr'>
                        <p className='global_discr_im'>За последние 12 лет я работал с самыми разными клиентами,
                         от стартапов до компаний из списка Fortune 500. Мне нравится создавать интерфейсы,
                          которые радуют пользователей и помогают бизнесу расти.</p>
                    </div>
                </div>
            </div>
            <div className='me_middle'>
                <div className='me_photo'>
                    <img className="me_photo_one"  src={mePhotoOne} alt=""/>
                    <img className="me_photo_Two"  src={mePhotoTwo} alt=""/>
                    <img className="me_photo_Free"  src={mePhotoFree} alt=""/>
                    <img className="me_photo_Two"  src={mePhotoTwo} alt=""/>
                </div>
            </div>
        </div> 

        <div className='experience'>
           <div className='experience_flex'> 
                <div className='education'>
                   <div className='educatuon_flex'> 
                        <div className='education_img'>
                            {/* <img className='education_img_icon' src={} alt=''/> */}
                        </div>
                        <div className='education_header'>
                            <p className='education_header_discr'>Образование</p>   
                        </div>    
                    </div>

                    <div className='education_stick'>
                        <div className='education_stick_flex'>
                            <div className='education_stick_text'>
                                <p className='education_stick_school'>МБОУ "Средняя школа № 27"</p>
                            </div>
                            <div className='education_stick_arrov'>
                                <img className='arrow' src={arrov} alt='' />
                            </div>    
                        </div>

                        <div className='education_stick_flex_two'>
                            <div className='speciality'>
                                <p className='speciality_school'>Среднее образование</p>
                            </div>
                            <div className='speciality_ending'>
                                <p className='ending'>Май 2010 г.</p>
                            </div>
                        </div>
                    </div>

                    <div className='education_stick'>
                        <div className='education_stick_flex'>
                            <div className='education_stick_text'>
                                <p className='education_stick_school'>МБОУ "Средняя школа № 27"</p>
                            </div>
                            <div className='education_stick_arrov'>
                                <img className='arrow' src={arrov} alt='' />
                            </div>    
                        </div>

                        <div className='education_stick_flex_two'>
                            <div className='speciality'>
                                <p className='speciality_school'>Среднее образование</p>
                            </div>
                            <div className='speciality_ending'>
                                <p className='ending'>Май 2010 г.</p>
                            </div>
                        </div>
                    </div>      

                    <div className='education_stick'>
                        <div className='education_stick_flex'>
                            <div className='education_stick_text'>
                                <p className='education_stick_school'>МБОУ "Средняя школа № 27"</p>
                            </div>
                            <div className='education_stick_arrov'>
                                <img className='arrow' src={arrov} alt='' />
                            </div>    
                        </div>

                        <div className='education_stick_flex_two'>
                            <div className='speciality'>
                                <p className='speciality_school'>Среднее образование</p>
                            </div>
                            <div className='speciality_ending'>
                                <p className='ending'>Май 2010 г.</p>
                            </div>
                        </div>
                    </div>   
                </div>

                <div className='work'>
                    <div className='work_flex'> 
                        <div className='work_img'>
                            {/* <img className='education_img_icon' src={} alt=''/> */}
                        </div>
                        <div className='work_header'>
                            <p className='work_header_discr'>Опыт работы</p>   
                        </div>    
                    </div>
                   <div className='work_stick'>
                        <div className='work_flex_one'>
                            <div className='work_stick_text'>
                                <p className='work_stick_experience'>Областной клинический 
                                онкологический диспансер</p>
                            </div>
                            <div className='education_stick_arrov'>
                                    <img className='arrow' src={arrov} alt='' />
                            </div>
                        </div>
                        <div className='work_flex_two'>
                            <div className='job'>
                                <p className='job_title'>Медицинская сестра</p>
                            </div>
                            <div className='job_date'>
                                <p className='job_date_ending'>Май 2010 г.</p>
                            </div>
                        </div>
                    </div>

                    <div className='work_stick'>
                        <div className='work_flex_one'>
                            <div className='work_stick_text'>
                                <p className='work_stick_experience'>Областной клинический 
                                онкологический диспансер</p>
                            </div>
                            <div className='education_stick_arrov'>
                                    <img className='arrow' src={arrov} alt='' />
                            </div>
                        </div>
                        <div className='work_flex_two'>
                            <div className='job'>
                                <p className='job_title'>Медицинская сестра</p>
                            </div>
                            <div className='job_date'>
                                <p className='job_date_ending'>Май 2010 г.</p>
                            </div>
                        </div>
                    </div> 

                    <div className='work_stick'>
                        <div className='work_flex_one'>
                            <div className='work_stick_text'>
                                <p className='work_stick_experience'>Областной клинический 
                                онкологический диспансер</p>
                            </div>
                            <div className='education_stick_arrov'>
                                    <img className='arrow' src={arrov} alt='' />
                            </div>
                        </div>
                        <div className='work_flex_two'>
                            <div className='job'>
                                <p className='job_title'>Медицинская сестра</p>
                            </div>
                            <div className='job_date'>
                                <p className='job_date_ending'>Май 2010 г.</p>
                            </div>
                        </div>
                    </div> 
                     
                </div>
            </div> 
        </div>

        <div className='testimonials'>
            <div className='testimonails_name'>
                <p className='testimonials_name_title'>Отзывы</p>
            </div>
            <div className='testimonails_discr'>
                <p className='testimonails_discr_part'>Слово на улице</p>
            </div>

            <div className='review'>
                <div className='review_left'>
                    <div className='review_img'>
                        <img className='review_image' src={review} alt=''/>
                    </div>
                </div>

                <div className='review_right'>
                    <div className='review_img'>
                        <img className='review_quotes' src={quotes} alt=''/>
                    </div>

                    <div className='review_discription'>
                        <p className='review_discr'>Джейд помогла нам создать настолько интуитивно понятную программу, 
                        что не требовалось пошагового руководства. Он решал сложные задачи с блестящим дизайном</p>
                    </div>
                    
                    <div className='review_bottom'>
                       <div className='review_bottom_flex'> 
                           <div className='review_bottom_left'>                        
                                <div className='review_FIO'>
                                    <p className='FIO'>John Frankin</p>
                                </div>
                                <div className='job_fio'>
                                    <p className='name_job'>Основатель, Дабл Банч</p>
                                </div>   
                            </div>  

                            <div className='review_bottom_right'>
                                 <div className='castom_nav_two'>
                                    <span className='castom_nav_prew__two'>&#x2039;</span>
                                    <span className='castom_nav_next__two'>&#x203A;</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
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

        <div className='FAQ'>
            <div className='FAQ_header'>
                <p className='FAQ_header_name'>FAQ</p>
            </div>
            <div className='FAQ_header_discription'>
                <p className='FAQ_header_discr'>Часто задаваемые вопросы</p>
            </div>

            <div className='questions'>
                <div className='question_left'>

                   <div className='question_stick'>
                        <div className='question_flex'>
                            <div className='question_asked'>
                                <p className='asked'>Какие типы проектов вы берете?</p>
                            </div>
                            <div className='arrov_down_img'>
                                <img className='down_img' src={arrowdown} alt=''/>
                            </div>
                        </div>
                    </div>

                    <div className='question_stick'>
                        <div className='question_flex'>
                            <div className='question_asked'>
                                <p className='asked'>Какие типы проектов вы берете?</p>
                            </div>
                            <div className='arrov_down_img'>
                                <img className='down_img' src={arrowdown} alt=''/>
                            </div>
                        </div>
                    </div>

                    <div className='question_stick'>
                        <div className='question_flex'>
                            <div className='question_asked'>
                                <p className='asked'>Какие типы проектов вы берете?</p>
                            </div>
                            <div className='arrov_down_img'>
                                <img className='down_img' src={arrowdown} alt=''/>
                            </div>
                        </div>
                    </div>

                    <div className='question_stick'>
                        <div className='question_flex'>
                            <div className='question_asked'>
                                <p className='asked'>Какие типы проектов вы берете?</p>
                            </div>
                            <div className='arrov_down_img'>
                                <img className='down_img' src={arrowdown} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='question_right'>

                <div className='question_stick'>
                        <div className='question_flex'>
                            <div className='question_asked'>
                                <p className='asked'>Какие типы проектов вы берете?</p>
                            </div>
                            <div className='arrov_down_img'>
                                <img className='down_img' src={arrowdown} alt=''/>
                            </div>
                        </div>
                    </div>

                    <div className='question_stick'>
                        <div className='question_flex'>
                            <div className='question_asked'>
                                <p className='asked'>Какие типы проектов вы берете?</p>
                            </div>
                            <div className='arrov_down_img'>
                                <img className='down_img' src={arrowdown} alt=''/>
                            </div>
                        </div>
                    </div>

                    <div className='question_stick'>
                        <div className='question_flex'>
                            <div className='question_asked'>
                                <p className='asked'>Какие типы проектов вы берете?</p>
                            </div>
                            <div className='arrov_down_img'>
                                <img className='down_img' src={arrowdown} alt=''/>
                            </div>
                        </div>
                    </div>

                    <div className='question_stick'>
                        <div className='question_flex'>
                            <div className='question_asked'>
                                <p className='asked'>Какие типы проектов вы берете?</p>
                            </div>
                            <div className='arrov_down_img'>
                                <img className='down_img' src={arrowdown} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>



  </div>
  );
}

export default App;
