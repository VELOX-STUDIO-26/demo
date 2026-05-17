import { defineCliConfig } from "sanity/cli";

const projectId = "ix0f1c5t";
const dataset = "production";

export default defineCliConfig({
  api: { projectId, dataset },
});
