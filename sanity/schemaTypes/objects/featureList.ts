import { defineField, defineType } from "sanity";

export const featureList = defineType({
  name: "featureList",
  title: "Feature List",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "featureItem" }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      items: "items",
    },
    prepare({ title, items }) {
      const count = Array.isArray(items) ? items.length : 0;
      return {
        title: title || "Feature List",
        subtitle: `${count} item${count === 1 ? "" : "s"}`,
      };
    },
  },
});
