import React from "react";
import { Code2, Layers, ArrowRight } from "lucide-react";
import Beams from "../Components/Beams";

export function PoleSolutions() {
  const tags = [
    "STRATÉGIE",
    "INTÉGRATION IA",
    "Transformation Digitale",
    "Développement web/mobile",
  ];

  return (
    <>
      <style>{`
        /* Hover Blanc pour toutes les cartes (Glow + Bordure) */
        .card-glow:hover {
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.6) !important;
        }
        .tag-hover:hover {
          background-color: white;
          color: black;
          transform: translateY(-2px);
        }
      `}</style>

      <section className="relative min-h-screen bg-[#0a0a0a] text-white px-6 py-24 flex flex-col items-center overflow-hidden">
        
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient id="pmo-green-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f9b0f" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
        </svg>

      
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <Beams
            beamWidth={2}
            beamHeight={40}
            beamNumber={15}
            lightColor="#ffffff"
            speed={1.5}
            noiseIntensity={1.5}
            scale={0.3}
            rotation={-15}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl">
          
         
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
            <div className="bg-white px-5 py-2 flex items-center justify-center">
               
              <span className="text-black font-black text-2xl tracking-tighter italic">DASOFT</span>
            </div>

            <div className="flex flex-col items-end">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                PÔLE{" "}
                <span
                  className="inline-block bg-clip-text text-transparent border-b-[8px] border-white"
                  style={{
                    backgroundImage: "linear-gradient(to right, #2c3e50, #bdc3c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SOLUTIONS
                </span>
              </h2>
            </div>
          </div>

      
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/*  TRANSFORMATION NUMÉRIQUE */}
            <div className="lg:col-span-8 card-glow bg-[#0c0c0c]/80 backdrop-blur-sm border border-white/5 p-8 md:p-16 relative overflow-hidden flex flex-col justify-between min-h-[550px] transition-all duration-500">
              <div className="relative z-10">
                <h3 className="text-5xl md:text-7xl font-black mb-10 leading-[0.85] uppercase tracking-tighter italic">
                  Transformation <br />
                  <span className="text-white">Numérique</span>
                </h3>
                <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed tracking-wide font-medium">
                  Refaçonner l'ADN organisationnel grâce à des écosystèmes
                  numériques intégrés. Nous n'ajoutons pas seulement de la
                  technologie ; nous redéfinissons votre
                  <span className="text-white"> mode opératoire</span> à l'ère moderne.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-12 relative z-10">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="tag-hover border border-white/10 px-4 py-3 text-[10px] font-black tracking-[0.2em] text-gray-500 transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              
              <div className="absolute bottom-[-30px] right-[-30px] opacity-15 pointer-events-none">
                <div 
                  className="w-64 h-64 border-[12px] rounded-[40px] rotate-12"
                  style={{
                    borderImageSource: "linear-gradient(to bottom, #0f9b0f, #000000)",
                    borderImageSlice: 1
                  }}
                ></div>
                <div 
                  className="w-64 h-64 border-[12px] rounded-[40px] absolute -top-16 -left-16 rotate-12"
                  style={{
                    borderImageSource: "linear-gradient(to bottom, #0f9b0f, #000000)",
                    borderImageSlice: 1
                  }}
                ></div>
              </div>
            </div>

            
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Ingénierie Logicielle */}
              <div className="card-glow bg-[#0c0c0c]/80 backdrop-blur-sm border border-white/5 p-10 flex flex-col h-full transition-all duration-300 group">
                <div className="bg-white/5 w-14 h-14 flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/40 transition-colors">
                  <Code2 size={28} stroke="url(#pmo-green-gradient)" />
                </div>
                <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter italic">
                  Ingénierie Logicielle
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  Systèmes sur mesure haute performance conçus avec une excellence technique.
                </p>
              </div>

              {/* PMO Stratégique */}
              <div className="card-glow bg-[#0c0c0c]/80 backdrop-blur-sm border border-white/5 p-10 flex flex-col h-full transition-all duration-300 group">
                <div className="bg-white/5 w-14 h-14 flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/40 transition-colors">
                  <Layers size={28} stroke="url(#pmo-green-gradient)" />
                </div>
                <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter italic">
                  PMO Stratégique
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  Gestion de projet axée sur la précision garantissant la vitesse de livraison.
                </p>
              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default PoleSolutions;