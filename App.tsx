
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import WorldSection from './components/WorldSection';
import TextLayout from './components/TextLayout';
import ChartLayout from './components/ChartLayout';
import { ChevronRight, ChevronLeft, Lock, Terminal } from 'lucide-react';
import { REPORT_PAGES } from './constants';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentPageId, setCurrentPageId] = useState(0);

  const currentPageIndex = REPORT_PAGES.findIndex(p => p.id === currentPageId);
  const currentPage = REPORT_PAGES[currentPageIndex] || REPORT_PAGES[0];

  const handleNext = () => {
    if (currentPageIndex < REPORT_PAGES.length - 1) {
        setCurrentPageId(REPORT_PAGES[currentPageIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentPageIndex > 0) {
        setCurrentPageId(REPORT_PAGES[currentPageIndex - 1].id);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
          const currIdx = REPORT_PAGES.findIndex(p => p.id === currentPageId);
          if (currIdx < REPORT_PAGES.length - 1) setCurrentPageId(REPORT_PAGES[currIdx + 1].id);
      }
      if (e.key === 'ArrowLeft') {
          const currIdx = REPORT_PAGES.findIndex(p => p.id === currentPageId);
          if (currIdx > 0) setCurrentPageId(REPORT_PAGES[currIdx - 1].id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageId]);

  const renderPageContent = () => {
    switch (currentPage.type) {
        case 'COVER':
            return <Hero />;
        case 'EXECUTIVE':
        case 'TEXT_SPLIT':
            return <TextLayout data={currentPage} />;
        case 'CHART':
        case 'FINANCIAL_TABLE':
        case 'RISK_MATRIX':
        case 'DIAGRAM':
            return <ChartLayout data={currentPage} />;
        case 'VISUAL_focus':
            return <WorldSection data={currentPage} />;
        default:
            return <Hero />;
    }
  };

  return (
    <div className="bg-[#050505] w-screen h-screen flex items-center justify-center overflow-hidden font-serif selection:bg-ark-cyan selection:text-black">
      
      {/* 16:9 Container Enforcement */}
      <div className="relative w-full h-full max-w-[177.78vh] max-h-[56.25vw] aspect-video bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden border border-[#222]">
        
        {/* CRT Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
        <div className="absolute inset-0 pointer-events-none z-[100] opacity-[0.1] bg-[radial-gradient(circle,transparent_60%,#000_100%)]"></div>

        <Navbar activePage={currentPageId} onNavigate={setCurrentPageId} />
        
        <main className="relative w-full h-full">
          <AnimatePresence mode='wait'>
              <motion.div
                  key={currentPageId}
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(5px)' }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="w-full h-full"
              >
                  {renderPageContent()}
              </motion.div>
          </AnimatePresence>
        </main>

        {/* Professional Footer / Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full z-40 px-12 py-8 flex items-end justify-center pointer-events-none">
            
            {/* Center: Interactive Controls (Pointer events enabled) */}
            <div className="pointer-events-auto flex items-center gap-6 bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-sm shadow-2xl transform translate-y-2 hover:translate-y-0 transition-transform duration-300 group">
                {/* Decorative Tech Lines */}
                <div className="absolute -top-1 left-0 w-2 h-1 bg-ark-cyan"></div>
                <div className="absolute -bottom-1 right-0 w-2 h-1 bg-ark-cyan"></div>

                <button 
                  onClick={handlePrev} 
                  disabled={currentPageIndex === 0}
                  className="w-8 h-8 flex items-center justify-center hover:bg-ark-cyan hover:text-black transition-all disabled:opacity-20 text-white"
                >
                    <ChevronLeft size={20} />
                </button>
                
                <div className="flex flex-col items-center min-w-[60px]">
                    <div className="text-sm font-bold font-mono tabular-nums text-ark-cyan tracking-widest">
                        {currentPageIndex.toString().padStart(2, '0')}
                    </div>
                    <div className="w-full h-[1px] bg-white/20 my-1"></div>
                    <div className="text-[10px] text-gray-500 font-mono">
                        {(REPORT_PAGES.length - 1).toString().padStart(2, '0')}
                    </div>
                </div>

                <button 
                  onClick={handleNext}
                  disabled={currentPageIndex === REPORT_PAGES.length - 1}
                  className="w-8 h-8 flex items-center justify-center hover:bg-ark-cyan hover:text-black transition-all disabled:opacity-20 text-white"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
