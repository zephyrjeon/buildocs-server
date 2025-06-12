import { z } from 'zod';
import { ACCESS_PRIVILEGE } from '../../../common/enums';

export const updateAccessInput = z.object({
  id: z.number({ required_error: 'id is required' }),
  privilege: z.nativeEnum(ACCESS_PRIVILEGE).optional(),
});

export type UpdateAccessInput = z.infer<typeof updateAccessInput>;
