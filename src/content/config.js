import { z, defineCollection } from "astro:content"

// const blogCollection = defineCollection({
//   type: "content",
// })
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string().optional(),
      heroImg: image().optional(),
    }),
})

export const collections = {
  blog: blogCollection,
}
