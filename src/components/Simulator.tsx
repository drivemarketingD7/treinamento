/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { simulationScenarios } from "../data";
import { SimulationChoice } from "../types";
import { ShieldAlert, Trophy, Award, RefreshCw, Star, CheckCircle, XCircle, ArrowRight, Sparkles, User, HelpCircle } from "lucide-react";

export default function Simulator() {
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(0);
  const [score, setScore] = useState<number>(50); // Starts at 50% success likelihood
  const [selectedChoice, setSelectedChoice] = useState<SimulationChoice | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [history, setHistory] = useState<{ stageName: string; choiceText: string; isCorrect: boolean; impact: number }[]>([]);

  const scenario = simulationScenarios[currentStageIdx];

  const handleSelectChoice = (choice: SimulationChoice) => {
    if (selectedChoice) return; // Prevent double clicking
    setSelectedChoice(choice);
    
    // Update score with bounds [0, 100]
    const newScore = Math.min(100, Math.max(0, score + choice.meterImpact));
    setScore(newScore);

    // Save history
    setHistory(prev => [
      ...prev,
      {
        stageName: scenario.stageName,
        choiceText: choice.text,
        isCorrect: choice.isCorrect,
        impact: choice.meterImpact
      }
    ]);
  };

  const handleNextStage = () => {
    setSelectedChoice(null);
    if (currentStageIdx < simulationScenarios.length - 1) {
      setCurrentStageIdx(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentStageIdx(0);
    setScore(50);
    setSelectedChoice(null);
    setIsCompleted(false);
    setHistory([]);
  };

  // Get rank badge
  const getRank = (finalScore: number) => {
    if (finalScore >= 85) {
      return {
        title: "Consultor Estrela iGreen 🌟",
        desc: "Excelente! Você demonstrou domínio perfeito das técnicas de abordagem de rua, respondeu com segurança, quebrou objeções e sabe como captar faturas com ética e dinamismo. Está 100% preparado para arrebentar nos stands da cidade!",
        color: "text-emerald-400 border-emerald-500 bg-emerald-950/40"
      };
    } else if (finalScore >= 60) {
      return {
        title: "Consultor Conectado 🌱",
        desc: "Bom trabalho! Você tem uma ótima noção de abordagem e entende o valor da iGreen. No entanto, escorregou em algumas objeções e desconfianças comuns. Revise o manual de contorno de objeções para alcançar a pontuação máxima!",
        color: "text-teal-400 border-teal-500 bg-teal-950/40"
      };
    } else {
      return {
        title: "Trainee em Aprendizagem 📚",
        desc: "Você está no caminho, mas ainda precisa treinar mais! Abordar pessoas na rua exige postura confiante e argumentos corretos sobre custo zero e ausência de fidelidade. Estude o manual, jogue o simulador de novo e melhore seu pitch!",
        color: "text-amber-400 border-amber-500 bg-amber-950/40"
      };
    }
  };

  const rank = getRank(score);

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-white">Simulador de Abordagem Real</h3>
          <p className="text-emerald-300/80 text-sm">Pratique suas respostas e teste sua persuasão em cenários comuns de stands.</p>
        </div>
        <button
          onClick={handleRestart}
          className="px-4 py-2 rounded-xl bg-emerald-900/40 border border-emerald-800 hover:bg-emerald-900/80 text-emerald-200 text-xs font-semibold flex items-center gap-2 self-start md:self-center transition-all cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Reiniciar Jogo
        </button>
      </div>

      {/* Progress & Confidence Meter Panel */}
      <div className="p-5 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 grid grid-cols-1 md:grid-cols-3 gap-6 items-center shadow-md animate-fade-in">
        <div className="space-y-1 text-center md:text-left">
          <span className="text-[10px] font-bold uppercase text-emerald-400 tracking-wider">Desempenho da Abordagem</span>
          <div className="text-2xl font-bold font-display text-white flex items-center justify-center md:justify-start gap-2">
            <span>Probabilidade de Fechamento:</span>
            <span className={score >= 80 ? "text-emerald-400" : score >= 60 ? "text-teal-400" : "text-amber-400"}>
              {score}%
            </span>
          </div>
        </div>

        {/* Live progress bar */}
        <div className="md:col-span-2 space-y-2">
          <div className="w-full h-3 bg-emerald-950 rounded-full overflow-hidden p-0.5 border border-emerald-900/60">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${
                score >= 80 ? "bg-emerald-500" : score >= 60 ? "bg-teal-500" : "bg-amber-500"
              }`}
              style={{ width: `${score}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[10px] font-bold text-emerald-500/60 uppercase tracking-widest">
            <span>Fuga do Cliente</span>
            <span>Interesse Médio</span>
            <span>Fatura Captada!</span>
          </div>
        </div>
      </div>

      {!isCompleted ? (
        <div id="active-scenario-card" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left panel: Character dialogue bubble */}
          <div className="lg:col-span-1 p-6 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase shadow-sm">
                {scenario.stageName}
              </span>
              <p className="text-emerald-300/80 text-xs mt-1">
                {scenario.description}
              </p>
            </div>

            {/* Character box */}
            <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-900 shadow-inner space-y-3 relative overflow-hidden">
              <div className="absolute top-2 right-2 text-emerald-900/30">
                <User className="w-12 h-12" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Cliente do Stand diz:</span>
              </div>
              <p className="text-white text-sm italic font-medium relative z-10 leading-relaxed">
                "{scenario.customerDialogue}"
              </p>
            </div>

            <div className="text-emerald-500/50 text-[11px] flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" />
              Selecione a melhor alternativa ao lado
            </div>
          </div>

          {/* Right panel: Multiple choices */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-3">
              {scenario.choices.map((choice, idx) => {
                const isSelected = selectedChoice?.text === choice.text;
                
                let btnStyle = "border-emerald-800/40 bg-emerald-900/10 hover:bg-emerald-900/20 hover:border-emerald-700/50 text-emerald-100 cursor-pointer";
                if (selectedChoice) {
                  if (isSelected) {
                    btnStyle = choice.isCorrect 
                      ? "border-emerald-500 bg-emerald-950/60 text-emerald-300 ring-2 ring-emerald-500/20 font-bold" 
                      : "border-rose-500 bg-rose-950/60 text-rose-300 ring-2 ring-rose-500/20 font-bold";
                  } else {
                    btnStyle = "border-emerald-900/20 bg-emerald-950/20 text-emerald-700 cursor-not-allowed opacity-50";
                  }
                }

                return (
                  <button
                    key={idx}
                    id={`choice-btn-${idx}`}
                    onClick={() => handleSelectChoice(choice)}
                    disabled={selectedChoice !== null}
                    className={`w-full text-left p-4 rounded-2xl border text-sm font-medium transition-all duration-200 flex items-start gap-3 ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-emerald-950 border border-emerald-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{choice.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Answer feedback panel */}
            {selectedChoice && (
              <div 
                id="scenario-feedback"
                className={`p-5 rounded-3xl border animate-fade-in space-y-4 shadow-lg ${
                  selectedChoice.isCorrect 
                    ? "bg-emerald-950/80 border-emerald-500/30 text-emerald-100" 
                    : "bg-rose-950/50 border-rose-500/30 text-emerald-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  {selectedChoice.isCorrect ? (
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-sm">
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      Escolha Correta! ({selectedChoice.meterImpact >= 0 ? "+" : ""}{selectedChoice.meterImpact}%)
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-rose-400 font-bold text-sm">
                      <XCircle className="w-5 h-5 shrink-0" />
                      Escolha Inadequada! ({selectedChoice.meterImpact}%)
                    </div>
                  )}
                </div>

                <p className="text-emerald-100/90 text-xs leading-relaxed">
                  {selectedChoice.feedback}
                </p>

                <div className="flex justify-end pt-1">
                  <button
                    onClick={handleNextStage}
                    className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-emerald-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-transform hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    {currentStageIdx < simulationScenarios.length - 1 ? "Próximo Cenário" : "Ver Meu Rank Final"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      ) : (
        /* Game Over / Results panel */
        <div id="simulation-completed-panel" className="p-8 rounded-3xl bg-emerald-900/20 border border-emerald-800/40 text-center space-y-6 max-w-2xl mx-auto shadow-xl">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-950 to-emerald-900 border border-emerald-800/60 flex items-center justify-center text-amber-400 mx-auto shadow-lg">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Simulação Concluída!</span>
            <h4 className="text-2xl md:text-3xl font-bold font-display text-white">Seu Score Final: {score}%</h4>
          </div>

          {/* Rank Badge */}
          <div className={`p-6 rounded-2xl border ${rank.color} text-left space-y-2 shadow-inner`}>
            <div className="flex items-center gap-2 text-lg font-bold font-display">
              <Award className="w-6 h-6" />
              {rank.title}
            </div>
            <p className="text-emerald-100 text-xs leading-relaxed">
              {rank.desc}
            </p>
          </div>

          {/* History summary breakdown */}
          <div className="border-t border-emerald-800/40 pt-6 space-y-3 text-left">
            <h5 className="text-emerald-400 font-bold font-display text-xs uppercase tracking-wider">Resumo dos Desafios:</h5>
            <div className="space-y-2.5">
              {history.map((h, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-emerald-950 border border-emerald-900/60 text-xs shadow-inner">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-emerald-200 block">{h.stageName}</span>
                    <span className="text-emerald-400/60 text-[11px] line-clamp-1">Sua resposta: "{h.choiceText}"</span>
                  </div>
                  <div className="shrink-0 flex items-center gap-1.5 ml-4">
                    <span className={h.impact >= 0 ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
                      {h.impact >= 0 ? "+" : ""}{h.impact}%
                    </span>
                    {h.isCorrect ? <CheckCircle className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-rose-500" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-emerald-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-transform active:scale-95 duration-200 cursor-pointer"
            >
              Jogar Novamente / Recomeçar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
