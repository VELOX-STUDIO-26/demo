import { defineField, defineType } from "sanity";

export const featureItem = defineType({
  name: "featureItem",
  title: "Feature Item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "text",
    },
  },
});
