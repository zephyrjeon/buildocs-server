import { z } from 'zod';

export const updatePageInput = z.object({
  id: z.number({ required_error: 'id is required' }),
  title: z.string().optional(),
  order: z.number().optional(),
});

export type UpdatePageInput = z.infer<typeof updatePageInput>;
