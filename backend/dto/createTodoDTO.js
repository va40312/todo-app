const { z } = require('zod');

const createTodoDTOSchema = z.object({
  text: z.string().max(100).min(1)
});

module.exports = createTodoDTOSchema