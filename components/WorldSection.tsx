import React from 'react';
import { motion } from 'framer-motion';
import { PageData } from '../types';

interface WorldSectionProps {
  data: PageData;
}

const WorldSection: React.FC<WorldSectionProps> = ({ data }) => {
  const { content } = data;

  return (
    <section className="bg-black h-screen relative overflow-hidden flex flex-col justify-center font-serif">
      
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
          <img 
            src={content?.visualAsset || 'https://picsum.photos/1920/1080'} 
            alt="Visual Focus" 
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-[2s]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
              <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 border border-ark-cyan/50 text-ark-cyan text-[10px] tracking-widest uppercase rounded bg-ark-cyan/10 backdrop-blur">
                      Strategic Focus
                  </span>
                  <span className="text-gray-500 text-xs tracking-widest uppercase">{data.section}</span>
              </div>

              <h2 className="text-6xl md:text-8xl font-medium text-white mb-8 leading-none tracking-tight">
                  {data.title}
              </h2>
              
              <p className="text-2xl text-gray-300 font-light mb-12 border-l-4 border-ark-cyan pl-6">
                  {data.subTitle}
              </p>

              <div className="space-y-6">
                  {content?.bullets?.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5"></div>
                          <p className="text-lg text-gray-400 font-light leading-relaxed">{bullet}</p>
                      </div>
                  ))}
              </div>
          </motion.div>

      </div>
      
      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-ark-cyan to-transparent opacity-50"></div>
    </section>
  );
};

export default WorldSection;