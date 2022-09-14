import React from "react";
import './styles-partners/partners.css';
import partnersOne from './img-partners/partnersOne.svg';
import partnersTwo from './img-partners/partnersTwo.svg';
import partnersFree from './img-partners/partnersFree.svg';
import partnersFour from './img-partners/partnersFour.svg';


export const Partners = () => {
    return (
        <div className="partners-logo">
                <img className="partner"  src={partnersOne} alt=""/>
                <img className="partner"  src={partnersTwo} alt=""/>
                <img className="partner" src={partnersFree} alt=""/>
                <img className="partner" src={partnersFour} alt=""/>
            </div>
    );
};