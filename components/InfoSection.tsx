import React from 'react';
import { PageData, NewsItem } from '../types';
import { motion } from 'framer-motion';

interface InfoSectionProps {
  data: PageData;
}

const InfoSection: React.FC<InfoSectionProps> = ({ data }) => {
  const items = data.content?.items as NewsItem[];

  return (
    <section className="bg-ark-dark min-h-screen pt-28 pb-12 relative overflow-hidden font-serif flex flex-col justify-center">
      {/* HUD Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
           style={{ backgroundImage: 'radial-gradient(circle at center, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="max-w-[1800px] mx-auto px-8 w-full relative z-10">
        
        {/* Dashboard Header */}
        <div className="flex justify-between items-end mb-12">
            <div>
                 <h2 className="text-6xl font-medium text-white mb-2 tracking-tight">{data.title}</h2>
                 <p className="text-ark-cyan text-sm tracking-[0.3em] uppercase">{data.subTitle} · 实时数据流</p>
            </div>
            <div className="hidden md:block">
                 <div className="flex gap-2 mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] tracking-widest text-gray-400">系统在线</span>
                 </div>
                 <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white/30 w-2/3"></div>
                 </div>
            </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          
          {/* Main Visual / Context Card (Takes up 2x2 space) */}
          <motion.div 
             className="md:col-span-2 md:row-span-2 glass-panel rounded-2xl p-0 overflow-hidden relative group min-h-[400px]"
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6 }}
          >
               <img 
                 src={`https://picsum.photos/seed/${data.id + 20}/1000/1000`} 
                 alt="Analytics" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale mix-blend-overlay" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-3xl font-bold text-white mb-4">综合态势评估</h3>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                        当前数据集展示了关键性能指标与市场反馈的实时快照。所有数据点均经过三方机构审计校准。
                    </p>
               </div>
          </motion.div>

          {/* Data Cards */}
          {items?.map((item, index) => (
               <motion.div 
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                   className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:bg-white/5 transition-all duration-300 group border-t-2 border-t-transparent hover:border-t-ark-cyan"
               >
                   <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] tracking-widest text-gray-500 font-sans border border-white/10 px-2 py-0.5 rounded">
                            {item.id.toString().padStart(2, '0')}
                        </span>
                        <span className="text-ark-cyan text-xs font-bold tracking-widest opacity-80">
                            {item.category}
                        </span>
                   </div>
                   
                   <div>
                       <div className="text-xs text-gray-500 mb-2 font-sans tracking-widest">{item.date}</div>
                       <h4 className="text-lg font-bold leading-snug text-white group-hover:text-ark-cyan transition-colors">
                           {item.title}
                       </h4>
                   </div>

                   {/* Decorative visual element per card */}
                   <div className="mt-4 w-full h-[1px] bg-gradient-to-r from-white/20 to-transparent group-hover:from-ark-cyan/50 transition-all"></div>
               </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default InfoSection;