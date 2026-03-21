import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link,  useLocation } from 'react-router-dom';
import Projet from './Projet'; 


const ArrowIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#0a0a0a',
  menuColor = '#ffffff' 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isProjetOpen, setIsProjetOpen] = useState(false); 
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);
  
  
  const location = useLocation();

  const calculateHeight = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return 60 + (items.length * 95); 
    return 320; 
  };

  useLayoutEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 30, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });
    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.3, ease, stagger: 0.05 }, "-=0.2");

    tlRef.current = tl;
    return () => tl.kill();
  }, [items]);

  const closeMenu = () => {
    tlRef.current?.reverse().eventCallback("onReverseComplete", () => {
      setIsExpanded(false);
    });
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
    tlRef.current?.play();
  };

  const handleMouseLeave = () => {
    
    if (!isProjetOpen) {
      closeMenu();
    }
  };

  const handleLinkClick = (e, href) => {
    closeMenu();
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (location.pathname === path || (location.pathname === '/' && path === '')) {
        const element = document.getElementById(hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <div 
        className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-[900px] z-[100] top-4 ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav
          ref={navRef}
          className="rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden backdrop-blur-md transition-all duration-300"
          style={{ 
            backgroundColor: isExpanded ? baseColor : "rgba(10, 10, 10, 0.8)",
            borderColor: isExpanded ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"
          }}
        >
          
          <div className="h-[60px] flex items-center justify-between px-6 z-20 relative">
            
            <div className="flex flex-col justify-center gap-[6px] w-8" style={{ color: menuColor }}>
              <div className={`h-[2px] bg-current transition-all duration-300 ${isExpanded ? 'w-7 translate-y-2 rotate-45' : 'w-7'}`} />
              <div className={`h-[2px] bg-current transition-all duration-300 ${isExpanded ? 'w-0 opacity-0' : 'w-5'}`} />
              <div className={`h-[2px] bg-current transition-all duration-300 ${isExpanded ? 'w-7 -translate-y-2 -rotate-45' : 'w-7'}`} />
            </div>

            
            <Link to="/" onClick={closeMenu} className="absolute left-1/2 -translate-x-1/2">
              <img src={logo} alt={logoAlt} className="h-8 w-auto object-contain cursor-pointer hover:scale-105 transition-transform" />
            </Link>

            <button
              onClick={(e) => {
                e.stopPropagation(); 
                setIsProjetOpen(true);
              }}
              className="group relative hidden md:block overflow-hidden bg-white px-5 py-2 rounded-none font-bold text-[10px] uppercase tracking-widest text-black transition-all active:scale-95"
            >
              <span className="relative z-10">Lancer un Projet</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-15deg)_translateX(-120%)] group-hover:duration-700 group-hover:[transform:skew(-15deg)_translateX(120%)]">
                <div className="relative h-full w-10 bg-black/10 shadow-[0_0_15px_10px_rgba(255,255,255,0.6)]" />
              </div>
            </button>
          </div>

          <div 
            className={`px-3 pb-4 flex flex-col md:flex-row gap-3 h-[calc(100%-60px)] transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                ref={el => cardsRef.current[idx] = el}
                className="flex-1 rounded-xl p-5 flex flex-col justify-between min-h-[130px] border border-white/5 group/card hover:border-white/20 transition-colors"
                style={{ background: item.bgColor, color: item.textColor }}
              >
                <span className="text-xl font-black uppercase tracking-tighter italic">{item.label}</span>
                <div className="flex flex-col gap-2 mt-4">
                  {item.links.map((link, lIdx) => (
                    <Link
                      key={lIdx}
                      to={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 transition-all hover:translate-x-2"
                    >
                      <ArrowIcon /> {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>

     
      <Projet 
        isOpen={isProjetOpen} 
        onClose={() => {
          setIsProjetOpen(false);
          closeMenu(); 
        }} 
      />
    </>
  );
};

export default CardNav;