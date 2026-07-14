/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { objectionsData } from "../data";
import { HelpCircle, ChevronDown, ChevronUp, AlertCircle, RefreshCw, Star, Info } from "lucide-react";

export default function Objections() {
  const [openObjections, setOpenObjections] = useState<Record<string, boolean>>({});
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const toggleObjection = (id: string) => {
    setOpenObjections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-8">
      {/* Intro section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-white">Contorno de Objeções (Teoria)</h3>
          <p className="text-emerald-300/80 text-sm">Aprenda a reverter as principais desculpas ou medos dos clientes e transforme desconfiança em adesões.</p>
        </div>
        <div className="bg-amber-500/15 border border-amber-500/30 px-3 py-1.5 text-amber-400 text-xs font-semibold flex items-center gap-1.5 shrink-0 self-start md:self-center rounded-xl shadow-sm">
          <Info className="w-4 h-4" />
          A chave para o Fechamento
        </div>
      </div>

      {/* Grid Layout: Flip Cards */}
      <div className="space-y-6">
        <h4 className="text-white font-bold font-display text-lg border-b border-emerald-800/40 pb-2">Flashcards de Treinamento (Clique para virar)</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectionsData.map((obj) => {
            const isFlipped = flippedCardId === obj.id;
            return (
              <div 
                key={obj.id} 
                id={`flashcard-${obj.id}`}
                className="perspective h-72 cursor-pointer group"
                onClick={() => setFlippedCardId(isFlipped ? null : obj.id)}
              >
                <div 
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full backface-hidden p-6 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 flex flex-col justify-between hover:border-emerald-500/30 hover:bg-emerald-900/30 transition-all shadow-lg shadow-emerald-950/20">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-900 text-amber-400 text-[10px] font-bold uppercase tracking-wide">
                        Objeção Comum
                      </div>
                      <h5 className="text-white font-bold font-display text-base leading-snug group-hover:text-emerald-400 transition-colors">
                        {obj.title}
                      </h5>
                      <p className="text-emerald-300/70 text-xs italic leading-relaxed">
                        "{obj.customerText}"
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-emerald-500/50 text-[10px] font-bold tracking-wider uppercase pt-4 border-t border-emerald-800/40">
                      <span>Clique para Ver Resposta</span>
                      <RefreshCw className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-180 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 p-5 rounded-3xl bg-gradient-to-b from-emerald-900/40 to-emerald-950 border border-emerald-800/50 flex flex-col justify-between overflow-y-auto shadow-xl scrollbar-thin">
                    <div className="space-y-2 text-left">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400 block">Resposta Recomendada</span>
                      <p className="text-emerald-100 text-xs leading-relaxed">
                        {obj.responseText}
                      </p>
                      
                      <div className="pt-2 border-t border-emerald-800/40 mt-2">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400/80 block">Psicologia do argumento</span>
                        <p className="text-emerald-300/70 text-[10px] leading-relaxed italic">
                          {obj.explanation}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right text-[10px] text-emerald-400 font-bold uppercase tracking-wider pt-2 border-t border-emerald-800/30">
                      Voltar
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accordion Layout for Easy Reading */}
      <div id="objections-accordion-list" className="space-y-4">
        <h4 className="text-white font-bold font-display text-lg border-b border-emerald-800/40 pb-2">Manual Completo de Contorno (Visualização Rápida)</h4>
        
        <div className="space-y-3">
          {objectionsData.map((obj) => {
            const isOpen = !!openObjections[obj.id];
            return (
              <div 
                key={obj.id} 
                id={`accordion-${obj.id}`}
                className="rounded-2xl border border-emerald-800/40 bg-emerald-900/20 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleObjection(obj.id)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4 bg-emerald-900/10 hover:bg-emerald-900/20 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ?
                    </span>
                    <div>
                      <h5 className="text-white font-bold text-sm">{obj.title}</h5>
                      <p className="text-emerald-400/60 text-xs mt-0.5 line-clamp-1 italic">"{obj.customerText}"</p>
                    </div>
                  </div>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-emerald-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="p-4 bg-emerald-950/80 border-t border-emerald-800/40 space-y-3 text-sm">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">O que dizer para o cliente:</span>
                      <p className="text-emerald-100 leading-relaxed bg-emerald-900/20 p-3 rounded-xl border border-emerald-800/40 font-sans italic">
                        "{obj.responseText}"
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Por que isso funciona:</span>
                      <p className="text-emerald-300/80 text-xs leading-relaxed">
                        {obj.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Perspective styling for flip cards */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
