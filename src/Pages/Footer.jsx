import React, { useState } from 'react';
import { Instagram, Linkedin, MessageCircle, Copy, Check } from 'lucide-react'; 

export default function Footer() {
  const email = "dasoft.entreprise@gmail.com";
  const whatsappNumber = "22899752327"; 
  const instagramUrl = "https://www.instagram.com/das_oft";
  const linkedinUrl = "https://www.linkedin.com/company/dasoft-tg";

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-white text-black font-black px-2 py-1 rounded-sm text-xl">D</div>
            <span className="text-xl font-bold tracking-tighter uppercase">Dasoft</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Pionnier de la souveraineté numérique et de l'excellence technologique à travers le couloir Afro-Européen.
          </p>
          <div className="flex gap-4">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="border border-white/20 p-2 hover:bg-white hover:text-black transition-all">
              <Instagram size={18} />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="border border-white/20 p-2 hover:bg-white hover:text-black transition-all">
              <Linkedin size={18} />
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="border border-white/20 p-2 hover:bg-green-500 transition-all">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Centres Mondiaux */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Centres Mondiaux</h3>
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400">Dakar:</span><span>Sénégal</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400 uppercase">Paris</span><span>France</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400">Lomé:</span><span>Togo</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Contact</h3>
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li className="flex flex-col gap-1">
              <span className="text-gray-500 text-[10px] uppercase">Email (Cliquer pour copier)</span>
              <button 
                onClick={handleCopyEmail}
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-all group text-left w-fit"
              >
                <span className="underline decoration-white/10 underline-offset-4 hover:text-green-200">{email}</span>
                {copied ? (
                  <Check size={14} className="text-green-500" />
                ) : (
                  <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-green-500" />
                )}
              </button>
              {copied && <span className="text-[10px] text-green-500 font-bold animate-pulse uppercase tracking-widest">Copié !</span>}
            </li>

            <li className="flex flex-col">
              <span className="text-gray-500 text-[10px] uppercase">WhatsApp</span>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                Discuter en direct
              </a>
            </li>

            
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5">
        <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
          © 2026 Dasoft Entreprise.
        </p>
      </div>
    </footer>
  );
}