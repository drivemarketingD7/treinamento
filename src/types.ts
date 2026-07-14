/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Objection {
  id: string;
  title: string;
  customerText: string;
  responseText: string;
  explanation: string;
}

export interface ApproachStep {
  number: number;
  title: string;
  objective: string;
  checklist: string[];
  examples: string[];
  tip: string;
}

export interface SimulationChoice {
  text: string;
  isCorrect: boolean;
  feedback: string;
  meterImpact: number; // e.g. +20, -15, etc.
}

export interface SimulationScenario {
  id: string;
  stageName: string;
  description: string;
  customerDialogue: string;
  choices: SimulationChoice[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  savings: string;
}
