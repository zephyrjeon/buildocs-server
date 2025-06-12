import { z } from 'zod';

export const updateUserInput = z.object({
  id: z.number({ required_error: 'id is required' }),
  email: z.string().email('not a valid email').optional(),
  name: z
    .string()
    .min(4, 'name too short - should be 4 chars minimum')
    .optional(),
});

export type UpdateUserInput = z.infer<typeof updateUserInput>;
