import React from "react";
import './styles-stick/stick.css';
import StickOne from './img-stick/StickOne.svg';



export const Stick = () => {
    return (
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
    );
};