import { z } from 'zod';

export const createUserInput = z.object({
  email: z
    .string({
      required_error: 'email is required',
    })
    .email('not a valid email'),
  name: z
    .string({
      required_error: 'name is required',
    })
    .min(4, 'name too short - should be 4 chars minimum'),
});

export type CreateUserInput = z.infer<typeof createUserInput>;
