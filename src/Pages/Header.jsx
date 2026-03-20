import React from 'react';
import CardNav from './CardNav';
import logo from '../assets/logo1.png'; 
import Realisations from './Realisations';

const Header = () => {
  const items = [
    {
      label: "Écosystème",
      bgColor: "#0a0a0a",
      textColor: "#ffffff",
      links: [
        { label: "Pôle Solutions", href: "/#solutions" }, 
        { label: "Stratégie", href: "/#strategie" },
      ]
    },
    {
      label: "Projets", 
      bgColor: "linear-gradient(to right, #2C5364, #203A43, #0F2027)", 
      textColor: "#ffffff",
      links: [
        { label: "Nos Réalisations", href: "/Realisations" } 
      ]
    },
    {
      label: "Contact",
      bgColor: "#ffffff",
      textColor: "#000000",
      links: [
        { label: "Nous Écrire", href: "mailto:contact@dasoft.tg" },
        { label: "Localisation", href: "/#footer" } 
      ]
    }
  ];

  return (
    <header className="w-full">
      <CardNav
        logo={logo}
        logoAlt="DASOFT"
        items={items}
        baseColor="#0a0a0a"
        menuColor="#ffffff"
      />
    </header>
  );
};

export default Header;