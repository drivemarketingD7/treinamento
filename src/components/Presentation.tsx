/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Play, Sparkles, Shield, Sun, Award, Landmark, CheckCircle } from "lucide-react";

export default function Presentation() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-white">Apresentação da iGreen Energy</h3>
          <p className="text-emerald-300/80 text-sm">Entenda quem somos, nosso propósito e como transformamos a conta de luz em Minas Gerais.</p>
        </div>
        <div className="bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 rounded-xl text-emerald-400 text-xs font-semibold flex items-center gap-1.5 shrink-0 self-start md:self-center shadow-sm">
          <Sun className="w-4 h-4 animate-pulse" />
          Conexão Green MG
        </div>
      </div>

      {/* Main Grid: Info + Video */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Who we are, what we do */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 space-y-5 shadow-md">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Quem Somos</span>
              <h4 className="text-2xl font-bold font-display text-white">A Maior Plataforma de Energia por Assinatura do Brasil</h4>
              <p className="text-emerald-100/90 text-sm leading-relaxed">
                A <strong>iGreen Energy</strong> nasceu com o propósito de democratizar o acesso à energia limpa e renovável no Brasil. Nós conectamos usinas solares diretamente à rede de distribuição da <strong>Cemig</strong> em Minas Gerais, permitindo que residências, comércios e indústrias reduzam seus custos sem qualquer investimento.
              </p>
            </div>

            <div className="border-t border-emerald-800/30 pt-4 space-y-4">
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">O que a iGreen faz?</span>
              <div className="grid grid-cols-1 gap-3.5">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                    <Sun className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-white text-xs sm:text-sm font-bold">Gera Energia Solar Limpa</h5>
                    <p className="text-emerald-300/70 text-xs mt-0.5">Nossas usinas solares parceiras injetam energia limpa e barata diretamente na rede da Cemig.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 text-teal-400">
                    <Award className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-white text-xs sm:text-sm font-bold">Distribui Desconto Garantido</h5>
                    <p className="text-emerald-300/70 text-xs mt-0.5">Esse excedente de energia limpa é revertido em créditos de desconto que reduzem o valor final da conta de luz em até 15%.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                    <Shield className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-white text-xs sm:text-sm font-bold">Zero Custo, Zero Obras, Sem Fidelidade</h5>
                    <p className="text-emerald-300/70 text-xs mt-0.5">O cliente não gasta um único centavo com placas, obras ou taxas de adesão. E se quiser cancelar, é livre de multas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-900 text-center">
              <span className="text-[10px] text-emerald-400 font-bold block uppercase">Placas Solares</span>
              <span className="text-lg font-bold text-white block mt-1">ZERO</span>
              <p className="text-[9px] text-emerald-300/60 mt-0.5">Zero investimento necessário</p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-900 text-center">
              <span className="text-[10px] text-teal-400 font-bold block uppercase">Desconto Líquido</span>
              <span className="text-lg font-bold text-white block mt-1">Até 15%</span>
              <p className="text-[9px] text-emerald-300/60 mt-0.5">Economia garantida na tarifa</p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-900 text-center">
              <span className="text-[10px] text-emerald-400 font-bold block uppercase">Assinatura</span>
              <span className="text-lg font-bold text-white block mt-1">Grátis</span>
              <p className="text-[9px] text-emerald-300/60 mt-0.5">Adesão e cancelamento grátis</p>
            </div>
          </div>
        </div>

        {/* Right Column: Beautiful Video Player */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-5 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Vídeo de Apresentação Oficial</span>
            </div>

            {/* Video container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-emerald-950 border border-emerald-900 shadow-inner group">
              <video 
                className="w-full h-full object-cover" 
                controls 
                preload="metadata"
                poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
              >
                <source src="/videos/YTDown_YouTube_iGreen-Energy-Como-funciona-a-Conexao-Gr_Media_Ma8QN7x_d-E_001_1080p.mp4" type="video/mp4" />
                Seu navegador não suporta a exibição de vídeos HTML5. Certifique-se de colocar o vídeo na pasta correspondente.
              </video>
            </div>
          </div>

          {/* Social Proof Quote */}
          <div className="p-5 rounded-2xl bg-emerald-950 border border-emerald-900 text-center italic text-emerald-300 text-xs font-semibold leading-relaxed">
            "Nosso propósito em Minas Gerais é fazer com que cada morador e empresário mineiro saiba que não precisa mais pagar caro na conta da Cemig. O sol brilha para todos e agora brilha no bolso de cada um de graça!"
          </div>
        </div>
      </div>
    </div>
  );
}
