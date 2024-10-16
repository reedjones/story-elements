import { defineNestedType } from 'contentlayer/source-files';

// Conflict: Used to describe tensions or challenges related to the content (e.g., challenges faced in a product development).
export const Conflict = defineNestedType(() => ({
  name: 'Conflict',
  fields: {
    description: { type: 'string', required: true },
    type: { type: 'enum', options: ['internal', 'external'], required: true },
    resolution: { type: 'string', description: 'How was the conflict resolved?' },
  },
}));

// Theme: Represents overarching topics or concepts (e.g., sustainability for a product, self-growth for a blog post).
export const Theme = defineNestedType(() => ({
  name: 'Theme',
  fields: {
    name: { type: 'string', required: true },
    description: { type: 'string' },
  },
}));

// Point of View: Describes perspective from which the content is presented (e.g., author’s perspective in a blog post, or a customer’s perspective in a testimonial).
export const PointOfView = defineNestedType(() => ({
  name: 'PointOfView',
  fields: {
    perspective: { type: 'enum', options: ['first-person', 'third-person', 'objective'], required: true },
    details: { type: 'string' },
  },
}));

// Resolution: Final outcome or conclusion (e.g., what a product solves, or a conclusion to a discussion).
export const Resolution = defineNestedType(() => ({
  name: 'Resolution',
  fields: {
    outcome: { type: 'string', required: true },
    summary: { type: 'markdown' },
  },
}));

// Climax: High point of interest or turning point (e.g., product launch, event highlight in a blog post).
export const Climax = defineNestedType(() => ({
  name: 'Climax',
  fields: {
    event: { type: 'string', required: true },
    significance: { type: 'markdown' },
  },
}));

// Falling Action: What happens after the main event (e.g., post-launch analysis, blog post follow-up).
export const FallingAction = defineNestedType(() => ({
  name: 'FallingAction',
  fields: {
    details: { type: 'markdown' },
  },
}));

// Tone: The mood or feel of the content (e.g., formal, casual, promotional).
export const Tone = defineNestedType(() => ({
  name: 'Tone',
  fields: {
    mood: { type: 'enum', options: ['formal', 'informal', 'casual', 'serious'], required: true },
    description: { type: 'string' },
  },
}));

// Exposition: Background or context information (e.g., product history, introductory blog post).
export const Exposition = defineNestedType(() => ({
  name: 'Exposition',
  fields: {
    context: { type: 'markdown', required: true },
    background: { type: 'string' },
  },
}));

// Protagonist: Main subject or actor in the content (e.g., a product, a founder, a user story).
export const Protagonist = defineNestedType(() => ({
  name: 'Protagonist',
  fields: {
    name: { type: 'string', required: true },
    role: { type: 'string' },
    bio: { type: 'markdown' },
  },
}));

// Dialogue: Interactions or conversations (e.g., between the brand and its customers).
export const Dialogue = defineNestedType(() => ({
  name: 'Dialogue',
  fields: {
    participants: { type: 'list', of: { type: 'string' }, required: true },
    transcript: { type: 'markdown' },
  },
}));

// Style: Visual or written style (e.g., minimalistic for product design, persuasive for blog post writing).
export const Style = defineNestedType(() => ({
  name: 'Style',
  fields: {
    visualStyle: { type: 'string', description: 'Visual style or aesthetic (e.g., minimal, bold)' },
    writingStyle: { type: 'string', description: 'Writing tone or style (e.g., conversational, academic)' },
  },
}));

// Symbolism: Metaphorical or symbolic representations (e.g., in branding, product messaging, or blog content).
export const Symbolism = defineNestedType(() => ({
  name: 'Symbolism',
  fields: {
    symbols: { type: 'list', of: { type: 'string' }, required: true },
    meaning: { type: 'markdown' },
  },
}));

export const ContentElements = {
  Conflict,
  Theme,
  PointOfView,
  Resolution,
  Climax,
  FallingAction,
  Tone,
  Exposition,
  Protagonist,
  Dialogue,
  Style,
  Symbolism,
};
