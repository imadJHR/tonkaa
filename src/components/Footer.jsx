import React from 'react';
import { Coffee, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2c1a0f] text-[#e6ccb2]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={logo} className='w-24 h-24 object-cover rounded-full border-2 border-[#8B4513]' alt="Logo L'atelier Tonka" />
            </div>
            <p className="text-[#d4b08c]">
              Créateur de chocolats d'exception depuis 1970. Découvrez l'art de la chocolaterie fine.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3, color: '#8B4513' }}
                  href="#"
                  className="text-[#d4b08c] hover:text-[#8B4513] transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#8B4513]">Liens Rapides</h3>
            <ul className="space-y-4">
              {['À Propos', 'Nos Produits', 'Services', 'Nos Magasins', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#d4b08c] hover:text-[#8B4513] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#8B4513]">Contactez-nous</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#8B4513] mt-1" />
                <span className="text-[#d4b08c]">
                  123 Boulevard Mohammed V<br />
                  Casablanca 20000, Maroc
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#8B4513]" />
                <span className="text-[#d4b08c]">+212 661-150994</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#8B4513]" />
                <span className="text-[#d4b08c]">contact@ateliertonka.com</span>
              </div>
            </div>
          </div>

         
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3d2a1a]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#d4b08c] text-sm">
              © {new Date().getFullYear()} L'atelier Tonka. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Politique de Confidentialité', 'Conditions d\'Utilisation', 'Politique de Cookies'].map((item, index) => (
                <a key={index} href="#" className="text-[#d4b08c] hover:text-[#8B4513] text-sm transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

