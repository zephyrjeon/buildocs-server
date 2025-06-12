import { z } from 'zod';

export const createPageInput = z.object({
  ownerId: z.number({ required_error: 'owner id is required' }),
  documentId: z.number({ required_error: 'document id is required' }),
});

export type CreatePageInput = z.infer<typeof createPageInput>;
