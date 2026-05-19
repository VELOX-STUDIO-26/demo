import { author } from "./author";
import { category } from "./category";
import { tag } from "./tag";
import { post } from "./post";
import { featureItem } from "./objects/featureItem";
import { featureList } from "./objects/featureList";
import { pullQuote } from "./objects/pullQuote";

export const schemaTypes = [
  post,
  author,
  category,
  tag,
  featureItem,
  featureList,
  pullQuote,
];
