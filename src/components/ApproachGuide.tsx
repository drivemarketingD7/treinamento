/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { scriptAbordagem, bloco2Abordagem, processoStandData, comportamentoCampoData, manualRapidoData } from "../data";
import { MessageSquare, Star, ArrowRight, Zap, CheckCircle2, ShieldAlert, Sparkles, UserCheck, UserX } from "lucide-react";

export default function ApproachGuide() {
  const [activeTab, setActiveTab] = useState<"script" | "processo" | "comportamento">("script");

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Divider */}
      <div className="border-t border-emerald-900/40 pt-8 space-y-1">
        <h3 className="text-xl md:text-2xl font-bold font-display text-white">Roteiro de Abordagem Prática</h3>
        <p className="text-emerald-300/80 text-xs sm:text-sm">Roteiros obrigatórios e scripts práticos para atuar com energia alta no stand.</p>
      </div>

      {/* Tab Selectors */}
      <div id="approach-tab-selectors" className="flex flex-wrap gap-2.5 border-b border-emerald-800/40 pb-3">
        <button
          onClick={() => setActiveTab("script")}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "script"
              ? "bg-emerald-500 text-emerald-950 shadow-lg shadow-emerald-500/20"
              : "bg-emerald-900/10 border border-emerald-850 text-emerald-300 hover:bg-emerald-900/30"
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          Roteiros & Scripts (Padrão Time)
        </button>
        <button
          onClick={() => setActiveTab("processo")}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "processo"
              ? "bg-emerald-500 text-emerald-950 shadow-lg shadow-emerald-500/20"
              : "bg-emerald-900/10 border border-emerald-850 text-emerald-300 hover:bg-emerald-900/30"
          }`}
        >
          <ArrowRight className="w-4 h-4" />
          Processo Operação no Stand
        </button>
        <button
          onClick={() => setActiveTab("comportamento")}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "comportamento"
              ? "bg-emerald-500 text-emerald-950 shadow-lg shadow-emerald-500/20"
              : "bg-emerald-900/10 border border-emerald-850 text-emerald-300 hover:bg-emerald-900/30"
          }`}
        >
          <UserCheck className="w-4 h-4" />
          Comportamento: Bom vs Ruim
        </button>
      </div>

      {/* Main Content Area */}
      <div id="approach-active-panel" className="space-y-6">
        
        {/* TAB 1: ROTEIROS & SCRIPTS */}
        {activeTab === "script" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Script Step-by-Step */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 space-y-6 shadow-md">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Treino Obrigatório</span>
                  <h4 className="text-xl font-bold font-display text-white">{scriptAbordagem.title}</h4>
                </div>

                <div className="space-y-5">
                  {scriptAbordagem.sections.map((section, idx) => (
                    <div 
                      key={idx}
                      className="p-4.5 rounded-2xl bg-emerald-950/80 border border-emerald-900/50 space-y-2 relative shadow-inner"
                    >
                      <span className="absolute -top-2.5 left-4 px-2 py-0.5 bg-emerald-800 text-white font-bold text-[9px] uppercase tracking-wider rounded border border-emerald-700 shadow-sm">
                        Etapa {idx + 1} • {section.title}
                      </span>
                      
                      <p className="text-emerald-300/80 text-[11px] font-bold uppercase tracking-wider pt-2 italic">
                        {section.instruction}
                      </p>

                      <div className="space-y-1.5 pt-1">
                        {section.phrases.map((phrase, pIdx) => (
                          <p key={pIdx} className="text-white font-bold text-sm sm:text-base font-sans leading-relaxed">
                            {phrase}
                          </p>
                        ))}
                      </div>

                      {section.extra && (
                        <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mt-2 bg-amber-500/10 inline-block px-2.5 py-0.5 rounded-lg border border-amber-500/20">
                          🔥 {section.extra}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Bloco 2 Explicação Rápida */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950 to-emerald-900/40 border border-emerald-800/50 space-y-6 shadow-xl">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">Treinamento Mandatório</span>
                  <h4 className="text-lg font-bold font-display text-white">{bloco2Abordagem.title}</h4>
                </div>

                {/* Explicação Rápida block */}
                <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-900 space-y-3">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    ⚡ {bloco2Abordagem.explanationTitle}
                  </span>
                  <p className="text-emerald-100 text-sm font-bold italic leading-relaxed">
                    “{bloco2Abordagem.explanationText.split("\n")[0]}”
                  </p>
                  <p className="text-emerald-300/80 text-xs font-semibold">
                    {bloco2Abordagem.explanationText.split("\n").slice(1).join(" ")}
                  </p>
                </div>

                {/* Fechamento block */}
                <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-900 space-y-1.5">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    🎯 {bloco2Abordagem.closingTitle}
                  </span>
                  <p className="text-white font-bold text-sm italic leading-relaxed">
                    “{bloco2Abordagem.closingText}”
                  </p>
                </div>
              </div>

              {/* Manual Rápido Frases Que Vendem */}
              <div className="p-6 rounded-3xl bg-emerald-900/10 border border-emerald-800/30 space-y-3 shadow-md">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">Frases que vendem (Fáceis de Memorizar)</span>
                <div className="grid grid-cols-2 gap-2">
                  {manualRapidoData.frasesVendem.map((f, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-900/60 text-center">
                      <p className="text-emerald-100 font-bold text-[11px] leading-snug italic">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROCESSO NO STAND */}
        {activeTab === "processo" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Visual Operational Flow */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 space-y-6 shadow-md">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Padrão Operação</span>
                  <h4 className="text-xl font-bold font-display text-white">{processoStandData.title}</h4>
                </div>

                <div className="relative pl-6 space-y-5 border-l border-emerald-800/60">
                  {processoStandData.steps.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Check icon or node badge */}
                      <span className="absolute -left-9 top-0.5 w-6 h-6 rounded-full bg-emerald-950 border border-emerald-400 flex items-center justify-center font-bold text-xs text-emerald-400 shadow-md">
                        {idx + 1}
                      </span>
                      <div className="bg-emerald-950/75 border border-emerald-900 rounded-xl p-3 shadow-sm hover:border-emerald-500/20 transition-all">
                        <p className="text-white font-bold text-sm leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Crucial Errors and Rules */}
            <div className="lg:col-span-5 space-y-6">
              {/* Stand Golden Rule */}
              <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20 space-y-3.5 shadow-md">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                  🚨 {processoStandData.erroTitle}
                </span>
                <p className="text-white text-base font-bold italic leading-relaxed bg-emerald-950/80 p-3.5 rounded-xl border border-emerald-900">
                  “Não {processoStandData.erroText}”
                </p>
              </div>

              {/* The absolute rule */}
              <div className="p-6 rounded-3xl bg-rose-500/15 border border-rose-500/30 space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldAlert className="w-5 h-5" />
                  {processoStandData.regraTitle}
                </div>
                <p className="text-white text-lg font-bold leading-tight font-display italic uppercase">
                  “{processoStandData.regraText}”
                </p>
                <p className="text-emerald-100/70 text-xs">A simulação ativa a prova real na frente do cliente e cria o desejo de assinar o plano grátis na hora.</p>
              </div>

              {/* Steps overview shortcut */}
              <div className="p-6 rounded-3xl bg-emerald-950 border border-emerald-900 space-y-3">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">Manual Rápido Passo a Passo</span>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {manualRapidoData.passoPasso.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-[11px] font-bold text-emerald-300">
                      <span>{p}</span>
                      {idx < manualRapidoData.passoPasso.length - 1 && <span className="text-emerald-500/40">→</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COMPORTAMENTO DE CAMPO */}
        {activeTab === "comportamento" && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h4 className="text-xl font-bold font-display text-white">{comportamentoCampoData.title}</h4>
              <p className="text-emerald-300/80 text-xs">Identifique imediatamente sua postura física e ajuste sua energia mental no campo.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Vendedor BOM */}
              <div className="p-6 rounded-3xl bg-emerald-500/5 border-t-4 border-emerald-400 border border-emerald-800/40 space-y-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h5 className="text-white font-bold text-base font-display">{comportamentoCampoData.bom.title}</h5>
                </div>

                <div className="space-y-2">
                  {comportamentoCampoData.bom.items.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-emerald-950/85 border border-emerald-900/60 flex items-center gap-3 shadow-sm">
                      <span className="text-emerald-400 text-lg font-bold shrink-0">✓</span>
                      <p className="text-emerald-50 font-semibold text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vendedor RUIM */}
              <div className="p-6 rounded-3xl bg-rose-500/5 border-t-4 border-rose-500/50 border border-emerald-800/40 space-y-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/15 flex items-center justify-center text-rose-400">
                    <UserX className="w-5 h-5" />
                  </div>
                  <h5 className="text-white font-bold text-base font-display">{comportamentoCampoData.ruim.title}</h5>
                </div>

                <div className="space-y-2">
                  {comportamentoCampoData.ruim.items.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-emerald-950/85 border border-emerald-900/60 flex items-center gap-3 shadow-sm opacity-80 hover:opacity-100 transition-opacity">
                      <span className="text-rose-400 text-lg font-bold shrink-0">✗</span>
                      <p className="text-emerald-200/90 text-sm italic">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
