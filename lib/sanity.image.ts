import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./sanity.api";

const imageBuilder = imageUrlBuilder({ projectId, dataset });

// Define the type locally since it's not exported
interface SanityImageSource {
  asset?: {
    _ref?: string;
    _type?: string;
  };
  _type?: string;
}

export const urlForImage = (source: SanityImageSource | undefined | null) => {
  if (!source) {
    return null;
  }

  return imageBuilder.image(source).auto("format");
};
