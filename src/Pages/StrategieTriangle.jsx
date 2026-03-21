import React from "react";

const StrategieTriangle = () => {
  const locations = [
    { ville: "Dakar", pays: "SÉNÉGAL", role: "CENTRE D'INNOVATION" },
    { ville: "Auxerre", pays: "FRANCE", role: "CONSEIL STRATÉGIQUE & PONT" },
    { ville: "Lomé", pays: "TOGO", role: "PÔLE DE DÉV & INCUBATEUR DE TALENTS" },
  ];

  const stacks = [
    { name: "REACT", slug: "react" },
    { name: "TYPESCRIPT", slug: "typescript" },
    { name: "FASTAPI", slug: "fastapi" },
    { name: "ANGULAR", slug: "angular" },
    { name: "NESTJS", slug: "nestjs" },
    { name: "PYTHON", slug: "python" },
    { name: "GO", slug: "go" },
    { name: "FLUTTER", slug: "flutter" },
    { name: "RUST", slug: "rust" },
    { name: "RUBY", slug: "ruby" },
  ];


  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between overflow-hidden font-sans">
      
   
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-grow">
        
       
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              TRIANGLE <br />
              <span className="text-white italic">STRATÉGIQUE</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed font-medium">
             Notre présence à Dakar, Auxerre et Lomé crée un pont unique pour le talent, 
              la technologie et la connaissance du marché, nous permettant de fournir 
              des solutions aux standards mondiaux avec un contexte local profond.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {locations.map((loc, index) => (
              <div key={index} className="group flex items-center gap-4 border-l-2 border-white/5 hover:border-[#0f9b0f] pl-6 transition-all duration-300 cursor-default">
                <span className="text-3xl font-black uppercase tracking-tight">
                  {loc.ville}
                </span>
                <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mt-1">
                  {loc.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        
        <div className="relative flex justify-center items-center">
          <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center">
            
           
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="0.2" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.1" />
              
              <path 
                d="M50 20 L25 70 L75 70 Z" 
                fill="none" 
                stroke="#0f9b0f" 
                strokeWidth="0.5" 
                strokeDasharray="2 2"
              />
              
              
              <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.05" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.05" />
            </svg>

            <div className="absolute top-[18%] flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#0f9b0f] shadow-[0_0_15px_#0f9b0f] z-10"></div>
              <div className="mt-2 flex flex-col items-center">
                <span className="text-[12px] font-black uppercase tracking-widest">Auxerre</span>
                <span className="text-[8px] text-blue-400 font-bold tracking-tighter uppercase">France</span>
              </div>
            </div>

            <div className="absolute bottom-[23%] left-[18%] flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#0f9b0f] shadow-[0_0_15px_#0f9b0f] z-10"></div>
              <div className="mt-2 flex flex-col items-center">
                <span className="text-[12px] font-black uppercase tracking-widest">Dakar</span>
                <span className="text-[8px] text-red-500 font-bold tracking-tighter uppercase">Sénégal</span>
              </div>
            </div>

            <div className="absolute bottom-[23%] right-[18%] flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#0f9b0f] shadow-[0_0_15px_#0f9b0f] z-10"></div>
              <div className="mt-2 flex flex-col items-center">
                <span className="text-[12px] font-black uppercase tracking-widest">Lomé</span>
                <span className="text-[8px] text-yellow-500 font-bold tracking-tighter uppercase">Togo</span>
              </div>
            </div>

            <div className="absolute bottom-4 flex items-center gap-2">
              <div className="w-1 h-1 bg-[#0f9b0f] rounded-full animate-ping"></div>
              <span className="text-[9px] font-bold text-gray-600 tracking-[0.3em] uppercase">
                Synchronisation des nœuds : Active
              </span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full bg-[#050505] border-t border-white/5 py-14 flex flex-col items-center gap-10">
        <h3 className="text-[10px] font-black tracking-[1em] text-gray-500 uppercase">
          NOS STACKS
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-6">
          {stacks.map((stack, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0f0f0f] border border-white/5 flex items-center justify-center rounded-sm group-hover:border-[#0f9b0f]/40 transition-all duration-500">
                <img 
                  src={`https://cdn.simpleicons.org/${stack.slug}/white`} 
                  alt={stack.name}
                  className="w-8 h-8 opacity-40 group-hover:opacity-100 group-hover:brightness-125 group-hover:filter group-hover:invert-[45%] group-hover:sepia-[95%] group-hover:saturate-[400%] group-hover:hue-rotate-[75deg] transition-all duration-300"
                />
                
              </div>
              
              <span className="text-[9px] font-black tracking-[0.2em] text-gray-600 group-hover:text-white transition-colors">
                {stack.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategieTriangle;