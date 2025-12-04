
import React, { useState, useEffect } from 'react';
import { Menu, FileDown, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activePage: number;
  onNavigate: (id: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-10 px-16 flex items-start justify-between pointer-events-none">
      
      {/* Brand - Pointer events auto to allow click */}
      <div className="flex items-center gap-5 cursor-pointer group pointer-events-auto" onClick={() => onNavigate(0)}>
          <div className="w-12 h-12 bg-white flex items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <div className="absolute w-[120%] h-[20%] bg-black -rotate-45 top-5"></div>
              <div className="w-2.5 h-2.5 bg-ark-cyan rounded-full z-10"></div>
          </div>
          <div className="flex flex-col justify-center">
              <h1 className="text-base font-bold tracking-[0.2em] leading-none text-white uppercase group-hover:text-ark-cyan transition-colors">RHODES ISLAND</h1>
              <p className="text-[10px] tracking-[0.3em] opacity-50 mt-1.5 font-mono text-ark-cyan">PRTS // ACCESS_GRANTED</p>
          </div>
      </div>

      {/* Top Right Decoration & Tools - Pointer events auto */}
      <div className="flex items-center gap-10 pointer-events-auto">
          {/* Active Section Indicator */}
          <div className="hidden xl:flex items-center gap-2">
             {NAV_ITEMS.map((item) => (
               <div key={item.id} className="flex flex-col items-center group cursor-pointer p-2" onClick={() => onNavigate(item.id)}>
                   <div className={`text-[10px] font-bold tracking-widest mb-1.5 transition-colors ${activePage >= item.id ? 'text-ark-cyan' : 'text-gray-600'}`}>{item.subLabel}</div>
                   <div className={`w-14 h-1 transition-all ${activePage === item.id ? 'bg-ark-cyan shadow-[0_0_10px_#00b2d6]' : 'bg-white/10 group-hover:bg-white/30'}`}></div>
               </div>
             ))}
          </div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute top-0 left-16 w-[1px] h-[250px] bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-16 w-[1px] h-[150px] bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
    </nav>
  );
};

export default Navbar;
