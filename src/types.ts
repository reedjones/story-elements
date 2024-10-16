// src/storyElements.ts

export type Conflict = {
  description: string;
  stakes: string;  // The importance of the conflict
  resolutionPath: string;  // How the conflict is resolved
};

export type Theme = {
  mainTheme: string;  // The primary theme of the content
  subThemes: string[];  // Additional themes present in the content
};

export type PointOfView = {
  perspective: 'first-person' | 'second-person' | 'third-person';  // Narrative perspective
  narrator: string;  // The name or identifier of the narrator
};

export type Resolution = {
  outcome: string;  // The final outcome of the narrative
  implications: string;  // What the resolution means for the characters or themes
};

export type Climax = {
  moment: string;  // The peak moment of tension in the story
  impact: string;  // The significance of the climax on the overall narrative
};

export type FallingAction = {
  events: string[];  // Events that happen after the climax
  characterResponses: string[];  // How characters react during the falling action
};

export type Tone = {
  mood: 'light-hearted' | 'serious' | 'dark' | 'optimistic' | 'pessimistic';  // General mood of the content
  style: string;  // Descriptive words that define the tone
};

export type Exposition = {
  background: string;  // Context or background information relevant to the narrative
  setting: string;  // The time and place where the narrative occurs
};

export type Protagonist = {
  name: string;  // Name of the main character
  traits: string[];  // Key personality traits of the protagonist
};

export type Dialogue = {
  exchanges: { speaker: string; text: string }[];  // Dialogue exchanges between characters
};

export type Style = {
  language: string;  // Descriptive of the language used (e.g., formal, colloquial)
  devices: string[];  // Literary devices used (e.g., metaphors, similes)
};

export type Symbolism = {
  symbols: string[];  // Objects, characters, or colors that represent larger ideas
  meanings: string[];  // The meanings associated with each symbol
};

// Aggregated type for the narrative content model
export type NarrativeContent = {
  conflict: Conflict;
  theme: Theme;
  pointOfView: PointOfView;
  resolution: Resolution;
  climax: Climax;
  fallingAction: FallingAction;
  tone: Tone;
  exposition: Exposition;
  protagonist: Protagonist;
  dialogue: Dialogue;
  style: Style;
  symbolism: Symbolism;
};
