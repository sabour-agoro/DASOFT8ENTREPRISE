import React from 'react';
import TiltedCard from "../Components/TiltedCard";
import LightRays from '../Components/LightRays';

const PROJECTS = [
  { id: 1, title: "APIX", description: "Solution SaaS de gestion de planning.", image: "./src/assets/Apix.avif" },
  { id: 2, title: "ENDEV DIGIFA", description: "Plateforme dématérialisée des dépôts et de gestion des investissements.", image: "./src/assets/Digifa.webp" },
  { id: 3, title: "KLUT", description: "Plateforme de gestions des RH.", image: "./src/assets/klut.webp" },
  { id: 4, title: "YROS", description: "Plateforme de gestion de paie.", image: "./src/assets/Yros.avif" },
  { id: 5, title: "ESOA", description: "Vitrine de Entrepreneur State Of Africa.", image: "./src/assets/Entre.jpeg" },
  { id: 6, title: "WEPLANIFY", description: "Solution Saas pour réduire la complexité de création de plannings.", image: "./src/assets/Wepl.avif" }
];

export default function Realisations() {
  return (
    <main className="relative min-h-screen w-full bg-white overflow-hidden">
      
      
      <div className="fixed inset-0 z-0 opacity-50">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.5}
          lightSpread={0.8}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.05}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <header className="text-center mb-24 relative z-20">
          <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter uppercase italic drop-shadow-sm">
            DASOFT <span className="text-gray-500 opacity-50">LABS</span>
          </h1>
          <p className="text-gray-400 font-medium tracking-[0.5em] uppercase text-xs mt-4">Innovation & Solutions Digital </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="flex flex-col group relative z-10">
              
        
              <div className="flex justify-center mb-8 relative z-20">
                <TiltedCard
                  imageSrc={project.image}
                  altText={project.title}
                  captionText={project.title}
                  containerHeight="350px"
                  containerWidth="100%"
                  imageHeight="300px"
                  imageWidth="100%"
                  rotateAmplitude={15}
                  scaleOnHover={1.08}
                  showTooltip={true}
                  displayOverlayContent={false}
                />
              </div>

             
              <div className="mx-4 p-8 bg-white border border-gray-100 rounded-3xl shadow-lg relative z-10 transition-all duration-300 group-hover:border-gray-200 group-hover:shadow-2xl">
                <h3 className="text-black font-black text-xl mb-2 uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}