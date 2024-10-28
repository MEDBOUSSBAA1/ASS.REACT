import React from 'react';
import './Footer.css'; // Assurez-vous d'importer le fichier CSS
import mailfoo from './images/mailfoo.png'
import positionfoo from './images/positionfoo.png'
import Phonefoo from './images/Phonfoo.png'
import positionmaps from './images/positionmaps.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div>
                    <ul className="footer-menu">
                        <li><a href="/">الرئيسية</a></li>
                        <li><a href="/about">حولنا</a></li>
                        <li><a href="/products">منتوجتنا</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="footer-menu">
                        <li><a href="/">الرئيسية</a></li>
                        <li><a href="/about">حولنا</a></li>
                        <li><a href="/shop">اشتري</a></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <p>اتصل بنا</p>
                    <p><img src={mailfoo} alt="Email icon" width={"70px"} height={"70px"} /> البريد الإلكتروني</p>
                    <p><img src={positionfoo} alt="Location icon"  width={"70px"} height={"70px"}/> العنوان</p>
                    <p><img src="" alt="Phone icon" /> 0689637828</p>
                </div>
                <div className="map">
                    <p>Nos Position</p>
                    <img src={positionmaps} alt="Map"  width={"100px"} height={"100px"} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;


