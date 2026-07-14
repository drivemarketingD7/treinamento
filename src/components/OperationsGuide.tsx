/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { prazoDesconto, cancelamentoData, trocaImovelData } from "../data";
import { Clock, Ban, Home, AlertTriangle, HelpCircle, Star, ShieldAlert, Sparkles } from "lucide-react";

export default function OperationsGuide() {
  const [activeSubTab, setActiveSubTab] = useState<"prazos" | "cancelamento" | "mudanca">("prazos");

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-white">Manual Operacional de Campo</h3>
          <p className="text-emerald-300/80 text-sm">Entenda prazos de desconto, regras de cancelamento e transferências de endereço.</p>
        </div>
        <div className="bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 rounded-xl text-emerald-400 text-xs font-semibold flex items-center gap-1.5 shrink-0 self-start md:self-center shadow-sm">
          <Clock className="w-4 h-4" />
          Prazos & Regras de Atendimento
        </div>
      </div>

      {/* Selector Tabs */}
      <div id="operations-tab-selector" className="flex flex-wrap gap-2.5 border-b border-emerald-800/40 pb-3">
        <button
          onClick={() => setActiveSubTab("prazos")}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeSubTab === "prazos"
              ? "bg-emerald-500 text-emerald-950 shadow-lg shadow-emerald-500/20"
              : "bg-emerald-900/10 border border-emerald-850 text-emerald-300 hover:bg-emerald-900/30"
          }`}
        >
          <Clock className="w-4 h-4" />
          Prazos de Desconto
        </button>
        <button
          onClick={() => setActiveSubTab("cancelamento")}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeSubTab === "cancelamento"
              ? "bg-emerald-500 text-emerald-950 shadow-lg shadow-emerald-500/20"
              : "bg-emerald-900/10 border border-emerald-850 text-emerald-300 hover:bg-emerald-900/30"
          }`}
        >
          <Ban className="w-4 h-4" />
          Regras de Cancelamento
        </button>
        <button
          onClick={() => setActiveSubTab("mudanca")}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeSubTab === "mudanca"
              ? "bg-emerald-500 text-emerald-950 shadow-lg shadow-emerald-500/20"
              : "bg-emerald-900/10 border border-emerald-850 text-emerald-300 hover:bg-emerald-900/30"
          }`}
        >
          <Home className="w-4 h-4" />
          Troca de Imóvel (Mudança)
        </button>
      </div>

      {/* Main Panel Content */}
      <div id="operations-active-panel" className="space-y-6">
        
        {/* TAB 1: Prazos de Desconto */}
        {activeSubTab === "prazos" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Col: Flow and Explanation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 space-y-6 shadow-md">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Expectativa Real</span>
                  <h4 className="text-xl font-bold font-display text-white">{prazoDesconto.title}</h4>
                  <div className="inline-block px-3 py-1 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-xl shadow-inner mt-2">
                    {prazoDesconto.period}
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-white font-bold text-sm uppercase tracking-wide border-b border-emerald-800/40 pb-2">
                    {prazoDesconto.subtitle}
                  </h5>
                  <div className="relative pl-6 space-y-6 border-l border-emerald-800/50">
                    {prazoDesconto.steps.map((stepText, idx) => (
                      <div key={idx} className="relative">
                        {/* Bullet node */}
                        <span className="absolute -left-9 top-0.5 w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center font-bold text-[10px] text-emerald-400">
                          {idx + 1}
                        </span>
                        <p className="text-emerald-100 text-sm font-semibold">{stepText}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expectation Results Timeline */}
                <div className="p-5 rounded-2xl bg-emerald-950 border border-emerald-900 space-y-3">
                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">Resultado Esperado por Fatura:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {prazoDesconto.results.map((resText, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-emerald-900/15 border border-emerald-900/60 text-center">
                        <span className="text-[11px] font-bold text-emerald-300 block mb-1">
                          {resText.split(" → ")[0]}
                        </span>
                        <p className="text-emerald-200/80 text-[11px] leading-relaxed">
                          {resText.split(" → ")[1]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Stand Pitching & Expectation Adjustment */}
            <div className="lg:col-span-5 space-y-6">
              {/* Pitch in Stand */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950 to-emerald-900/40 border border-emerald-800/50 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Star className="w-4 h-4 fill-current" />
                  O que você deve falar no stand:
                </div>
                <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-900 italic text-emerald-100 text-sm leading-relaxed shadow-inner">
                  {prazoDesconto.standPitchText}
                </div>
              </div>

              {/* Ajuste de Expectativa (ESSENCIAL) */}
              <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20 space-y-4 shadow-md">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  {prazoDesconto.ajusteExpectativa.title}
                </div>
                <p className="text-amber-300/95 font-semibold text-xs uppercase tracking-wide">
                  ⚠️ {prazoDesconto.ajusteExpectativa.alert}
                </p>
                <ul className="space-y-2 text-xs text-emerald-100/90 list-disc list-inside">
                  {prazoDesconto.ajusteExpectativa.items.map((item, idx) => (
                    <li key={idx} className="font-semibold italic">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Conversion tip */}
              <div className="p-6 rounded-3xl bg-teal-500/5 border border-teal-500/20 space-y-3 shadow-md">
                <span className="text-[9px] font-bold uppercase tracking-widest text-teal-400 block">Dica para conversão</span>
                <p className="text-emerald-100 text-sm italic font-medium leading-relaxed bg-emerald-950/60 p-3.5 rounded-xl border border-emerald-900">
                  {prazoDesconto.dicaConversao}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Cancelamento */}
        {activeSubTab === "cancelamento" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 p-6 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 space-y-6 shadow-md">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest block">Processo Simples</span>
                <h4 className="text-xl font-bold font-display text-white">{cancelamentoData.title}</h4>
              </div>

              {/* Cancelation Deadline */}
              <div className="space-y-3">
                <h5 className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  ⏱️ {cancelamentoData.prazoTitle}
                </h5>
                <ul className="space-y-2 text-emerald-100/95 text-xs bg-emerald-950 p-4 rounded-2xl border border-emerald-900 space-y-2.5">
                  {cancelamentoData.prazoItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 text-xs mt-0.5">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How cancelation works */}
              <div className="space-y-3">
                <h5 className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  🔄 {cancelamentoData.funcionamentoTitle}
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {cancelamentoData.funcionamentoItems.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/50 flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-emerald-100 text-xs font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cancelation pitching and arguments */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950 to-emerald-900/40 border border-emerald-800/50 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Star className="w-4 h-4 fill-current" />
                  {cancelamentoData.standPitchTitle}:
                </div>
                <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-900 italic text-emerald-100 text-sm leading-relaxed shadow-inner">
                  {cancelamentoData.standPitchText}
                </div>
              </div>

              {/* strong argument highlight */}
              <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">ARGUMENTO FORTE DE CONVERSÃO</span>
                <p className="text-white text-lg font-bold">
                  {cancelamentoData.summary}
                </p>
                <p className="text-emerald-300/80 text-xs">Risco totalmente inexistente para convencer o cliente indeciso!</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Troca de Imóvel */}
        {activeSubTab === "mudanca" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Scenarios and Rules */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 space-y-6 shadow-md">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">Mudança de Endereço</span>
                  <h4 className="text-xl font-bold font-display text-white">{trocaImovelData.title}</h4>
                </div>

                {/* Scenarios comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {trocaImovelData.cenarios.map((cenario, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-emerald-950 border border-emerald-900 space-y-3 flex flex-col justify-between">
                      <div>
                        <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider mb-2 ${
                          idx === 0 
                            ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400" 
                            : "bg-rose-500/15 border border-rose-500/30 text-rose-400"
                        }`}>
                          Cenário {idx + 1}
                        </span>
                        <h5 className="text-white font-bold text-xs">{cenario.title}</h5>
                        <p className="text-emerald-400/80 text-[10px] uppercase tracking-wide mt-1 font-semibold">{cenario.desc}</p>
                      </div>
                      <ul className="space-y-1.5 pt-2 border-t border-emerald-900/60">
                        {cenario.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="text-emerald-200/90 text-xs flex items-start gap-1.5">
                            <span className="text-emerald-500 mt-0.5">▪</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Regras Práticas */}
                <div className="space-y-3">
                  <h5 className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    📌 {trocaImovelData.regrasPraticasTitle}
                  </h5>
                  <ul className="space-y-2 text-emerald-100/95 text-xs bg-emerald-950 p-4 rounded-2xl border border-emerald-900">
                    {trocaImovelData.regrasPraticasItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 font-semibold">
                        <span className="text-emerald-500 mt-0.5">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Pitching, Golden Tip & Common Mistakes */}
            <div className="lg:col-span-5 space-y-6">
              {/* O que falar */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950 to-emerald-900/40 border border-emerald-800/50 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Star className="w-4 h-4 fill-current" />
                  {trocaImovelData.standPitchTitle}:
                </div>
                <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-900 italic text-emerald-100 text-sm leading-relaxed shadow-inner">
                  {trocaImovelData.standPitchText}
                </div>
              </div>

              {/* Dica de Ouro (MUITO PODEROSA) */}
              <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20 space-y-4 shadow-md">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  {trocaImovelData.dicaOuroTitle}
                </div>
                <p className="text-emerald-300 text-xs italic font-semibold uppercase">
                  {trocaImovelData.dicaOuroQuestion}
                </p>
                <div className="p-3.5 bg-emerald-950/80 border border-emerald-900 rounded-xl">
                  <p className="text-white text-sm font-bold italic">
                    {trocaImovelData.dicaOuroText}
                  </p>
                </div>
                <div className="text-right text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                  💡 {trocaImovelData.dicaOuroImpact}
                </div>
              </div>

              {/* Erros a evitar */}
              <div className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/20 space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  {trocaImovelData.errosEvitarTitle}
                </div>
                <ul className="space-y-1.5 text-xs text-rose-300/90 list-disc list-inside font-semibold">
                  {trocaImovelData.errosEvitarItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
