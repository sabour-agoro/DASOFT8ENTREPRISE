import React, { useState, useRef, useEffect } from 'react';
import Stepper, { Step } from '../Components/Stepper';
import { sendProjectEmail } from '../Email/mailService';

const CustomSelect = ({ label, options, value, onChange, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-3 relative" ref={containerRef}>
      <label className="text-[11px] uppercase tracking-[0.4em] text-gray-500 font-bold block">{label}</label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-black/80 border ${isOpen ? 'border-white/20' : 'border-white/5'} rounded-2xl p-5 text-white cursor-pointer flex justify-between items-center transition-all`}
      >
        <span>{value}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-[999] top-[105%] left-0 w-full bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-3xl">
          {options.map((opt) => (
            <div key={opt} onClick={() => { onChange({ target: { name, value: opt } }); setIsOpen(false); }}
              className="px-5 py-4 text-white hover:bg-white hover:text-black cursor-pointer transition-colors font-medium border-b border-white/5 last:border-0">
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Projet = ({ isOpen, onClose }) => {
  const backdropRef = useRef(null);
  const [status, setStatus] = useState('idle'); 
  const [formData, setFormData] = useState({
    email: '',
    TitleProject: '',
    projectType: 'Solution SaaS / Cloud',
    description: '',
    budget: '1M - 5M CFA',
    country: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  
  const handleFinalSubmit = async () => {
    if (status === 'sending' || status === 'success') return;
    setStatus('sending');
    
    const result = await sendProjectEmail(formData);

    if (result.success) {
      setStatus('success');
      setTimeout(() => {
        onClose();
        setTimeout(() => setStatus('idle'), 2);
      }, 1000);
    } else {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={backdropRef}
      onClick={(e) => e.target === backdropRef.current && onClose()}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-2xl p-4 transition-all"
    >
      <div className="relative w-full max-w-2xl bg-[#1e1e1e]/60 border border-white/5 rounded-[3rem] shadow-2xl">
        <button onClick={onClose} className="absolute top-8 right-10 text-white/30 hover:text-white z-50 p-2">
           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="p-10 md:p-14">
          <Stepper initialStep={1} onFinalStepCompleted={handleFinalSubmit}>
            <Step>
              <div className="py-6 space-y-8">
                <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter">Bienvenue !!!</h2>
                <div className="space-y-3">
                  <label className="text-[11px] uppercase tracking-[0.4em] text-gray-500 font-bold">Votre Email professionnel</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="exemple@entreprise.com" className="w-full bg-black/80 border border-white/5 rounded-2xl p-5 text-white focus:border-white outline-none" required />
                </div>
              </div>
            </Step>

            <Step>
              <div className="py-6 space-y-6 text-white">
                <h2 className="text-2xl font-black uppercase italic tracking-tight">Votre Vision</h2>
                <input type="text" name="TitleProject" value={formData.TitleProject} onChange={handleChange} placeholder="Intitulé du projet" className="w-full bg-black/80 border border-white/5 rounded-2xl p-5 text-white focus:border-white outline-none" />
                <CustomSelect 
                  label="Nature de la solution" 
                  name="projectType" 
                  value={formData.projectType} 
                  options={["Solution SaaS / Cloud", "Application Mobile (iOS/Android)", "Expertise & Audit Numérique"]} 
                  onChange={handleChange} 
                />
              </div>
            </Step>

            <Step>
              <div className="py-6 space-y-6">
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description..." rows={3} className="w-full bg-black/80 border border-white/5 rounded-2xl p-5 text-white focus:border-white outline-none resize-none" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CustomSelect 
                    label="Estimation Budgétaire" 
                    name="budget" 
                    value={formData.budget} 
                    options={["-1M CFA","1M - 5M CFA", "+15M CFA"]} 
                    onChange={handleChange} 
                  />
                  <div className="space-y-3">
                    <label className="text-[11px] uppercase tracking-[0.4em] text-gray-500 font-bold block">Pays</label>
                    <input name="country" value={formData.country} onChange={handleChange} placeholder="Togo..." className="w-full bg-black/80 border border-white/5 rounded-2xl p-5 text-white outline-none focus:border-white" />
                  </div>
                </div>
              </div>
            </Step>

            <Step>
              <div className="text-center py-16">
                <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                  {status === 'sending' ? 'Envoi...' : status === 'success' ? 'C\'est envoyé !' : status === 'error' ? 'Erreur' : 'Prêt ?'}
                </h2>
                <p className="text-gray-400 mt-4 italic">
                  {status === 'success' 
                    ? "Merci. Notre équipe vous contactera dans les 36 heures." 
                    : status === 'error' 
                    ? "Une erreur est survenue lors de la transmission." 
                    : "Votre vision est prête à être déployée."}
                </p>
              </div>
            </Step>
          </Stepper>
        </div>
      </div>
    </div>
  );
};

export default Projet;