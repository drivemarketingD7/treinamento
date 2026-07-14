/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  BookOpen, 
  Briefcase, 
  HelpCircle, 
  Award, 
  CheckSquare, 
  Leaf, 
  Sun, 
  Zap, 
  ChevronLeft,
  ChevronRight,
  Info
} from "lucide-react";

import Presentation from "./components/Presentation";
import Introduction from "./components/Introduction";
import ApproachGuide from "./components/ApproachGuide";
import Objections from "./components/Objections";
import OperationsGuide from "./components/OperationsGuide";
import Simulator from "./components/Simulator";
import Supervision from "./components/Supervision";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("presentation");
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  const tabs = [
    { id: "presentation", label: "Apresentação da iGreen", icon: Sun },
    { id: "concept", label: "Produto e Abordagem", icon: BookOpen },
    { id: "objections", label: "Contorno de Objeções", icon: HelpCircle },
    { id: "operations", label: "Prazos, Mudança & Cancelamento", icon: Leaf },
    { id: "simulator", label: "Simulador de Stand", icon: Award },
    { id: "supervision", label: "Metas & Supervisão", icon: CheckSquare },
  ];

  const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);

  const goToNext = () => {
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Touch Swipe Gesture Handlers for Mobile Navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    
    const diffX = touchStart.x - endX;
    const diffY = touchStart.y - endY;
    
    // Check if the swipe is primarily horizontal and significant
    if (Math.abs(diffX) > 50 && Math.abs(diffY) < 100) {
      if (diffX > 0) {
        // Swiped left -> Go to Next
        goToNext();
      } else {
        // Swiped right -> Go to Prev
        goToPrev();
      }
    }
    setTouchStart(null);
  };

  return (
    <div className="min-h-screen bg-emerald-950 text-emerald-50 flex flex-col font-sans selection:bg-emerald-500 selection:text-emerald-950">
       {/* Header section (Mobile Only) */}
      <header className="lg:hidden sticky top-0 z-50 bg-emerald-950/80 backdrop-blur-md border-b border-emerald-900/50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          {/* Mobile Top Indicator */}
          <div className="flex items-center gap-1 bg-emerald-900/40 border border-emerald-800/40 px-2.5 py-1 rounded-xl text-[11px] font-bold text-emerald-300">
            <span>Tópico {currentIndex + 1} de {tabs.length}</span>
          </div>
        </div>
      </header>

      {/* Main Responsive Body */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 sm:px-8 flex flex-col lg:flex-row gap-8">
        
        {/* Navigation Sidebar (Desktop Only) */}
        <aside className="hidden lg:block lg:w-66 shrink-0 space-y-6">
          <div className="p-4 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 space-y-4 shadow-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block px-2">
              Módulos de Aprendizagem
            </span>
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                      activeTab === tab.id
                        ? "bg-emerald-500 text-emerald-950 font-bold shadow-lg shadow-emerald-500/20"
                        : "text-emerald-300/80 hover:bg-emerald-900/40 hover:text-emerald-100"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Mini licensee motivation card */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-900/40 to-emerald-950 border border-emerald-800/50 space-y-3 shadow-lg">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wide">
              <Zap className="w-4 h-4" />
              Sua meta no Stand
            </div>
            <p className="text-emerald-100/80 text-xs leading-relaxed font-sans">
              "Encontre clientes, quebre as objeções iniciais com sorrisos e dados reais de economia, e peça a foto da conta de luz para fazer o cadastro."
            </p>
          </div>
        </aside>

        {/* Swipe Quick Header & Horizontal Dot Indicators for Mobile */}
        <div className="lg:hidden w-full space-y-4">
          {/* Active Topic Banner */}
          <div className="p-4 rounded-2xl bg-emerald-900/30 border border-emerald-800/50 text-center space-y-2">
            <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400 block">Tópico Atual</span>
            <h2 className="text-xl font-bold text-white font-display flex items-center justify-center gap-2">
              {(() => {
                const ActiveIcon = tabs[currentIndex].icon;
                return <ActiveIcon className="w-5 h-5 text-emerald-400" />;
              })()}
              {tabs[currentIndex].label}
            </h2>
            
            {/* Visual Dot Progress bar */}
            <div className="flex justify-center items-center gap-1.5 pt-1">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTab === tab.id ? "w-6 bg-emerald-400" : "w-2 bg-emerald-900"
                  }`}
                  aria-label={`Ir para o tópico ${idx + 1}`}
                />
              ))}
            </div>

            <p className="text-[10px] text-emerald-300/60 font-semibold flex items-center justify-center gap-1 animate-pulse">
              <Info className="w-3.5 h-3.5" />
              Arraste para as laterais para navegar pelos tópicos
            </p>
          </div>
        </div>

        {/* Central Display Area with active view and touch support */}
        <main 
          className="flex-1 bg-emerald-950 min-w-0"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="p-1 sm:p-2">
            
            {/* Render views based on active tab state */}
            {activeTab === "presentation" && <Presentation />}
            {activeTab === "concept" && (
              <div className="space-y-12">
                <Introduction />
                <ApproachGuide />
              </div>
            )}
            {activeTab === "objections" && <Objections />}
            {activeTab === "operations" && <OperationsGuide />}
            {activeTab === "simulator" && <Simulator />}
            {activeTab === "supervision" && <Supervision />}

          </div>

          {/* Quick Walkthrough Mobile Action Buttons */}
          <div className="mt-8 pt-4 border-t border-emerald-900/40 flex items-center justify-between gap-4 lg:hidden">
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                currentIndex === 0 
                  ? "bg-emerald-950 text-emerald-800 border border-emerald-900/50 cursor-not-allowed opacity-50" 
                  : "bg-emerald-900/50 border border-emerald-800 text-emerald-200 hover:bg-emerald-900 active:bg-emerald-900"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex === tabs.length - 1}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                currentIndex === tabs.length - 1
                  ? "bg-emerald-950 text-emerald-800 border border-emerald-900/50 cursor-not-allowed opacity-50" 
                  : "bg-emerald-500 text-emerald-950 hover:bg-emerald-400 active:bg-emerald-600 shadow-md shadow-emerald-500/10"
              }`}
            >
              Próximo
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-950 border-t border-emerald-900/30 py-8 px-4 sm:px-8 text-center text-emerald-500/70 text-xs font-sans space-y-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Grupo D7. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5 justify-center">
            Pronto para subir em qualquer domínio estático • <span className="text-emerald-400">100% Client-Side</span>
          </p>
        </div>
      </footer>

      {/* Embedded Spin Slow style */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        /* Print Styles */
        @media print {
          header, aside, footer, button, a, [id*="nav"], [id*="selector"] {
            display: none !important;
          }
          body {
            background-color: white !important;
            color: black !important;
          }
          main {
            width: 100% !important;
          }
        }
      `}</style>

    </div>
  );
}