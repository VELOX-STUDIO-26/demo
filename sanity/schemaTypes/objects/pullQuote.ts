import { defineField, defineType } from "sanity";

export const pullQuote = defineType({
  name: "pullQuote",
  title: "Pull Quote",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Quote",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cite",
      title: "Citation",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "text",
      subtitle: "cite",
    },
    prepare({ title, subtitle }) {
      return {
        title: title ? `${title}` : "Quote",
        subtitle: subtitle || "",
      };
    },
  },
});
