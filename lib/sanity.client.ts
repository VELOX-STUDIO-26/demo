import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId, useCdn } from "./sanity.api";

const baseConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn,
};

export const client = createClient(baseConfig);

export const previewClient = createClient({
  ...baseConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: "previewDrafts" as const,
});

export const getClient = (usePreview: boolean) =>
  usePreview ? previewClient : client;
