import { z } from 'zod';
import { ACCESS_PRIVILEGE } from '../../../common/enums';

export const createAccessInput = z.object({
  userId: z.number({ required_error: 'user id is required' }),
  documentId: z.number({ required_error: 'document id is required' }),
  privilege: z.nativeEnum(ACCESS_PRIVILEGE),
});

export type CreateAccessInput = z.infer<typeof createAccessInput>;
