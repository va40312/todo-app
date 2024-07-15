const { z } = require('zod');

const loginSchema = z.string()
  .min(3, "Login must be at least 3 characters long")
  .max(15, "Login must be no more than 15 characters long")
  .regex(/^[a-zA-Z0-9]+$/, "Login must contain only English letters");

const passwordSchema = z.string()
  .min(5, "Password must be at least 5 characters long")
  .max(30, "Password must be no more than 30 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/\d{2,}/, "Password must contain at least two digits")

const registerDTOSchema = z.object({
  login: loginSchema,
  password: passwordSchema,
});

module.exports = registerDTOSchema