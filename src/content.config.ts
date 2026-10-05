import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const categorias = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/categorias' }),
  schema: z.object({
    nome: z.string(),
    cor: z.string(),
  }),
});

const autores = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/autores' }),
  schema: z.object({
    nome: z.string(),
    profissao: z.string(),
    resumo: z.string(),
    foto: z.string().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    titulo: z.string(),
    slug: z.string(),
    resumo: z.string(),
    imagemDestacada: z.string(),
    categoria: reference('categorias'),
    autor: reference('autores'),
    tempoDeLeitura: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = {
  categorias,
  autores,
  posts,
};
