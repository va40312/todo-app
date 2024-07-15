const { z } = require('zod');

const updateTodoDTOSchema = z.object({
  text: z.string().max(100).min(1).optional(),
  isComplete: z.boolean().optional()
});

module.exports = updateTodoDTOSchema