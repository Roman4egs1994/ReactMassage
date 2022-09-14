import React from "react";
import caruselOne from './img-box/carusel_one.png';
import './styles-box/box.css';

export const Box = () => {
    return (
        <div className='box'>
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
        </div>
    );
};