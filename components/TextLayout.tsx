
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageData } from '../types';
import { Plus, Minus } from 'lucide-react';

interface TextLayoutProps {
  data: PageData;
}

const TextLayout: React.FC<TextLayoutProps> = ({ data }) => {
  const { content } = data;
  const layout = data.layout || 'SPLIT_RIGHT';
  const isSplitLeft = layout === 'SPLIT_LEFT';
  const [expanded, setExpanded] = useState(false);
  
  return (
    <section className="relative w-full h-full flex items-center justify-center font-serif px-20">
      
      {/* Background Decor */}
      <div className={`absolute top-0 w-[42%] h-full bg-white/[0.02] border-r border-white/5 pointer-events-none ${isSplitLeft ? 'right-0 border-l border-r-0' : 'left-0'}`}></div>

      <div className="w-full max-w-[1700px] grid grid-cols-12 gap-20 relative z-10 items-center">
        
        {/* Title Column */}
        <div className={`col-span-5 flex flex-col justify-center ${isSplitLeft ? 'order-2 pl-16' : 'order-1 pr-16'}`}>
            <motion.div 
                initial={{ opacity: 0, x: isSplitLeft ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-ark-cyan font-bold text-xl tracking-[0.4em] mb-8 uppercase flex items-center gap-4">
                    <span className="w-1.5 h-8 bg-ark-cyan shadow-[0_0_15px_#00b2d6]"></span>
                    {data.section}
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-10 font-sans">
                    {data.title}
                </h1>

                <p className="text-2xl text-gray-300 font-light leading-relaxed border-l-4 border-white/10 pl-8">
                   {data.subTitle}
                </p>
            </motion.div>
        </div>

        {/* Content Column */}
        <div className={`col-span-7 flex flex-col justify-center ${isSplitLeft ? 'order-1' : 'order-2'}`}>
            <motion.div 
                className="space-y-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                {content?.heading && (
                    <h2 className="text-2xl font-bold text-white tracking-widest uppercase border-b border-white/20 pb-6 mb-8 flex justify-between items-end">
                        <span>{content.heading}</span>
                        <div className="flex gap-2">
                             <span className="w-2 h-2 bg-white/30"></span>
                             <span className="w-2 h-2 bg-white/30"></span>
                        </div>
                    </h2>
                )}

                <div className="space-y-8">
                    {content?.bullets?.map((bullet, idx) => (
                        <div key={idx} className="group relative pl-12 transition-all duration-300">
                            <span className="absolute left-0 top-1 text-xl font-bold text-gray-600 font-mono group-hover:text-ark-cyan transition-colors">
                                {(idx + 1).toString().padStart(2, '0')}
                            </span>
                            <div className="text-gray-300 text-lg lg:text-xl font-light leading-relaxed">
                                {bullet.includes('：') ? (
                                    <>
                                        <span className="font-bold text-white block mb-2 tracking-wide text-xl">
                                            {bullet.split('：')[0]}
                                        </span>
                                        <span className="text-gray-400 text-lg">
                                            {bullet.split('：')[1]}
                                        </span>
                                    </>
                                ) : (
                                    bullet
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Expandable Deep Dive */}
                {content?.deepDive && (
                    <div className="mt-12 border border-white/10 bg-black/30 rounded-sm overflow-hidden transition-all">
                        <button 
                            onClick={() => setExpanded(!expanded)}
                            className="w-full flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <span className="text-sm font-bold text-ark-cyan uppercase tracking-widest flex items-center gap-3">
                                <div className="w-2 h-2 bg-ark-cyan rounded-full animate-pulse"></div>
                                数据支撑 / {content.deepDive.title}
                            </span>
                            {expanded ? <Minus size={20} /> : <Plus size={20} />}
                        </button>
                        
                        <AnimatePresence>
                            {expanded && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="border-t border-white/5"
                                >
                                    <div className="p-8 text-base text-gray-300 leading-relaxed grid gap-4 bg-black/50">
                                        {content.deepDive.text.map((t, i) => (
                                            <p key={i}>• {t}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TextLayout;
