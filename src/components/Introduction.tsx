/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { companyOverview, bloco1Produto, perguntasFiltro } from "../data";
import { Sparkles, HelpCircle, CheckCircle2, User, HelpCircle as HelpIcon, Search, DollarSign } from "lucide-react";

export default function Introduction() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Sales Manifesto / Hero Banner */}
      <div id="intro-hero" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900/45 to-emerald-950/70 p-8 md:p-12 border border-emerald-800/60 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Especialistas em Reduzir Conta da Cemig
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Treinamento de Abordagem <span className="text-emerald-400 underline decoration-emerald-500/30">(Padrão Time)</span>
          </h2>
          
          <div className="bg-emerald-950/80 rounded-2xl border border-emerald-800/40 p-5 space-y-3 shadow-inner">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Nossa Missão Fundamental:</span>
            <p className="text-emerald-100 text-lg font-semibold leading-relaxed font-sans italic">
              {companyOverview.slogan}
            </p>
          </div>
        </div>
      </div>

      {/* Nosso Trabalho é Simples Step Layout */}
      <div id="intro-work-simplicity" className="space-y-6">
        <div className="max-w-xl space-y-1">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-white">Nosso Trabalho é Simples</h3>
          <p className="text-emerald-300/80 text-sm">Apenas três passos separam você da sua meta e do lucro diário.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-emerald-800/30 -translate-y-6 z-0"></div>

          {/* Step 1: Abordar */}
          <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-3xl bg-emerald-900/10 border border-emerald-800/30 hover:bg-emerald-900/20 transition-all duration-300 group shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 border border-emerald-700 flex items-center justify-center text-white mb-4 font-bold text-lg group-hover:scale-110 transition-transform shadow-inner">
              1
            </div>
            <h4 className="text-emerald-400 font-bold text-lg font-display mb-1">Abordar</h4>
            <p className="text-emerald-100/70 text-xs leading-relaxed">Parar o cliente na frente do stand, quebrando o gelo em segundos com energia alta.</p>
          </div>

          {/* Step 2: Explicar Rápido */}
          <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-3xl bg-emerald-900/10 border border-emerald-800/30 hover:bg-emerald-900/20 transition-all duration-300 group shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 border border-emerald-700 flex items-center justify-center text-white mb-4 font-bold text-lg group-hover:scale-110 transition-transform shadow-inner">
              2
            </div>
            <h4 className="text-emerald-400 font-bold text-lg font-display mb-1">Explicar Rápido</h4>
            <p className="text-emerald-100/70 text-xs leading-relaxed">Conectar o cliente ao conceito solar sem termos técnicos difíceis em até 20 segundos.</p>
          </div>

          {/* Step 3: Pegar a Conta */}
          <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-3xl bg-emerald-900/10 border border-emerald-800/30 hover:bg-emerald-900/20 transition-all duration-300 group shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 border border-emerald-700 flex items-center justify-center text-white mb-4 font-bold text-lg group-hover:scale-110 transition-transform shadow-inner">
              3
            </div>
            <h4 className="text-emerald-400 font-bold text-lg font-display mb-1">Pegar a Conta</h4>
            <p className="text-emerald-100/70 text-xs leading-relaxed">Conseguir a foto ou o PDF da conta de luz na hora para realizar o fechamento gratuito.</p>
          </div>
        </div>
      </div>

      {/* Bloco 1 - Produto na Lata */}
      <div id="intro-product-lata" className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        
        {/* Left Grid: Bullet points list */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 space-y-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">Treinamento Essencial</span>
            <h3 className="text-xl md:text-2xl font-bold font-display text-white">{bloco1Produto.title}</h3>
            <p className="text-emerald-300/70 text-xs italic">{bloco1Produto.explanation}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {bloco1Produto.items.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-900/50 flex items-start gap-3 shadow-inner group hover:border-emerald-500/20 transition-all"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm group-hover:bg-emerald-500 group-hover:text-emerald-950 transition-colors">
                  ✓
                </div>
                <div>
                  <h5 className="text-white font-bold text-sm leading-snug">{item}</h5>
                </div>
              </div>
            ))}
          </div>

          {/* Slogan Repetível */}
          <div className="p-4.5 rounded-2xl bg-gradient-to-r from-emerald-500/15 to-teal-500/5 border border-emerald-500/30 text-center">
            <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">FRASE CHAVE (TODO MUNDO REPETE!)</span>
            <p className="text-white text-base md:text-lg font-bold italic font-display">
              {bloco1Produto.keyPhrase}
            </p>
          </div>
        </div>

        {/* Right Grid: Perguntas que o Time Tem Que Fazer */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-br from-emerald-950 to-emerald-900/35 border border-emerald-800/50 space-y-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">Filtro de Vendas</span>
              <h3 className="text-xl font-bold font-display text-white">{perguntasFiltro.title}</h3>
              <p className="text-emerald-300/70 text-xs">{perguntasFiltro.instruction}</p>
            </div>

            <div className="space-y-3">
              {perguntasFiltro.items.map((q, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-900/60 flex items-center gap-3 shadow-sm hover:translate-x-1 transition-transform"
                >
                  <span className="w-6 h-6 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-emerald-100 font-medium text-sm italic">{q}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center text-xs text-emerald-300 font-semibold uppercase tracking-wider">
            🎯 {perguntasFiltro.explanation}
          </div>
        </div>

      </div>
    </div>
  );
}
