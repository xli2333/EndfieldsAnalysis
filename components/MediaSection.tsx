import React from 'react';
import { PageData, MediaItem } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface MediaSectionProps {
  data: PageData;
}

const MediaSection: React.FC<MediaSectionProps> = ({ data }) => {
  const items = data.content?.items as MediaItem[];

  // Helper to determine grid span based on index
  const getGridClass = (index: number) => {
    if (index === 0) return 'md:col-span-2 md:row-span-2';
    if (index === 1) return 'md:col-span-1 md:row-span-2';
    return 'md:col-span-1 md:row-span-1';
  };

  return (
    <section className="bg-white min-h-screen pt-28 pb-16 relative font-serif text-black overflow-hidden">
       {/* High-Key Lighting Ambience */}
       <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gray-100 blur-[100px] rounded-full"></div>
       
       <div className="max-w-[1800px] mx-auto px-8 md:px-16 relative z-10">
           
           <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
               <div>
                   <h2 className="text-7xl font-light tracking-tighter mb-4 text-black">{data.title}</h2>
                   <div className="flex items-center gap-3">
                        <div className="h-[2px] w-12 bg-black"></div>
                        <p className="text-sm font-bold tracking-widest uppercase">{data.subTitle} / 可视化矩阵</p>
                   </div>
               </div>
               <div className="max-w-xs text-right hidden md:block">
                   <p className="text-gray-500 text-xs leading-relaxed font-sans text-justify">
                       该矩阵展示了当前生态系统中的关键组成部分。视觉资产通过高保真渲染呈现，旨在传达品牌核心的极简主义美学。
                   </p>
               </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[70vh]">
               {items?.map((item, index) => (
                   <motion.div 
                       key={item.id} 
                       className={`group relative overflow-hidden bg-gray-100 cursor-pointer ${getGridClass(index)}`}
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.8, delay: index * 0.1 }}
                   >
                       <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                       />
                       
                       {/* Information overlay slide-up */}
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                       
                       <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                           <div className="flex justify-between items-end border-b border-white/40 pb-4 mb-2">
                               <div>
                                    <span className="block text-[10px] tracking-widest uppercase mb-1 opacity-70">{item.enTitle}</span>
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                               </div>
                               <div className="bg-white text-black p-2 rounded-full">
                                    <ArrowUpRight size={16} />
                               </div>
                           </div>
                           <div className="flex gap-2">
                               <span className="px-2 py-1 bg-white/20 backdrop-blur text-[10px] rounded">{item.category}</span>
                           </div>
                       </div>
                       
                       {/* Floating Index */}
                       <div className="absolute top-4 right-4 text-white/50 text-xl font-black font-sans z-10 mix-blend-overlay">
                           {(index + 1).toString().padStart(2, '0')}
                       </div>
                   </motion.div>
               ))}
           </div>
       </div>
    </section>
  );
};

export default MediaSection;