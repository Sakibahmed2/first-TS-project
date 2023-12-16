import { z } from 'zod';

export const userSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'password must be string',
    })
    .max(20, { message: 'password cannot be 20 characters' })
    .optional(),
});

export const userValidation = {
  userSchema,
};
