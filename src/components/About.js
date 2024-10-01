import React from 'react';
import './About.css'; // Importation du fichier CSS (optionnel)

const About = () => {
    return (
        <div className="about-container">
            <h2>À propos de la Coopérative Assousiel</h2>
            <p>
                La Coopérative <strong>Assousiel</strong> est située au cœur de Taliouine, dans la province de Taroudant, 
                une région renommée pour son safran de qualité exceptionnelle. Fondée par un groupe d'agriculteurs locaux passionnés, 
                notre coopérative se consacre à la culture et à la production de safran biologique, respectant les méthodes 
                traditionnelles qui ont fait la réputation de notre région.
            </p>
            <p>
                Notre objectif principal est de promouvoir un produit local, authentique et d'une grande qualité, tout en soutenant 
                le développement économique de la communauté rurale. En achetant notre safran, vous contribuez à soutenir les 
                agriculteurs locaux et à préserver un savoir-faire ancestral.
            </p>
            <p>
                Nous nous engageons à fournir un safran pur, soigneusement récolté et séché pour garantir sa saveur unique et ses bienfaits. 
                Que ce soit pour les amateurs de cuisine raffinée ou pour les professionnels de la gastronomie, notre safran est un ingrédient 
                incontournable, apprécié pour ses qualités aromatiques et ses vertus médicinales.
            </p>
            <p>
                Chez <strong>Assousiel</strong>, nous croyons en la transparence et la qualité, et nous travaillons chaque jour à offrir 
                à nos clients le meilleur du safran, tout en respectant les principes du commerce équitable et de l’agriculture durable.
            </p>
        </div>
    );
};

export default About;

