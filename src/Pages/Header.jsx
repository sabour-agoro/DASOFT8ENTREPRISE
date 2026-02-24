export function Header() {
    return (
        <nav className="fixed w-full top-0 left-0 z-50 bg-[#0a0a0a] border-b border-white/5 text-white
         ">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

               
                <div className="flex items-center gap-4">
                    
                    <div className="w-10 h-10 bg-white rounded flex items-center justify-center shrink-0">
                        <img
                            src="src\assets\logo1.png"
                            alt="DASOFT"
                            className="w-full h-full object-cover rounded"
                           
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="flex items-baseline leading-none">
                            <span className="text-xl font-bold tracking-tight text-white uppercase">D</span>
                            <span className="text-xl font-bold tracking-tight text-blue-800 uppercase ml-0.5">A</span>
                            <span className="text-xl font-bold tracking-tight text-white uppercase">S</span>
                            <span className="text-xl font-bold tracking-tight  text-blue-800 uppercase ml-0.5">O</span>
                            <span className="text-xl font-bold tracking-tight text-white uppercase">F</span>
                            <span className="text-xl font-bold tracking-tight  text-blue-800 uppercase ml-0.5">T</span>
                        </div>
                        <span className="text-[7px] uppercase tracking-[0.2em] text-white font-bold mt-1">
                            Votre puissance numérique, notre expertise
                        </span>
                    </div>
                </div>

               
                <div className="hidden lg:flex items-center gap-12">
                    <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-white transition-colors">Solutions</a>
                    <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-white transition-colors">Écosystème</a>
                    <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-white transition-colors">Nos réalisations</a>
                </div>

               
                <div>
                    <a href="#" className="border border-blue-200/60 hover:border-blue-200 text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.15em] transition-all">
                        Lancer un Projet
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header