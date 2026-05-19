import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes/index";

const projectId = "ix0f1c5t";
const dataset = "production";

export default defineConfig({
  name: "default",
  title: "AI METRIX Blog",
  projectId,
  dataset,
  studioHost: "ai-metrix-blog",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
});
