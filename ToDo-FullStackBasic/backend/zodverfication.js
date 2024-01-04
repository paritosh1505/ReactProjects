const z = require('zod')

const Zodfield = z.object({
 title:z.string(),
 desc: z.string()
})

module.exports = {Zodfield}