import { z, defineCollection } from "astro:content"

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string().optional(),
      heroImg: image().optional(),
      heroImgCredit: z.string().optional(),
      tags: z.string().array().optional(),
    }),
})

export const collections = {
  blog: blogCollection,
}
