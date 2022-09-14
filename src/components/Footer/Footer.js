import React from "react";
import './styles-footer/footer.css'
import telegram from './img-footer/telegram.svg';
import vk from './img-footer/vkontakte.svg';
import instagram from './img-footer/instagram.svg';

export const Footer = () => {
    return (
        <div className='footer'>
               <div className='footer_flex'> 
                    <div className='footer_left'>
                        <div className='social_network_text'>
                            <p className='network_text'>Социальные сети</p>
                        </div>
                        <div className='social_network_img'>
                            <a href="https://t.me/massage_ul"><img className='telegram' src={telegram} alt='' /></a>
                            <a href="https://vk.com/feed"><img className='vk' src={vk} alt='' /></a>
                            <a href="https://www.instagram.com"><img className='instagram' src={instagram} alt='' /></a>
                        </div>
                    </div>

                    <div className='footer_right'>
                            <div className='nav_list_two'>
                                <nav className='page_nav_item_two'>
                                    <div className='nav-list_anhor_two'><a className="nav-list_anhor_two "href="/#">Обо мне</a></div>
                                    <div className='nav-list_anhor_two'><a className="nav-list_anhor_two "href="/#">Контакты</a></div>
                                    <div className='nav-list_anhor_two'><a className="nav-list_anhor_two "href="/#">Dribbble</a></div>
                                </nav>
                            </div>

                            <div className='nav_list_two'>
                                <nav className='page_nav_item_two'>
                                    <div className='nav-list_anhor_two'><a className="nav-list_anhor_two "href="/#">Услуги</a></div>
                                    <div className='nav-list_anhor_two'><a className="nav-list_anhor_two "href="/#">Блог</a></div>
                                    <div className='nav-list_anhor_two'><a className="nav-list_anhor_two "href="/#">Инстаграм</a></div>
                                </nav>
                            </div>

                            <div className='nav_list_two'>
                                <nav className='page_nav_item_two'>
                                    <div className='nav-list_anhor_two'><a className="nav-list_anhor_two "href="/#">Опыт</a></div>
                                    <div className='nav-list_anhor_two'><a className="nav-list_anhor_two "href="/#">Проекты</a></div>
                                    <div className='nav-list_anhor_two'><a className="nav-list_anhor_two "href="/#">Твиттер</a></div>
                                </nav>
                            </div>
                    </div>
                </div>    
            </div>
    );
};