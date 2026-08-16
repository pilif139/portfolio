import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  tech: z.array(z.string()),
  links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ProjectSchema
});

const CertificationSchema = z.object({
  title: z.string(),
  skills: z.array(z.string()),
  date: z.date() // TODO: check what real world certificates are made of
})

const certificates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/conent/certificates'}),
  schema: CertificationSchema
})

export const collections = {
  'projects': projects,
  'certificates': certificates
};
