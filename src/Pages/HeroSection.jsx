import React from 'react';
import Beams from '../Components/Beams';

export function HeroSection() {
  const logos = [
    "DAKAR MUSIC",
    "KLUT",
    "WEPLANIFY",
    "ENTREPRENEUR STATE OF AFRICA",
    "APIX",
    "YROS",
  ];

  return (
    <>
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 30s linear infinite;
        }
      `}</style>

    
      <section className="relative h-auto bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-6 pt-64 overflow-hidden">
      
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-8">
            <span className="border border-cyan-100/30 text-gray-400 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em]">
              L'ingénierie du futur de l'Afrique
            </span>
          </div>
          
          <div className="flex flex-col mb-12">
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-black italic uppercase leading-[0.85] tracking-tighter">
              La <br />
              Souveraineté <br />
              <span className="text-blue-950">Numérique</span> <br />
              Définie<span className="text-white">.</span>
            </h1>
          </div>

          <div className="max-w-2xl mb-12">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed tracking-wide font-medium">
              Transformation numérique stratégique, excellence en <br className="hidden md:block" />
              ingénierie logicielle et architecture de solutions <br className="hidden md:block" />
              pérennes depuis nos hubs de <span className="text-white">Dakar</span>, 
              <span className="text-white uppercase"> Auxerre (FRANCE)</span> et <span className="text-white">Lomé</span>.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a href="#solutions" className="bg-white text-black px-8 py-4 text-[11px] font-extrabold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Explorer les Solutions
            </a>
            <a href="#strategie" className="border border-white/20 text-white px-8 py-4 text-[11px] font-extrabold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Notre Écosystème
            </a>
          </div>
        </div>

  
        <div className="mt-32 w-full max-w-4xl px-4 animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0c0c0c] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="src/assets/moteur.png" 
                alt="DASOFT Terminal"  
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
        
        
        <div className="mt-40 bg-[#0a0a0a] pb-32 w-full relative z-20 overflow-hidden">
          
          <p className="text-[10px] tracking-[0.4em] text-gray-500 uppercase mb-16 text-center opacity-70">
            Approuvé par des leaders visionnaires
          </p>
          
          <div className="relative flex">
            
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

            <div className="animate-infinite-scroll whitespace-nowrap">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <span 
                  key={index} 
                  className="mx-12 text-lg md:text-xl font-black text-white/20 uppercase tracking-tighter italic hover:text-white/60 transition-colors cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default HeroSection;