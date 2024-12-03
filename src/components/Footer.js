import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Haut du Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Section Contacts */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Contactez-nous</h2>
            <ul className="mt-2 space-y-2">
              <li>Email : <a href="mailto:exemple@email.com" className="hover:text-blue-400">exemple@email.com</a></li>
              <li>Téléphone : <a href="tel:+123456789" className="hover:text-blue-400">+1 234 567 89</a></li>
            </ul>
          </div>

          {/* Section Réseaux Sociaux */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Suivez-nous</h2>
            <ul className="mt-2 flex space-x-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Section Google Maps */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold">Adresse</h2>
            <div className="mt-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19670.647633537817!2d-7.9252696074956654!3d30.52911418813601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb085ba09b910a7%3A0xd45c630570045821!2sTaliouine!5e0!3m2!1sen!2sma!4v1732970953558!5m2!1sen!2sma" width="300" height="200" style={{}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        {/* Bas du Footer */}
        <div className="mt-6 text-center text-sm text-gray-300">
          © 2024 MonEntreprise. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
