

import React, { useState, useEffect } from 'react';
import { PageData, ChartConfig, ChartDataPoint } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, TrendingUp, Music, Pickaxe, Hammer, Zap, Factory, Info, X, ChevronRight, Activity, Cpu, Repeat, ArrowRight, Layers, Box, ArrowDown } from 'lucide-react';

// Icon Map
const ICON_MAP: Record<string, React.ReactNode> = {
    'Users': <Users size={32} />,
    'TrendingUp': <TrendingUp size={32} />,
    'Music': <Music size={32} />,
    'Pickaxe': <Pickaxe size={48} strokeWidth={1} />,
    'Hammer': <Hammer size={48} strokeWidth={1} />,
    'Zap': <Zap size={48} strokeWidth={1} />,
    'Factory': <Factory size={48} strokeWidth={1} />,
    'Activity': <Activity size={32} />,
    'Cpu': <Cpu size={32} />,
    'Layers': <Layers size={32} />,
    'Box': <Box size={32} />
};

interface ChartLayoutProps {
  data: PageData;
}

const ChartLayout: React.FC<ChartLayoutProps> = ({ data }) => {
  const chart = data.content?.chart;
  const [showDeepDive, setShowDeepDive] = useState(false);
  const [showDetailTable, setShowDetailTable] = useState(false);

  if (!chart) return null;

  const layout = data.layout || 'SPLIT_RIGHT';
  const isCenterTop = layout === 'CENTER_TOP';
  const isGridCards = layout === 'GRID_CARDS';
  const isFullWidth = layout === 'FULL_WIDTH';
  const isVerticalInverted = layout === 'VERTICAL_INVERTED';
  const isGrid2x2 = layout === 'GRID_2X2'; 
  
  // Special handling for Radar Chart page (ID 7) to show details inline
  const isRadarPage = data.id === 7;

  // Handle Full Width Layout specifically for Executive Cards
  if (isFullWidth) {
      return (
          <section className="relative w-full h-full flex flex-col items-center font-serif bg-ark-dark/50">
             <div className="absolute inset-0 z-0 pointer-events-none">
                 <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-ark-cyan/5 to-transparent"></div>
                 {/* Hex Grid Pattern */}
                 <div className="absolute top-20 right-20 w-64 h-64 opacity-5" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'40\' viewBox=\'0 0 24 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 40c5.523 0 10-4.477 10-10V10c0-5.523 4.477-10 10-10H0v40z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'}}></div>
             </div>

             <div className="w-full max-w-[95%] mx-auto relative z-10 flex flex-col h-[85%] pt-40">
                 <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     className="mb-14 pl-2"
                 >
                     <div className="text-ark-cyan font-bold text-xl tracking-[0.3em] mb-4 uppercase flex items-center gap-2">
                        <div className="w-6 h-[2px] bg-ark-cyan"></div>
                        {data.section}
                     </div>
                     <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 font-sans">{data.title}</h2>
                     <p className="text-gray-400 font-light tracking-wide text-xl">{data.subTitle}</p>
                 </motion.div>

                 <div className="flex-grow max-h-[60vh]">
                     {renderChart(chart)}
                 </div>
             </div>
          </section>
      );
  }

  // Handle Vertical Inverted (Title -> Chart -> Text)
  if (isVerticalInverted) {
      return (
          <section className="relative w-full h-full flex flex-col items-center justify-center font-serif bg-ark-dark/50">
              <div className="w-full max-w-[90%] mx-auto h-full py-8 flex flex-col">
                  {/* Title Block */}
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     className="text-center mb-2 flex-shrink-0"
                  >
                      <div className="text-ark-cyan font-bold text-xs tracking-[0.3em] mb-4 uppercase flex items-center justify-center gap-2">
                          <div className="w-6 h-[2px] bg-ark-cyan"></div>
                          {data.section}
                          <div className="w-6 h-[2px] bg-ark-cyan"></div>
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-2 font-sans">{data.title}</h2>
                      <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">{data.subTitle}</p>
                  </motion.div>

                  {/* Chart Visual - Center */}
                  <div className="flex-grow flex items-center justify-center w-full relative min-h-0 -top-[10%]">
                      <div className="w-full h-full max-h-[35vh] flex items-center justify-center relative z-10 scale-105">
                           {renderChart(chart)}
                      </div>
                  </div>

                                                                        {/* Text Analysis - Bottom */}

                                                                        <motion.div

                                                                            initial={{ opacity: 0, y: 20 }}

                                                                            animate={{ opacity: 1, y: 0 }}

                                                                            transition={{ delay: 0.4, duration: 0.8 }}

                                                                            className="mt-0 flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[95%] mx-auto w-full pb-8 relative -top-[20%]">
                      {data.content?.bullets?.map((bullet, idx) => (
                          <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm flex flex-col justify-center h-full">
                               <div className="flex items-center gap-4 mb-4">
                                   <div className="text-ark-cyan font-mono font-bold text-3xl">0{idx+1}</div>
                                   {bullet.includes('：') && (
                                       <div className="font-bold text-white tracking-wide text-xl uppercase">
                                           {bullet.split('：')[0]}
                                       </div>
                                   )}
                               </div>
                               <p className="text-gray-300 text-lg leading-relaxed text-justify">
                                   {bullet.includes('：') ? bullet.split('：')[1] : bullet}
                               </p>
                          </div>
                      ))}
                  </motion.div>
              </div>
          </section>
      );
  }

  // Handle GRID_2X2 Layout (Full Screen Quad Grid)
  if (isGrid2x2) {
      return (
          <section className="relative w-full h-full flex flex-col font-serif bg-ark-dark/50">
              {/* Background Elements */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                  <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-ark-cyan/5 to-transparent"></div>
              </div>

              {/* Section Header */}
              <div className="relative z-10 pt-20 pb-8 text-center">
                  <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                  >
                      <div className="text-ark-cyan font-bold text-xl tracking-[0.3em] mb-4 uppercase flex items-center justify-center gap-2">
                          <div className="w-6 h-[2px] bg-ark-cyan"></div>
                          {data.section}
                          <div className="w-6 h-[2px] bg-ark-cyan"></div>
                      </div>
                  </motion.div>
              </div>

              {/* Quad Grid Content */}
              <div className="flex-grow relative z-10 flex items-center justify-center">
                  {renderChart(chart)}
              </div>
          </section>
      );
  }

  // Common Layout Structure (Split Left/Right, Center Top, Grid)
  return (
    <section className="relative w-full h-full flex items-center justify-center font-serif bg-ark-dark/50">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-ark-cyan/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
          {/* Hex Grid Pattern */}
          <div className="absolute top-20 right-20 w-64 h-64 opacity-5" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'40\' viewBox=\'0 0 24 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 40c5.523 0 10-4.477 10-10V10c0-5.523 4.477-10 10-10H0v40z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'}}></div>
      </div>


      <div className={`w-full max-w-[90%] mx-auto grid gap-16 relative z-10 ${isCenterTop || isGridCards ? 'grid-cols-1' : 'grid-cols-12'}`}>
        
        {/* TEXT CONTENT: Render FIRST usually, but checks layout for Grid spans */}
        <div className={`
             flex flex-col justify-center
             ${isCenterTop || isGridCards ? 'w-full text-center mb-6' : ''}
             ${!isCenterTop && !isGridCards ? 'col-span-4' : ''}
             ${data.id === 13 ? 'scale-90' : ''}
        `}>
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
                <div className={`text-ark-cyan font-bold text-xl tracking-[0.3em] mb-6 uppercase flex items-center gap-2 ${isCenterTop || isGridCards ? 'justify-center' : ''}`}>
                    <div className="w-6 h-[2px] bg-ark-cyan"></div>
                    {data.section}
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 font-sans">
                    {data.title}
                </h2>

                <p className={`text-xl text-gray-400 font-light mb-10 ${isCenterTop || isGridCards ? 'max-w-3xl mx-auto' : 'border-l-4 border-ark-cyan/30 pl-8'} leading-relaxed`}>
                    {data.subTitle}
                </p>

                {/* Added heading support for split layouts */}
                {!isCenterTop && !isGridCards && data.content?.heading && (
                     <div className="text-ark-cyan font-bold tracking-widest uppercase mb-6 border-b border-white/10 pb-2">
                        {data.content.heading}
                     </div>
                )}
                
                {/* Render Bullets */}
                {data.content?.bullets && data.content.bullets.length > 0 && (
                    <div className={`space-y-6 mb-10 ${isCenterTop ? 'max-w-4xl mx-auto text-left' : 'pl-2'}`}>
                        {data.content.bullets.map((bullet, idx) => {
                             // Simple bold parser
                             const parts = bullet.split(/(\*\*.*?\*\*)/g);
                             return (
                                 <div key={idx} className="flex flex-col gap-2">
                                     <div className="flex gap-4">
                                         <span className="text-ark-cyan font-mono font-bold text-lg">0{idx+1}</span>
                                         <p className="text-gray-300 text-lg leading-relaxed text-justify">
                                            {parts.map((part, i) => {
                                                if (part.startsWith('**') && part.endsWith('**')) {
                                                    return <span key={i} className="font-bold text-white">{part.slice(2, -2)}</span>;
                                                }
                                                return part;
                                            })}
                                         </p>
                                     </div>
                                     {/* Special Sub-bullet logic for ID 2 */}
                                     {data.id === 2 && data.content?.deepDive?.text[idx] && (
                                         <div className="pl-10 pr-4">
                                             <div className="flex gap-2 items-start text-sm text-gray-500">
                                                <div className="min-w-[4px] h-[4px] bg-ark-cyan/50 rounded-full mt-2"></div>
                                                <p className="leading-relaxed">{data.content.deepDive.text[idx]}</p>
                                             </div>
                                         </div>
                                     )}
                                 </div>
                             );
                        })}
                    </div>
                )}

                {/* Special rendering for Radar Page Deep Dive Text directly in sidebar */}
                {isRadarPage && data.content?.deepDive?.text && (
                    <div className="space-y-6 mb-10 pl-2">
                        {data.content.deepDive.title && (
                            <div className="text-ark-cyan font-bold tracking-widest uppercase mb-4 text-sm">
                                {data.content.deepDive.title}
                            </div>
                        )}
                        {data.content.deepDive.text.map((txt, idx) => (
                             <div key={idx} className="relative pl-6 border-l border-white/10">
                                 <div className="absolute left-[-1px] top-2 w-[1px] h-4 bg-ark-cyan"></div>
                                 <p className="text-gray-300 text-base leading-relaxed text-justify">{txt}</p>
                             </div>
                        ))}
                    </div>
                )}


                


                {/* Interaction Button - Hide if it is Radar Page (Assuming text is visible) */}
                {data.content?.deepDive && !isRadarPage && data.id !== 2 && data.id !== 13 && (
                    <div className={`${isCenterTop || isGridCards ? 'flex justify-center' : ''}`}>
                        <button 
                            onClick={() => setShowDeepDive(!showDeepDive)}
                            className="group flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 hover:border-ark-cyan hover:bg-ark-cyan/10 transition-all rounded-sm backdrop-blur-md"
                        >
                            <div className="p-1.5 bg-ark-cyan/20 rounded-full text-ark-cyan">
                                <Info size={20} />
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase text-white group-hover:text-ark-cyan transition-colors">
                                点击展开数据透视
                            </span>
                            <ChevronRight size={18} className="text-gray-500 group-hover:text-ark-cyan group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}
            </motion.div>
        </div>

        {/* CHART VISUALIZATION */}
        <div className={`
             flex items-center justify-center relative
             ${isCenterTop || isGridCards ? 'w-full' : 'col-span-8'}
             ${isGridCards ? 'h-auto' : 'h-[60vh]'}
             ${data.id === 6 ? 'top-[-10%]' : ''}
        `}>
            <div className={`w-full h-full relative z-10 flex items-center justify-center ${isGridCards ? '' : 'bg-black/20 border border-white/5 backdrop-blur-sm'}`}>
                
                {/* Decorative Corners */}
                {!isGridCards && (
                    <>
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/30"></div>
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/30"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/30"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/30"></div>
                    </>
                )}

                {/* Render FinancialTable for ID 13, else render normally */}
                {data.id === 13 && data.content?.chart?.type === 'FINANCIAL_TABLE' ? (
                    <div className="w-full max-w-full px-8 flex flex-col justify-center h-full scale-[0.85]">
                        {/* Matrix Header */}
                        <div className="grid grid-cols-4 gap-6 mb-6 border-b border-white/20 pb-4 text-lg tracking-widest uppercase text-gray-500 font-bold items-center">
                            <div className="text-center">关键指标</div>
                            <div className="text-center">{data.content.chart.seriesNames?.[0] || '悲观'}</div>
                            <div className="text-center text-ark-cyan">{data.content.chart.seriesNames?.[1] || '中性'}</div>
                            <div className="text-center">{data.content.chart.seriesNames?.[2] || '乐观'}</div>
                        </div>

                        {/* Matrix Body */}
                        <div className="space-y-2">
                            {data.content.chart.data.map((row, rowIndex) => (
                                <div key={rowIndex} className="grid grid-cols-4 gap-6 items-center py-6 border-b border-white/5 hover:bg-white/5 px-4 -mx-4 transition-colors rounded-sm group">
                                    <div className="text-center text-lg font-bold text-white">
                                        {row.label}
                                    </div>
                                    {/* Bear */}
                                    <div className="text-center font-mono text-gray-400 text-lg flex items-center justify-center">
                                        {row.value?.toFixed(row.value < 10 ? 1 : 0)} <span className="text-base ml-1 opacity-50">{row.details}</span>
                                    </div>
                                    {/* Base (Highlighted) */}
                                    <div className="text-center font-mono text-3xl font-bold text-ark-cyan relative flex items-center justify-center">
                                        {row.value2?.toFixed(row.value2 < 10 ? 1 : 0)} <span className="text-lg ml-1 opacity-80">{row.details}</span>
                                        {/* Little indicator for 'Selected' */}
                                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-ark-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    {/* Bull */}
                                    <div className="text-center font-mono text-gray-400 text-lg flex items-center justify-center">
                                        {row.value3?.toFixed(row.value3 < 10 ? 1 : 0)} <span className="text-base ml-1 opacity-50">{row.details}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Highlight / Analysis Footer */}
                         <div className="mt-8 p-6 bg-ark-cyan/5 border border-ark-cyan/20 rounded-sm backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div>
                                    <h4 className="text-ark-cyan font-bold uppercase tracking-widest text-xs mb-2">Valuation Insight</h4>
                                    <p className="text-lg text-gray-300 font-serif leading-relaxed">
                                        {data.content.chart.highlight?.split(/(\*\*.*?\*\*)/g).map((part, i) =>
                                            part.startsWith('**') && part.endsWith('**')
                                                ? <span key={i} className="font-bold text-white bg-ark-cyan/10 px-1 rounded mx-0.5">{part.slice(2, -2)}</span>
                                                : part
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    renderChart(chart)
                )}
            </div>
        </div>
      </div>

      {/* Detail Table Modal for Radar Page */}
      <AnimatePresence>
        {showDetailTable && isRadarPage && chart.data && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                 <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    onClick={() => setShowDetailTable(false)}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                 ></motion.div>
                 
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-[#0a0a0a] border border-white/20 w-full max-w-4xl max-h-[90vh] overflow-auto shadow-2xl rounded-sm p-8 z-10"
                 >
                     <button 
                        onClick={() => setShowDetailTable(false)}
                        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                     >
                        <X size={24} />
                     </button>

                     <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                         <h3 className="text-2xl font-bold text-white tracking-wide">详细评分数据对比</h3>
                     </div>

                     <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/20 text-sm uppercase tracking-widest text-gray-500">
                                    <th className="py-4 px-6 font-bold">维度 (Dimension)</th>
                                    <th className="py-4 px-6 font-bold text-ark-cyan">终末地 (Endfield)</th>
                                    <th className="py-4 px-6 font-bold text-[#06b6d4]">原神 (Genshin)</th>
                                    <th className="py-4 px-6 font-bold text-[#84cc16]">鸣潮 (Wuthering)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chart.data.map((item, index) => (
                                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 font-bold text-white text-lg">{item.label}</td>
                                        <td className="py-4 px-6 font-mono text-xl text-ark-cyan font-bold">{item.value?.toFixed(2)}</td>
                                        <td className="py-4 px-6 font-mono text-xl text-[#06b6d4]">{item.value2?.toFixed(2)}</td>
                                        <td className="py-4 px-6 font-mono text-xl text-[#84cc16]">{item.value3?.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                     </div>
                     
                     <div className="mt-6 text-right text-xs text-gray-600 font-mono uppercase tracking-widest">
                         Data Source: Sentiment Analysis Engine v2.4 (2025.11)
                     </div>
                 </motion.div>
            </div>
        )}
      </AnimatePresence>

      {/* Deep Dive Modal / Side Panel */}
      <AnimatePresence>
        {showDeepDive && data.content?.deepDive && !isRadarPage && data.id !== 2 && (
            <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="absolute right-0 top-0 h-full w-[40%] bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 p-16 shadow-[0_0_150px_rgba(0,0,0,1)]"
            >
                <button 
                    onClick={() => setShowDeepDive(false)}
                    className="absolute top-10 right-10 text-gray-500 hover:text-white transition-colors"
                >
                    <X size={32} />
                </button>

                <div className="mt-8">
                    <div className="text-ark-cyan text-sm tracking-[0.2em] mb-4 uppercase font-bold">Data Analysis</div>
                    <h3 className="text-4xl font-bold text-white mb-10 border-b border-white/10 pb-6">{data.content.deepDive.title}</h3>
                    
                    {data.content.deepDive.dataPoints && (
                        <div className="grid grid-cols-2 gap-6 mb-10">
                            {data.content.deepDive.dataPoints.map((dp, i) => (
                                <div key={i} className="bg-white/5 p-6 rounded-sm border border-white/5 hover:border-white/20 transition-colors">
                                    <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide">{dp.label}</div>
                                    <div className="text-3xl font-mono text-ark-cyan font-bold">{dp.value}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="space-y-8">
                        {data.content.deepDive.text.map((txt, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="text-ark-cyan font-mono text-sm pt-1.5 opacity-70">0{i+1}</div>
                                <p className="text-lg text-gray-300 leading-relaxed text-justify">{txt}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10">
                        <div className="text-xs text-gray-600 font-mono uppercase tracking-widest">Source: Internal Database (Verified 2025.11)</div>
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

const renderChart = (config: ChartConfig) => {
    switch (config.type) {
        case 'RADAR': return <RadarChart config={config} />;
        case 'BAR_HORIZONTAL': return <BarChartHorizontal config={config} />;
        case 'BAR_VERTICAL': return <BarChartVertical config={config} />;
        case 'SCATTER': return <ScatterPlot config={config} />;
        case 'FINANCIAL_TABLE': return <FinancialTable config={config} />;
        case 'RISK_MATRIX': return <RiskMatrix config={config} />;
        case 'DIAGRAM': return <SchematicDiagram config={config} />;
        case 'CARDS_EXPANDABLE': return <ExpandableCards config={config} />;
        case 'INDUSTRY_EVOLUTION': return <IndustryEvolutionChart config={config} />;
        case 'PIE': return <PieChart config={config} />;
        case 'QUAD_GRID': return <QuadGrid config={config} />;
        default: return <div>No Chart Data</div>;
    }
};

/* --- Sub-Components --- */

const PieChart: React.FC<{ config: ChartConfig }> = ({ config }) => {
    const total = config.data.reduce((sum, item) => sum + (item.value || 0), 0);
    let currentAngle = 0;
    const radius = 160;
    const center = 200;

    return (
        <div className="w-full h-full flex items-center justify-center gap-12">
            <div className="relative w-[400px] h-[400px]">
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-white font-bold text-lg tracking-wider uppercase">市场份额分布</div>
                 <svg width="400" height="400" viewBox="0 0 400 400" className="overflow-visible">
                     {config.data.map((item, index) => {
                         const value = item.value || 0;
                         const percentage = value / total;
                         const angle = percentage * 360;
                         
                         // Calculate path
                         const x1 = center + radius * Math.cos(Math.PI * currentAngle / 180);
                         const y1 = center + radius * Math.sin(Math.PI * currentAngle / 180);
                         const x2 = center + radius * Math.cos(Math.PI * (currentAngle + angle) / 180);
                         const y2 = center + radius * Math.sin(Math.PI * (currentAngle + angle) / 180);
                         
                         const largeArcFlag = angle > 180 ? 1 : 0;
                         
                         const pathData = [
                             `M ${center} ${center}`,
                             `L ${x1} ${y1}`,
                             `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                             `Z`
                         ].join(' ');

                         const midAngle = currentAngle + angle / 2;
                         const labelR = radius + 30;
                         const labelX = center + labelR * Math.cos(Math.PI * midAngle / 180);
                         const labelY = center + labelR * Math.sin(Math.PI * midAngle / 180);

                         // Update currentAngle for next slice
                         const prevAngle = currentAngle;
                         currentAngle += angle;

                         return (
                             <g key={index} className="group">
                                 <motion.path 
                                     d={pathData} 
                                     fill={item.color}
                                     stroke="rgba(0,0,0,0.5)"
                                     strokeWidth="2"
                                     initial={{ opacity: 0, scale: 0 }}
                                     animate={{ opacity: 0.8, scale: 1 }}
                                     whileHover={{ opacity: 1, scale: 1.05, translateX: 5 * Math.cos(Math.PI * midAngle / 180), translateY: 5 * Math.sin(Math.PI * midAngle / 180) }}
                                     transition={{ duration: 0.5, delay: index * 0.1 }}
                                     style={{ transformOrigin: 'center' }}
                                 />
                                 {/* Label Line */}
                                 <motion.line 
                                    x1={center + radius * Math.cos(Math.PI * midAngle / 180)} 
                                    y1={center + radius * Math.sin(Math.PI * midAngle / 180)} 
                                    x2={labelX} 
                                    y2={labelY} 
                                    stroke="rgba(255,255,255,0.3)" 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                 />
                                 <motion.text
                                    x={labelX}
                                    y={labelY}
                                    fill="white"
                                    fontSize="12"
                                    fontWeight="bold"
                                    textAnchor={midAngle > 90 && midAngle < 270 ? "end" : "start"}
                                    dominantBaseline="central"
                                    dx={midAngle > 90 && midAngle < 270 ? -10 : 10}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                 >
                                    {((value / total) * 100).toFixed(0)}%
                                 </motion.text>
                             </g>
                         );
                     })}
                     {/* Hollow Center for Donut effect */}
                     <circle cx={center} cy={center} r="60" fill="#050505" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                 </svg>
            </div>

            {/* Legend / List */}
            <div className="flex flex-col gap-4">
                {config.data.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }}></div>
                        <div>
                            <div className="text-white font-bold">{item.label}</div>
                            <div className="text-xs text-gray-500">{item.group}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const IndustryEvolutionChart: React.FC<{ config: ChartConfig }> = ({ config }) => {
    // Visualization of "Scissors Difference"
    
    return (
        <div className="w-full h-full p-8 flex flex-col justify-center relative">
            <div className="absolute top-4 left-4 text-xs font-mono text-gray-500 uppercase tracking-widest">Model: Utility vs Time</div>
            
            <div className="relative w-full h-[400px]">
                {/* Axes */}
                <div className="absolute left-0 bottom-0 w-full h-[1px] bg-white/20"></div>
                <div className="absolute left-0 bottom-0 w-[1px] h-full bg-white/20"></div>
                
                <div className="absolute -bottom-8 right-0 text-xs text-gray-400 font-bold uppercase tracking-widest">{config.xAxisLabel}</div>
                <div className="absolute top-0 -left-8 -rotate-90 text-xs text-gray-400 font-bold uppercase tracking-widest transform origin-bottom-left">{config.yAxisLabel}</div>

                <svg width="100%" height="100%" className="overflow-visible">
                    {/* Curve 1: Legacy (Decay) */}
                    <motion.path
                        d="M0,50 C100,50 200,300 600,350"
                        fill="none"
                        stroke="#f472b6"
                        strokeWidth="3"
                        strokeDasharray="8 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    />
                    
                    {/* Curve 2: Future (Growth) */}
                    <motion.path
                        d="M0,350 C200,350 300,300 600,50"
                        fill="none"
                        stroke="#00b2d6"
                        strokeWidth="4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    
                    {/* Intersection Point Marker */}
                    <motion.circle 
                        cx="310" cy="270" r="6" fill="#fff"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2 }}
                    />
                    
                    {/* Area fill for "Alpha" */}
                    <defs>
                        <linearGradient id="alphaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00b2d6" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#00b2d6" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                    <motion.path
                         d="M310,270 C350,250 600,50 600,50 L600,350 L310,270 Z"
                         fill="url(#alphaGradient)"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 2.2, duration: 1 }}
                    />
                </svg>

                {/* Labels */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute top-[20%] right-[10%] text-right"
                >
                    <div className="text-2xl font-bold text-ark-cyan">Gacha 4.0</div>
                    <div className="text-sm text-gray-400">System Driven Utility</div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-[20%] right-[30%] text-right"
                >
                    <div className="text-2xl font-bold text-[#f472b6]">Gacha 3.0</div>
                    <div className="text-sm text-gray-400">Content Consumption</div>
                </motion.div>
                
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5 }}
                    className="absolute top-[40%] left-[55%] bg-black/80 border border-white/20 p-4 rounded backdrop-blur-sm"
                >
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Key Insight</div>
                    <div className="text-white font-bold">{config.highlight}</div>
                </motion.div>

            </div>
        </div>
    );
};

const ExpandableCards: React.FC<{ config: ChartConfig }> = ({ config }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="w-full h-full flex gap-8 items-stretch justify-center relative px-2 py-4">
            {config.data.map((item, index) => {
                const isActive = activeIndex === index;
                const isAnyActive = activeIndex !== null;
                
                return (
                    <motion.div
                        key={index}
                        layout
                        onClick={() => setActiveIndex(isActive ? null : index)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ 
                            flex: isActive ? 3.5 : (isAnyActive ? 0.8 : 1),
                            opacity: (isAnyActive && !isActive) ? 0.4 : 1,
                            y: 0
                        }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className={`
                            relative h-full bg-[#0a0a0a] border border-white/10 cursor-pointer overflow-hidden group
                            hover:border-ark-cyan/60 transition-colors rounded-sm flex flex-col shadow-2xl
                        `}
                    >
                         {/* Card Background Visual */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                        <div className={`absolute top-0 w-full h-1.5 transition-colors duration-300 ${isActive ? 'bg-ark-cyan' : 'bg-transparent group-hover:bg-white/20'}`}></div>

                        {/* Content Container */}
                        <div className="p-6 lg:p-8 relative z-10 flex flex-col h-full">
                            
                            {/* Header Section */}
                            <div className="flex justify-between items-start mb-6">
                                <div className={`text-[12px] font-bold tracking-[0.2em] text-gray-500 uppercase border border-white/10 px-3 py-1.5 rounded transition-colors ${isActive ? 'bg-ark-cyan text-black border-ark-cyan' : ''}`}>
                                    0{index + 1} // {item.group}
                                </div>
                                {/* <div className={`text-ark-cyan transition-all duration-500 ${isActive ? 'scale-150 rotate-0' : 'scale-100 group-hover:rotate-12'}`}>
                                    {ICON_MAP[item.iconName || ''] || <Activity />}
                                </div> */}
                            </div>

                            {/* Title */}
                            <motion.h3 
                                layout="position"
                                className={`font-bold text-white mb-6 leading-none transition-all duration-500 ${isActive ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'}`}
                            >
                                {item.label}
                            </motion.h3>

                            {/* Summary Text - Fade out when active to make room, or keep if layout permits. 
                                Strategy: Keep it but distinct style.
                            */}
                            <motion.div 
                                layout="position"
                                className={`text-gray-400 font-light leading-relaxed border-l-2 border-white/20 pl-5 mb-6 transition-all duration-500 ${isActive ? 'text-lg opacity-80' : 'text-base opacity-100'}`}
                            >
                                {item.details}
                            </motion.div>
                            
                            {/* Expanded Rich Content */}
                            <AnimatePresence>
                                {isActive && item.expandedContent && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="mt-6 pt-8 border-t border-white/10 flex-grow overflow-y-auto pr-4 custom-scrollbar"
                                    >
                                        <h4 className="text-2xl font-bold text-ark-cyan mb-6 tracking-wide">{item.expandedContent.title}</h4>
                                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                            {item.expandedContent.description}
                                        </p>
                                        
                                        {/* Key Data Stats */}
                                        {item.expandedContent.dataPoints && (
                                            <div className="grid grid-cols-3 gap-6 mb-8">
                                                {item.expandedContent.dataPoints.map((dp, i) => (
                                                    <div key={i} className="bg-white/5 p-4 rounded border-l-2 border-ark-cyan">
                                                        <div className="text-xs text-gray-400 uppercase mb-2 tracking-wider">{dp.label}</div>
                                                        <div className="text-xl lg:text-3xl font-bold text-white font-mono">{dp.value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Detailed Bullets */}
                                        <ul className="space-y-4">
                                            {item.expandedContent.bullets.map((bullet, i) => (
                                                <li key={i} className="flex gap-4 text-base lg:text-lg text-gray-300 items-start">
                                                    <div className="w-1.5 h-1.5 bg-ark-cyan mt-2.5 rounded-full flex-shrink-0 shadow-[0_0_8px_#00b2d6]"></div>
                                                    <span className="leading-relaxed">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Call to Action - Hide when active */}
                            {!isActive && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-auto flex items-center gap-3 text-sm text-gray-500 uppercase tracking-[0.15em] group-hover:text-ark-cyan transition-colors"
                                >
                                    <div className="w-8 h-[1px] bg-current"></div>
                                    <span>查看详情</span>
                                    <ChevronRight size={14} />
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

const RadarChart: React.FC<{ config: ChartConfig }> = ({ config }) => {
    const numPoints = config.data.length; // Use data length as dimensions
    const radius = 180; // Larger for 16:9
    const center = 250;
    
    const getCoordinates = (value: number, index: number, max: number = 6) => {
        const angle = (Math.PI * 2 * index) / numPoints - Math.PI / 2;
        const r = (value / max) * radius;
        return {
            x: center + r * Math.cos(angle),
            y: center + r * Math.sin(angle)
        };
    };

    // Helper to generate path string for a given data key
    const pointsToPath = (dataKey: 'value' | 'value2' | 'value3', data: ChartDataPoint[]) => {
        return data.map((d, i) => {
            const val = d[dataKey] || 0;
            const { x, y } = getCoordinates(val, i);
            return `${x},${y}`;
        }).join(' ');
    };

    // Colors: Pink (Endfield), Cyan (Genshin), Green (WuWa)
    const colors = ['#ec4899', '#06b6d4', '#84cc16'];
    const fillColors = ['rgba(236, 72, 153, 0.15)', 'rgba(6, 182, 212, 0.15)', 'rgba(132, 204, 22, 0.15)'];

    return (
        <div className="relative w-[500px] h-[500px]">
            <svg width="500" height="500" viewBox="0 0 500 500">
                {/* Concentric Circles */}
                {[0.2, 0.4, 0.6, 0.8, 1].map((scale, gridIdx) => (
                    <circle 
                        key={scale} 
                        cx={center}
                        cy={center}
                        r={radius * scale}
                        fill="transparent"
                        stroke="rgba(255,255,255,0.08)"
                        strokeDasharray={gridIdx === 4 ? "0" : "4 4"}
                        strokeWidth={gridIdx === 4 ? 2 : 1}
                    />
                ))}
                
                {/* Axis Lines */}
                {config.data.map((_, i) => {
                    const { x, y } = getCoordinates(6, i);
                    return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="rgba(255,255,255,0.08)" />;
                })}

                {/* Series 1: Endfield (Pink) */}
                <motion.path 
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d={`M ${pointsToPath('value', config.data).replace(/ /g, ' L ')} Z`}
                    fill={fillColors[0]}
                    stroke={colors[0]}
                    strokeWidth="3"
                />

                 {/* Series 2: Genshin (Cyan) */}
                 <motion.path 
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                    d={`M ${pointsToPath('value2', config.data).replace(/ /g, ' L ')} Z`}
                    fill={fillColors[1]}
                    stroke={colors[1]}
                    strokeWidth="3"
                    strokeDasharray="4 4"
                />

                {/* Series 3: WuWa (Green) */}
                 <motion.path 
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                    d={`M ${pointsToPath('value3', config.data).replace(/ /g, ' L ')} Z`}
                    fill={fillColors[2]}
                    stroke={colors[2]}
                    strokeWidth="3"
                    strokeDasharray="2 2"
                />

                {/* Points on vertices */}
                {config.data.map((d, i) => {
                    const c1 = getCoordinates(d.value || 0, i);
                    const c2 = getCoordinates(d.value2 || 0, i);
                    const c3 = getCoordinates(d.value3 || 0, i);
                    return (
                        <g key={i}>
                             <circle cx={c1.x} cy={c1.y} r="4" fill={colors[0]} stroke="#000" strokeWidth="1" />
                             <circle cx={c2.x} cy={c2.y} r="3" fill={colors[1]} stroke="#000" strokeWidth="1" />
                             <circle cx={c3.x} cy={c3.y} r="3" fill={colors[2]} stroke="#000" strokeWidth="1" />
                        </g>
                    )
                })}

            </svg>
            
            {/* Axis Labels */}
            {config.data.map((item, i) => {
                 const { x, y } = getCoordinates(7, i);
                 return (
                     <div 
                        key={i} 
                        className="absolute text-sm font-bold text-gray-300 tracking-wider transform -translate-x-1/2 -translate-y-1/2 text-center bg-black/60 px-3 py-1 rounded border border-white/10 shadow-lg"
                        style={{ left: x, top: y }}
                     >
                         {item.label}
                     </div>
                 );
            })}
            
            {/* Legend */}
            <div className="absolute bottom-0 right-[-80px] flex flex-col gap-3 text-sm text-gray-400 bg-black/80 p-5 rounded border border-white/10 backdrop-blur-md">
                {config.seriesNames?.map((name, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ 
                                backgroundColor: colors[i], 
                                border: `2px solid #000`,
                                boxShadow: `0 0 8px ${colors[i]}`
                            }}
                        ></div>
                        <span style={{ color: colors[i], fontWeight: 'bold' }}>{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SchematicDiagram: React.FC<{ config: ChartConfig }> = ({ config }) => {
    // State to track the active (selected) wedge
    const [activeIndex, setActiveIndex] = useState(0);

    if (config.diagramType === 'FLYWHEEL') {
        const cx = 350;
        const cy = 350;
        const outerRadius = 260;
        const innerRadius = 200;
        const gap = 8; // Degrees gap between segments
        
        // Helper to create the arrow-wedge path
        const createArrowPath = (index: number) => {
            const segmentAngle = 360 / 3; // 120 degrees
            const startAngle = index * segmentAngle - 90; // Start at top (-90)
            const sweep = segmentAngle - gap;
            
            const startRad = (startAngle + gap/2) * Math.PI / 180;
            const endRad = (startAngle + sweep + gap/2) * Math.PI / 180;
            
            // Outer Arc
            const x1 = cx + outerRadius * Math.cos(startRad);
            const y1 = cy + outerRadius * Math.sin(startRad);
            const x2 = cx + outerRadius * Math.cos(endRad);
            const y2 = cy + outerRadius * Math.sin(endRad);
            
            // Point Tip (The arrow head) - extends slightly beyond end of arc
            const tipAngle = endRad + (5 * Math.PI / 180);
            const midRadius = (innerRadius + outerRadius) / 2;
            const xTip = cx + midRadius * Math.cos(tipAngle);
            const yTip = cy + midRadius * Math.sin(tipAngle);

            // Inner Arc
            const x3 = cx + innerRadius * Math.cos(endRad);
            const y3 = cy + innerRadius * Math.sin(endRad);
            const x4 = cx + innerRadius * Math.cos(startRad);
            const y4 = cy + innerRadius * Math.sin(startRad);
            
            return `
                M ${x1} ${y1}
                A ${outerRadius} ${outerRadius} 0 0 1 ${x2} ${y2}
                L ${xTip} ${yTip}
                L ${x3} ${y3}
                A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4}
                Z
            `;
        };

        const activeItem = config.data[activeIndex];

        return (
            <div className="relative w-[700px] h-[700px] flex items-center justify-center">
                
                {/* SVG Layer for Shape and Interaction */}
                <svg width="700" height="700" viewBox="0 0 700 700" className="overflow-visible absolute inset-0">
                    <defs>
                         <filter id="glow-active">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    {config.data.map((item, index) => {
                        const isActive = activeIndex === index;
                        const midAngle = (index * 120) - 90 + 60; // Center of the segment
                        const labelRadius = (innerRadius + outerRadius) / 2;
                        const lx = cx + labelRadius * Math.cos(midAngle * Math.PI / 180);
                        const ly = cy + labelRadius * Math.sin(midAngle * Math.PI / 180);

                        return (
                            <g 
                                key={index} 
                                onClick={() => setActiveIndex(index)}
                                className="cursor-pointer"
                            >
                                {/* The Segment Shape */}
                                <motion.path
                                    d={createArrowPath(index)}
                                    fill={isActive ? item.color : 'rgba(20, 20, 20, 0.8)'}
                                    stroke={isActive ? 'white' : 'rgba(255,255,255,0.2)'}
                                    strokeWidth={isActive ? 2 : 1}
                                    filter={isActive ? "url(#glow-active)" : ""}
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ 
                                        scale: isActive ? 1.05 : 1, 
                                        opacity: 1
                                    }}
                                    transition={{ duration: 0.4 }}
                                    style={{ transformOrigin: 'center' }}
                                />
                                
                                {/* Segment Label inside the ring */}
                                <text
                                    x={lx} y={ly}
                                    textAnchor="middle"
                                    dominantBaseline="central"
                                    fill={isActive ? 'black' : 'white'}
                                    fontSize="14"
                                    fontWeight="bold"
                                    style={{ pointerEvents: 'none' }}
                                >
                                    {item.label.split(' ')[0]} {/* Simple label */}
                                </text>
                            </g>
                        );
                    })}

                    {/* Central Hub Circle */}
                    <circle cx={cx} cy={cy} r={innerRadius - 20} fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.1)" />
                    <circle cx={cx} cy={cy} r={innerRadius - 25} fill="none" stroke={activeItem.color} strokeWidth="2" strokeDasharray="10 5" className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: 'center' }}/>
                </svg>

                {/* HTML Overlay for Central Content (Easier text layout) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div 
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-[320px] text-center pointer-events-auto"
                    >
                         <div className="flex justify-center mb-4 text-ark-cyan">
                             {React.cloneElement(ICON_MAP[activeItem.iconName || ''] as React.ReactElement, { size: 48 })}
                         </div>
                         <h3 className="text-3xl font-bold text-white mb-2">{activeItem.label}</h3>
                         <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">{activeItem.group}</div>
                         <div className="w-12 h-[2px] bg-ark-cyan mx-auto mb-6"></div>
                         <p className="text-gray-300 text-base leading-relaxed whitespace-pre-line">
                             {activeItem.details}
                         </p>
                    </motion.div>
                </div>
            </div>
        );
    }

    if (config.diagramType === 'CORE_LOOP') {
        return (
            <div className="flex justify-between w-full max-w-[95%] px-4 items-stretch gap-8">
                {config.data.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="w-full bg-black/40 border border-white/10 hover:border-ark-cyan hover:bg-white/5 transition-all p-4 flex flex-col items-center text-center group h-[240px] rounded-sm relative overflow-hidden shadow-xl"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-ark-cyan/50 transition-colors"></div>
                            <div className="text-[10px] font-mono text-gray-500 mb-4 w-full text-left tracking-widest">PHASE 0{index+1}</div>
                            
                            <div className="flex-grow flex items-center justify-center mb-4 text-white/80 group-hover:text-ark-cyan group-hover:scale-110 transition-all duration-500">
                                {React.cloneElement(ICON_MAP[item.iconName || ''] as React.ReactElement, { size: 48 })}
                            </div>

                            <div className="w-full border-t border-dashed border-white/10 pt-4">
                                <h4 className="text-white font-bold tracking-[0.1em] text-lg mb-2">{item.label}</h4>
                                <div className="text-xs text-gray-400 font-mono leading-relaxed whitespace-pre-line">
                                    {item.details}
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Down Arrow for Vertical Flow if needed, here we use horizontal flow so ArrowRight */}
                        {index < config.data.length - 1 && (
                            <div className="hidden">
                                {/* Hidden in flex row, used for spacing */}
                            </div>
                        )}
                        
                    </div>
                ))}
                
                {/* Connecting Arrows Overlay (Absolute or Flex inter-item) */}
                {/* For simplicity, relying on gap, or we can add chevrons between */}
            </div>
        );
    }
    return null;
};

const BarChartVertical: React.FC<{ config: ChartConfig }> = ({ config }) => {
    return (
        <div className="w-full h-full flex items-end justify-around gap-16 px-16 pb-12 relative">
             {config.data.map((item, index) => (
                 <div key={index} className="flex flex-col items-center justify-end h-full flex-1 group relative">
                      {/* Value Label */}
                      <div className="text-4xl font-bold mb-6 font-mono" style={{ color: item.color }}>
                          {item.value}
                          <span className="text-lg ml-1 opacity-60">%</span>
                      </div>
                      
                      {/* The Bar */}
                      <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${item.value}%` }}
                          transition={{ duration: 1, delay: index * 0.1, ease: "circOut" }}
                          className="w-full max-w-[100px] relative rounded-t-sm"
                          style={{ 
                              backgroundColor: `${item.color}33`, // 20% opacity
                              borderTop: `4px solid ${item.color}`
                          }}
                      >
                          {/* Inner glowing core effect */}
                          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/0 to-transparent"></div>
                      </motion.div>

                      {/* Labels */}
                      <div className="mt-8 text-xl text-center text-white font-bold tracking-wide w-full h-12 flex items-center justify-center">
                          {item.label}
                      </div>
                      <div className="text-sm text-gray-400 uppercase font-mono tracking-widest mt-2">{item.group}</div>
                      <div className="text-xs text-gray-600 mt-1">{item.details}</div>
                 </div>
             ))}
        </div>
    );
};

const BarChartHorizontal: React.FC<{ config: ChartConfig }> = ({ config }) => {
    return (
        <div className="w-full max-w-4xl flex flex-col gap-8">
            {config.data.map((item, index) => (
                <div key={index} className="w-full group">
                    <div className="flex justify-between items-end mb-3 text-lg">
                        <span className="text-gray-200 font-bold tracking-wide">{item.label}</span>
                    </div>
                    <div className="h-8 w-full bg-white/5 overflow-hidden relative border border-white/10 rounded-sm">
                         <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: `${(item.value! / 150) * 100}%` }}
                             transition={{ duration: 1, delay: index * 0.1 }}
                             className="h-full relative"
                             style={{ backgroundColor: item.color }}
                         />
                    </div>
                </div>
            ))}
        </div>
    );
};

const ScatterPlot: React.FC<{ config: ChartConfig }> = ({ config }) => {
     // Generate path data for the connection line
     const points = config.data.map(item => ({
         x: item.x, 
         y: item.y
     }));
     
     // Calculate coordinates for SVG (0,0 is top-left)
     // Data y is 0-100 (bottom-up), SVG y is 0-100 (top-down)
     const p1 = { x: points[0].x, y: 100 - points[0].y };
     const p2 = { x: points[1].x, y: 100 - points[1].y };
     // Revert P3 to its original coordinate, let the curve align naturally
     const p3 = { x: points[2].x, y: 100 - points[2].y };

     // Catmull-Rom spline logic for smooth curve passing through all points
     const k = 0.3; // Tension
     const p2_tangent_x = (p3.x - p1.x) * k;
     const p2_tangent_y = (p3.y - p1.y) * k;

     const cp2_left_x = p2.x - p2_tangent_x;
     const cp2_left_y = p2.y - p2_tangent_y;
     const cp2_right_x = p2.x + p2_tangent_x;
     const cp2_right_y = p2.y + p2_tangent_y;

     const cp1_right_x = p1.x + (p2.x - p1.x) * k;
     const cp1_right_y = p1.y; 

     const cp3_left_x = p3.x - (p3.x - p2.x) * k;
     const cp3_left_y = p3.y - (p3.y - p2.y) * k;

     const pathD = `M ${p1.x} ${p1.y} 
                    C ${cp1_right_x} ${cp1_right_y}, ${cp2_left_x} ${cp2_left_y}, ${p2.x} ${p2.y}
                    C ${cp2_right_x} ${cp2_right_y}, ${cp3_left_x} ${cp3_left_y}, ${p3.x} ${p3.y}`;

     return (
        <div className="w-full h-full max-h-[500px] relative border-l border-b border-white/20 bg-white/[0.01]">
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                <style>
                    {`
                        @keyframes moveBelt {
                            to { stroke-dashoffset: -8; }
                        }
                        .conveyor-belt {
                            animation: moveBelt 1s linear infinite;
                        }
                    `}
                </style>
                <defs>
                    <linearGradient id="blockGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(0,102,119,0.8)" />
                        <stop offset="100%" stopColor="rgba(0,140,158,0.9)" />
                    </linearGradient>
                    <filter id="blockGlow">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="blur" />
                        <feFlood floodColor="#00b2d6" floodOpacity="0.5" result="flood" />
                        <feComposite in="flood" in2="blur" operator="in" result="glow" />
                        <feMerge>
                            <feMergeNode in="glow"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* 1. Outer Track Base (Wider, darker) */}
                <path 
                    d={pathD}
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="14"
                    strokeLinecap="butt"
                />
                
                {/* 2. Inner Track Border (Slightly lighter dark) */}
                <path 
                    d={pathD}
                    fill="none"
                    stroke="#333"
                    strokeWidth="10"
                    strokeLinecap="butt"
                />

                {/* 3. Moving Blocks (The Conveyor Plates) - Green/Yellow Gradient */}
                <path 
                    d={pathD}
                    fill="none"
                    stroke="url(#blockGradient)"
                    strokeWidth="6" // Narrower
                    strokeLinecap="butt" 
                    strokeDasharray="4 4" // Shorter dash and gap for more blocks
                    className="conveyor-belt"
                    filter="url(#blockGlow)"
                    opacity="0.9"
                />
            </svg>

            {config.data.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.3 }}
                    className="absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer group z-20"
                    style={{
                        left: `${item.x}%`,
                        bottom: `${item.y}%`,
                        backgroundColor: '#0a0a0a',
                        border: `2px solid ${item.color}`,
                        boxShadow: `0 0 15px ${item.color}aa`
                    }}
                >
                    {/* Inner Dot */}
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/90 border text-xs p-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none shadow-xl rounded-sm backdrop-blur-md"
                         style={{ borderColor: item.color }}
                    >
                        <span className="font-bold uppercase tracking-wider block mb-1" style={{ color: item.color }}>{item.group}</span>
                        <span className="text-white font-mono">{item.label}</span>
                    </div>
                </motion.div>
            ))}
            {/* Grid */}
            <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(0,178,214,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,178,214,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
            {/* Axis Labels */}
            <div className="absolute -left-12 top-1/2 -rotate-90 text-sm text-[#00b2d6] tracking-widest uppercase opacity-60">满意度</div>
            <div className="absolute bottom-[-2.5rem] left-1/2 text-sm text-[#00b2d6] tracking-widest uppercase opacity-60">游玩时长 (小时)</div>
        </div>
     );
};




const FinancialTable: React.FC<{ config: ChartConfig; renderCards?: boolean }> = ({ config, renderCards }) => {

    // Using the data from `constants.ts` (id 13) for calculation
    // Data structure: 
    // data[0] is scenarios
    // data[1] is 2026E Total Revenue
    // data[2] is Corresponding Valuation (市值)

    const revenueData = config.data[1]; // 2026E Total Revenue
    const valuationData = config.data[2]; // Corresponding Valuation

    // Get Base Case values from data.value2
    const baseRevenue = parseInt(revenueData.value2?.match(/\d+/)?.[0] || '0');
    const baseValuation = parseInt(valuationData.value2?.match(/\d+/)?.[0] || '0');
    const basePsMultiple = parseInt(valuationData.value2?.match(/\((\d+)x\)/)?.[1] || '0');

    if (renderCards) {
        return (
            <div className="mt-10 flex flex-col gap-6 w-full">
                 <div className="flex-1 bg-white/5 p-8 border-t-4 border-ark-cyan relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-2 opacity-10"><TrendingUp size={80} /></div>
                     <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-bold">中性目标估值 (Base Case)</div>
                     <div className="text-5xl font-black text-white">{baseValuation} 亿 <span className="text-xl font-normal text-gray-500">RMB</span></div>
                 </div>
                 <div className="flex-1 bg-white/5 p-8 border-t-4 border-white/20 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-2 opacity-10"><Activity size={80} /></div>
                     <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-bold">合理 P/S 倍数 (Multiple)</div>
                     <div className="text-5xl font-black text-white">{basePsMultiple}.0x</div>
                 </div>
            </div>
        );
    }

    // Default to rendering table
    return (
        <div className="w-full">
            <div className="grid grid-cols-4 gap-6 mb-6 border-b border-white/20 pb-4 text-sm tracking-widest uppercase text-gray-500 font-bold">
                <div className="pl-4">情景</div>
                <div className="text-right">2026E 总营收</div>
                <div className="text-right">对应估值 (市值)</div>
                <div className="text-right pr-4">P/S 倍数</div>
            </div>

            <div className="space-y-2">
                {[0,1,2].map((scenarioIndex) => {
                    const scenario = config.data[0].value?.split(' (')[0];
                    const revenue = config.data[1][`value${scenarioIndex === 0 ? '' : scenarioIndex + 1}` as keyof ChartDataPoint];
                    const valuation = config.data[2][`value${scenarioIndex === 0 ? '' : scenarioIndex + 1}` as keyof ChartDataPoint];
                    const psMultiple = valuation?.match(/\((\d+)x\)/)?.[1];

                    return (
                        <div key={scenarioIndex} className="grid grid-cols-4 gap-6 items-center py-6 border-b border-white/5 hover:bg-white/5 px-4 -mx-4 transition-colors rounded-sm group">
                            <div classNameName="pl-4 text-xl font-bold" style={{ color: scenarioIndex === 1 ? '#00b2d6' : 'white' }}>
                                {config.data[0][`value${scenarioIndex === 0 ? '' : scenarioIndex + 1}` as keyof ChartDataPoint]?.split(' ')[0]}
                            </div>
                            <div className="text-right font-mono text-gray-400 text-lg">{revenue?.split(' ')[0]}</div>
                            <div className="text-right font-mono text-xl font-bold" style={{ color: scenarioIndex === 1 ? '#00b2d6' : 'white' }}>{valuation?.split(' ')[0]}</div>
                            <div className="text-right font-mono text-gray-500 text-base">{psMultiple}x</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const RiskMatrix: React.FC<{ config: ChartConfig }> = ({ config }) => {
    return (
        <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {config.data.map((item, index) => (
                 <div key={index} className="bg-black/40 border border-white/10 p-8 hover:border-ark-cyan transition-colors group relative overflow-hidden flex flex-col justify-between h-[320px]">
                     <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-xs text-gray-500 uppercase tracking-widest border border-white/10 px-2 py-1 rounded">{item.group}</div>
                            <div className="w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]" style={{color: item.color, backgroundColor: item.color}}></div>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4 leading-tight">{item.label}</h4>
                        <p className="text-sm text-gray-400 mb-6">{item.details}</p>
                     </div>

                     <div className="relative pt-4 border-t border-dashed border-white/20">
                         <div className="text-xs text-ark-cyan uppercase mb-1 font-bold">Mitigation Strategy</div>
                         <p className="text-base text-gray-300 leading-relaxed font-light">{item.mitigation}</p>
                     </div>
                 </div>
            ))}
        </div>
    );
};

const QuadGrid: React.FC<{ config: ChartConfig }> = ({ config }) => {
    return (
        <div className="w-full h-full grid grid-cols-2 gap-12 px-16 py-8 scale-90">
            {config.data.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative bg-white/[0.02] p-10 group"
                >
                    {/* Subtle left accent line */}
                    <div className="absolute left-0 top-0 w-[2px] h-full opacity-30" style={{ backgroundColor: item.color }}></div>

                    {/* Header */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-3 leading-tight" style={{ color: item.color }}>
                            {item.label}
                        </h3>
                        <p className="text-base text-gray-500 italic leading-relaxed">
                            {item.subtitle}
                        </p>
                    </div>

                    {/* Content bullets */}
                    <ul className="space-y-6">
                        {item.bullets?.map((bullet, idx) => {
                            // Parse bold text with *text* syntax
                            const parts = bullet.split(/(\*.*?\*)/g);
                            return (
                                <li key={idx} className="flex gap-4 items-start">
                                    <div className="text-lg font-mono font-bold opacity-30 flex-shrink-0" style={{ color: item.color }}>0{idx + 1}</div>
                                    <p className="text-gray-300 text-base leading-relaxed">
                                        {parts.map((part, i) => {
                                            if (part.startsWith('*') && part.endsWith('*')) {
                                                return <span key={i} className="font-bold text-white">{part.slice(1, -1)}</span>;
                                            }
                                            return part;
                                        })}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>
            ))}
        </div>
    );
};

export default ChartLayout;