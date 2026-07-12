import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './project'

// Sekarang kita export sebagai object bernama 'schema' agar sesuai dengan sanity.config.ts
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType],
}