import { z } from 'zod';

export const updateDocumentInput = z.object({
  id: z.number({ required_error: 'id is required' }),
  title: z.string().optional(),
  order: z.number().optional(),
});

export type UpdateDocumentInput = z.infer<typeof updateDocumentInput>;
