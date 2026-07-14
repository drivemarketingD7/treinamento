/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { metasTimeData, manualRapidoData } from "../data";
import { Award, Target, TrendingUp, ShieldAlert, Sparkles, AlertOctagon, HelpCircle, CheckCircle2 } from "lucide-react";

export default function Supervision() {
  // Supervisor dynamic tracker state
  const [abordagens, setAbordagens] = useState<number>(100);
  const [pararam, setPararam] = useState<number>(40);
  const [contas, setContas] = useState<number>(20);
  const [fechados, setFechados] = useState<number>(10);

  // Conversion rates calculations
  const taxaParada = abordagens > 0 ? Math.round((pararam / abordagens) * 100) : 0;
  const taxaConta = pararam > 0 ? Math.round((contas / pararam) * 100) : 0;
  const taxaFechamento = contas > 0 ? Math.round((fechados / contas) * 100) : 0;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-white">Metas & Controle da Supervisora</h3>
          <p className="text-emerald-300/80 text-sm">Controle diário de produtividade, cobrança do time e diferenciais que explodem as conversões.</p>
        </div>
        <div className="bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 rounded-xl text-emerald-400 text-xs font-semibold flex items-center gap-1.5 shrink-0 self-start md:self-center shadow-sm">
          <Target className="w-4 h-4" />
          Metas & Escala
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Grid Col: Metas & Interactive Supervisor Tracker */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Metas Funnel */}
          <div className="p-6 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 space-y-6 shadow-md">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Metas Diárias por Vendedor</span>
              <h4 className="text-xl font-bold font-display text-white">{metasTimeData.title}</h4>
              <p className="text-emerald-300/70 text-xs italic">{metasTimeData.instruction}</p>
            </div>

            {/* Funnel Layout */}
            <div className="space-y-3">
              <div className="relative p-4 rounded-2xl bg-emerald-950 border border-emerald-900 flex items-center justify-between shadow-inner">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-500 text-emerald-950 font-bold flex items-center justify-center text-sm">100</span>
                  <span className="text-white font-bold text-sm">Abordados</span>
                </div>
                <span className="text-xs font-bold text-emerald-400">Mínimo Diário</span>
              </div>
              
              <div className="relative p-4 rounded-2xl bg-emerald-950 border border-emerald-900 flex items-center justify-between shadow-inner max-w-[92%] mx-auto">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-teal-500 text-teal-950 font-bold flex items-center justify-center text-sm">40</span>
                  <span className="text-white font-bold text-sm">Pararam para ouvir</span>
                </div>
                <span className="text-xs font-bold text-teal-400">40% de Retenção</span>
              </div>

              <div className="relative p-4 rounded-2xl bg-emerald-950 border border-emerald-900 flex items-center justify-between shadow-inner max-w-[84%] mx-auto">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">20</span>
                  <span className="text-white font-bold text-sm">Enviaram a conta</span>
                </div>
                <span className="text-xs font-bold text-emerald-500">50% de Coleta</span>
              </div>

              <div className="relative p-4 rounded-2xl bg-emerald-950 border border-emerald-900 flex items-center justify-between shadow-inner max-w-[76%] mx-auto">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-950 font-bold flex items-center justify-center text-sm">10</span>
                  <span className="text-white font-bold text-sm">Cadastros Fechados</span>
                </div>
                <span className="text-xs font-bold text-emerald-400">50% de Conversão</span>
              </div>
            </div>

            <p className="text-center text-xs text-emerald-400/80 font-bold uppercase tracking-wider">
              🔥 {metasTimeData.items[3]} ({metasTimeData.items[0]}, {metasTimeData.items[1]}, {metasTimeData.items[2]})
            </p>
          </div>

          {/* Interactive Tracker */}
          <div className="p-6 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 space-y-6 shadow-md">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">Simulador de Controle Diário</span>
              <h4 className="text-lg font-bold font-display text-white">Análise de Conversão da Supervisora</h4>
              <p className="text-emerald-300/80 text-xs">Ajuste os valores reais do dia para ver o diagnóstico automático de conversão do stand:</p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Abordagens</label>
                <input 
                  type="number"
                  value={abordagens}
                  onChange={(e) => setAbordagens(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-emerald-950/80 border border-emerald-800 rounded-xl px-3 py-2 text-white font-bold text-sm focus:outline-none focus:border-emerald-500 text-center shadow-inner"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-teal-300">Pararam</label>
                <input 
                  type="number"
                  value={pararam}
                  onChange={(e) => setPararam(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-emerald-950/80 border border-emerald-800 rounded-xl px-3 py-2 text-white font-bold text-sm focus:outline-none focus:border-emerald-500 text-center shadow-inner"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Contas Coletadas</label>
                <input 
                  type="number"
                  value={contas}
                  onChange={(e) => setContas(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-emerald-950/80 border border-emerald-800 rounded-xl px-3 py-2 text-white font-bold text-sm focus:outline-none focus:border-emerald-500 text-center shadow-inner"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Fechados</label>
                <input 
                  type="number"
                  value={fechados}
                  onChange={(e) => setFechados(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-emerald-950/80 border border-emerald-800 rounded-xl px-3 py-2 text-white font-bold text-sm focus:outline-none focus:border-emerald-500 text-center shadow-inner"
                />
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-900 text-center shadow-inner">
                <span className="text-[9px] font-bold text-emerald-300 block uppercase">Taxa de Parada</span>
                <span className="text-xl font-bold text-white block mt-1">{taxaParada}%</span>
                <span className="text-[9px] text-emerald-500/80 font-semibold">{taxaParada >= 40 ? "🔥 Dentro da Meta" : "⚠️ Abaixo (Meta: 40%)"}</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-900 text-center shadow-inner">
                <span className="text-[9px] font-bold text-teal-300 block uppercase">Taxa de Coleta</span>
                <span className="text-xl font-bold text-white block mt-1">{taxaConta}%</span>
                <span className="text-[9px] text-teal-500/80 font-semibold">{taxaConta >= 50 ? "🔥 Dentro da Meta" : "⚠️ Abaixo (Meta: 50%)"}</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-900 text-center shadow-inner">
                <span className="text-[9px] font-bold text-emerald-400 block uppercase">Taxa de Fechamento</span>
                <span className="text-xl font-bold text-white block mt-1">{taxaFechamento}%</span>
                <span className="text-[9px] text-emerald-500/80 font-semibold">{taxaFechamento >= 50 ? "🔥 Dentro da Meta" : "⚠️ Abaixo (Meta: 50%)"}</span>
              </div>
            </div>

            <div className="p-4 bg-emerald-950 rounded-2xl border border-emerald-900">
              <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">📋 {manualRapidoData.controleSupervisora.title}:</span>
              <p className="text-emerald-300/80 text-xs">
                {manualRapidoData.controleSupervisora.meta} A supervisora anota no final do turno: Abordagens feitas ({abordagens}), Pessoas que pararam ({pararam}), Contas coletadas ({contas}) e Cadastros fechados ({fechados}).
              </p>
            </div>
          </div>
        </div>

        {/* Right Grid Col: Scripts, Erros & Diferenciais */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Diferencial que explode conversão (Prova social) */}
          <div className="p-6 rounded-3xl bg-teal-500/5 border border-teal-500/20 space-y-3 shadow-md">
            <div className="flex items-center gap-1.5 text-teal-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              {manualRapidoData.diferencialExplode.title}
            </div>
            <p className="text-white text-xs font-bold uppercase">{manualRapidoData.diferencialExplode.subtitle}</p>
            <div className="p-3 bg-emerald-950 border border-emerald-900 rounded-xl space-y-2">
              <p className="text-emerald-300 font-semibold text-[11px] italic leading-relaxed">
                “{manualRapidoData.diferencialExplode.bullets[1]}”
              </p>
              <p className="text-emerald-100/70 text-[10px] leading-relaxed">
                Regra: {manualRapidoData.diferencialExplode.bullets[0]} para provar que funciona de verdade.
              </p>
            </div>
          </div>

          {/* Diferencial de Escala */}
          <div className="p-6 rounded-3xl bg-emerald-900/10 border border-emerald-850 space-y-3 shadow-md">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <Award className="w-4 h-4" />
              {manualRapidoData.escala.title}
            </div>
            <p className="text-white text-xs font-bold uppercase">{manualRapidoData.escala.subtitle}</p>
            <ul className="space-y-1.5 text-xs text-emerald-100/90 list-disc list-inside">
              <li>{manualRapidoData.escala.items[0]}</li>
              <li>{manualRapidoData.escala.items[1]}</li>
            </ul>
          </div>

          {/* Erros que Matam a Venda */}
          <div className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/20 space-y-3.5 shadow-md">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
              <AlertOctagon className="w-4 h-4" />
              {manualRapidoData.errosMatam.title}
            </div>
            <div className="grid grid-cols-1 gap-2">
              {manualRapidoData.errosMatam.items.map((item, idx) => (
                <div key={idx} className="p-2 bg-emerald-950/60 border border-emerald-900 rounded-xl text-xs flex items-center gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span className="text-emerald-100/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Slogan closing bar */}
      <div className="p-5 rounded-3xl bg-gradient-to-r from-emerald-500/15 to-teal-500/5 border border-emerald-500/30 text-center shadow-lg">
        <p className="text-white text-lg font-bold italic font-display">
          {manualRapidoData.fraseDefinitiva}
        </p>
      </div>
    </div>
  );
}
