
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-full overflow-hidden bg-ark-dark flex flex-col justify-end pb-20 font-serif">
      {/* Tech Background Grid */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[#080808]"></div>
         <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-white/[0.02]"></div>
         {/* Grid Lines */}
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '100px 100px'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-[90%] mx-auto grid grid-cols-12 gap-8 items-end">
        
        {/* Main Title Block - Bottom Left */}
        <div className="col-span-8">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           >
                <div className="flex items-center gap-4 mb-8">
                    <span className="px-3 py-1 border border-ark-cyan text-ark-cyan rounded-sm text-[10px] tracking-widest uppercase bg-ark-cyan/10">
                        项目代号：终末地
                    </span>
                    <span className="h-[1px] w-20 bg-ark-cyan/50"></span>
                    <span className="text-[10px] text-gray-500 font-mono">DATE: 2025.11.30</span>
                </div>
                
                <h1 className="text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8 font-sans">
                    鹰角网络：<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ark-cyan to-white">价值重构</span>
                </h1>
                
                <p className="text-xl font-light text-gray-400 max-w-xl leading-relaxed border-l-2 border-ark-cyan pl-6 bg-gradient-to-r from-white/5 to-transparent py-4">
                    从“单品独角兽”到“工业化平台”的代际跃迁
                </p>
           </motion.div>
        </div>

        {/* Floating Data Panel - Bottom Right - Removed */}
        <div className="col-span-4 flex flex-col items-end">
        </div>

      </div>
    </section>
  );
};

export default Hero;
