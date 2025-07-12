import { defineCollection, z } from 'astro:content';

// Coleção de padrões de arquitetura
const patternsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    layout: z.string(),
    category: z.string(),
    featured: z.boolean().optional(),
    scores: z.record(z.string(), z.number()).optional(),
  }),
});

const guidesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  patterns: patternsCollection,
  guides: guidesCollection,
}; 